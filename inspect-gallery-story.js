/**
 * Test script to inspect the Gallery story structure
 */

import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
});

async function inspectGalleryStory() {
  try {
    console.log('\n🔍 Inspecting Gallery story structure...\n');

    // Fetch stories with "gallery" in component name
    const response = await Storyblok.get('cdn/stories', {
      version: 'draft',
    });

    const galleryStories = response.data.stories.filter(s => 
      s.content?.component?.toLowerCase().includes('gallery')
    );

    if (galleryStories.length === 0) {
      console.log('❌ No gallery stories found');
      return;
    }

    galleryStories.forEach(story => {
      console.log('📖 Story:', story.name);
      console.log('   Component:', story.content.component);
      console.log('   Full slug:', story.full_slug);
      console.log('   Content structure:', JSON.stringify(story.content, null, 2));
      console.log('');
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

inspectGalleryStory();
