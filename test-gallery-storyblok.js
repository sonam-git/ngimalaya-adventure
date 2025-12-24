/**
 * Test script to check if gallery items exist in Storyblok
 * Run with: node test-gallery-storyblok.js
 */

import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
});

async function testGalleryFetch() {
  console.log('\n========================================');
  console.log('🎨 STORYBLOK GALLERY TEST');
  console.log('========================================\n');

  // Check if token is configured
  if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN) {
    console.error('❌ NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN not found in environment');
    console.log('💡 Make sure you have a .env.local file with your Storyblok token\n');
    return;
  }

  console.log('✅ Storyblok token configured:', 
    process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN.substring(0, 10) + '...\n');

  try {
    // Test 1: Fetch all stories to see what's available
    console.log('📚 Test 1: Fetching ALL stories from Storyblok...');
    const allResponse = await Storyblok.get('cdn/stories', {
      version: 'draft',
    });
    const allStories = allResponse.data.stories;
    console.log(`   Found ${allStories.length} total stories\n`);

    // Show component types
    const componentTypes = [...new Set(allStories.map(s => s.content?.component).filter(Boolean))];
    console.log('   📋 Available component types:');
    componentTypes.forEach(type => {
      const count = allStories.filter(s => s.content?.component === type).length;
      console.log(`      - ${type}: ${count} stories`);
    });
    console.log('');

    // Test 2: Fetch gallery-item stories specifically
    console.log('🖼️  Test 2: Fetching gallery-item stories...');
    const galleryResponse = await Storyblok.get('cdn/stories', {
      version: 'draft',
      filter_query: {
        component: {
          in: 'gallery-item',
        },
      },
    });

    const galleryStories = galleryResponse.data.stories;
    
    if (galleryStories.length === 0) {
      console.log('   ⚠️  No gallery-item stories found!\n');
      console.log('   📝 To fix this:');
      console.log('      1. Go to your Storyblok space');
      console.log('      2. Create a new component called "gallery-item"');
      console.log('      3. Add fields: title, description, image, region, trek');
      console.log('      4. Create some stories using this component');
      console.log('      5. Run this test again\n');
      console.log('   📖 See STORYBLOK-GALLERY-SETUP.md for detailed instructions\n');
    } else {
      console.log(`   ✅ Found ${galleryStories.length} gallery items!\n`);
      
      // Show first few gallery items
      console.log('   🎯 Gallery items found:');
      galleryStories.slice(0, 5).forEach((story, index) => {
        console.log(`      ${index + 1}. ${story.name}`);
        console.log(`         - Title: ${story.content.title || 'N/A'}`);
        console.log(`         - Image: ${story.content.image?.filename ? '✅' : '❌'}`);
        console.log(`         - Region: ${story.content.region || 'N/A'}`);
        console.log(`         - Trek: ${story.content.trek || 'N/A'}`);
      });
      
      if (galleryStories.length > 5) {
        console.log(`      ... and ${galleryStories.length - 5} more`);
      }
      console.log('');
    }

    // Test 3: Check for any stories with "gallery" in the name
    console.log('🔍 Test 3: Checking for stories with "gallery" in the name...');
    const galleryNamedStories = allStories.filter(s => 
      s.name.toLowerCase().includes('gallery') || 
      s.slug.toLowerCase().includes('gallery')
    );
    
    if (galleryNamedStories.length > 0) {
      console.log(`   Found ${galleryNamedStories.length} stories:`);
      galleryNamedStories.forEach(story => {
        console.log(`      - ${story.name} (${story.content?.component || 'unknown type'})`);
      });
    } else {
      console.log('   No stories with "gallery" in the name');
    }
    console.log('');

    console.log('========================================');
    console.log('✅ TEST COMPLETE');
    console.log('========================================\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('   Response status:', error.response.status);
      console.error('   Response data:', JSON.stringify(error.response.data, null, 2));
    }
    console.log('');
  }
}

// Run the test
testGalleryFetch();
