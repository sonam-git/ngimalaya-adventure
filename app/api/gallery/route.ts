import { NextResponse } from 'next/server';
import StoryblokClient from 'storyblok-js-client';

// Force dynamic rendering to avoid caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
});

export interface GalleryItem {
  title: string;
  description: string;
  image: string;
  region: string;
  trek: string;
}

interface GalleryItemBlock {
  _uid: string;
  component: string;
  title?: string;
  description?: string;
  image?: {
    filename?: string;
    alt?: string;
  };
  region?: string;
  trek?: string;
}

interface StoryblokGalleryStory {
  id: string;
  name: string;
  slug: string;
  content: {
    component: string;
    gallery_item?: GalleryItemBlock[]; // Array of nested gallery_item blocks
  };
}

export async function GET() {
  try {
    console.log('🎨 Fetching Gallery story from Storyblok...');
    console.log('🔑 Access token exists:', !!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
    
    // Try to fetch the Gallery story - try different paths
    let response;
    let story: StoryblokGalleryStory | null = null;
    
    const pathsToTry = [
      'cdn/stories/gallery',
      'cdn/stories/Gallery', 
      'cdn/stories/home/gallery',
      'cdn/stories/home/Gallery'
    ];
    
    for (const path of pathsToTry) {
      try {
        console.log(`🔍 Trying path: ${path}`);
        response = await Storyblok.get(path, {
          version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        });
        story = response.data.story;
        console.log(`✅ Found story at path: ${path}`);
        break;
      } catch {
        console.log(`❌ No story at path: ${path}`);
        continue;
      }
    }

    if (!story || !story.content) {
      console.log('❌ No Gallery story found in Storyblok at any path');
      console.log('📝 Tried paths:', pathsToTry);
      return NextResponse.json({ 
        items: [],
        error: 'Gallery story not found',
        triedPaths: pathsToTry
      });
    }

    console.log('📝 Found Gallery story:', story.name);
    console.log('📝 Story slug:', story.slug);
    console.log('📝 Content component:', story.content.component);
    console.log('📝 Content structure:', JSON.stringify(Object.keys(story.content)));
    console.log('📝 Full content:', JSON.stringify(story.content, null, 2));
    
    // Try to find gallery items - check for various field name possibilities
    let galleryItemBlocks: GalleryItemBlock[] = [];
    
    // Check all possible field names
    const possibleFieldNames = [
      'Gallery_block',  // The actual field name from Storyblok!
      'gallery_block',
      'gallery_item',
      'Gallery_Item', 
      'Gallery Item',
      'galleryItem',
      'GalleryItem',
      'items',
      'gallery_items',
      'body'
    ];
    
    for (const fieldName of possibleFieldNames) {
      const value = story.content[fieldName as keyof typeof story.content];
      if (value && Array.isArray(value)) {
        galleryItemBlocks = value as GalleryItemBlock[];
        console.log(`✅ Found gallery blocks in field: "${fieldName}" (${galleryItemBlocks.length} items)`);
        break;
      }
    }
    
    if (galleryItemBlocks.length === 0) {
      console.log('❌ No gallery item blocks found in any field');
      console.log('📝 Available fields:', Object.keys(story.content));
      console.log('📝 Field values:', JSON.stringify(story.content, null, 2));
      return NextResponse.json({ 
        items: [],
        error: 'No gallery items found',
        availableFields: Object.keys(story.content),
        storyName: story.name
      });
    }

    console.log('📝 Found', galleryItemBlocks.length, 'gallery item blocks');
    console.log('📝 First block:', JSON.stringify(galleryItemBlocks[0], null, 2));
    
    // Map the gallery items from nested blocks
    const galleryItems: GalleryItem[] = galleryItemBlocks
      .filter((block: GalleryItemBlock) => {
        const componentName = block.component?.toLowerCase().replace(/[\s_-]/g, '');
        const isGalleryItem = componentName === 'galleryitem';
        const hasImage = block.image && block.image.filename;
        console.log(`📦 Block component: "${block.component}", normalized: "${componentName}", isGalleryItem: ${isGalleryItem}, hasImage: ${hasImage}`);
        return isGalleryItem && hasImage;
      })
      .map((block: GalleryItemBlock) => ({
        title: block.title || '',
        description: block.description || '',
        image: block.image?.filename || '',
        region: block.region || '',
        trek: block.trek || '',
      }));

    console.log('✅ Mapped gallery items:', galleryItems.length, 'items');
    if (galleryItems.length > 0) {
      console.log('✅ First item:', JSON.stringify(galleryItems[0], null, 2));
    } else {
      console.log('⚠️ No items matched the filter criteria');
    }

    // Return the gallery items
    return NextResponse.json({ items: galleryItems });

  } catch (error) {
    console.error('❌ Error fetching gallery:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    // Return empty array if there's an error
    return NextResponse.json({ 
      items: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
