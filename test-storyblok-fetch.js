#!/usr/bin/env node

// Quick test to verify Storyblok data fetching
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'lDRTIBkgKSB79Tg74V6mYwtt',
});

async function test() {
  try {
    console.log('🔍 Fetching trek story from Storyblok...\n');
    
    const { data } = await Storyblok.get('cdn/stories/trek', {
      version: 'draft',
    });
    
    const story = data.story;
    console.log(`✅ Story found: "${story.name}"`);
    console.log(`   Published: ${story.published_at ? 'Yes' : 'No (Draft only)'}`);
    console.log(`   Updated: ${story.updated_at}\n`);
    
    const sections = story.content.sections || [];
    console.log(`📦 Sections: ${sections.length}`);
    
    sections.forEach((section, i) => {
      if (section.component === 'region_section') {
        const regions = section.regions || [];
        console.log(`   Section ${i + 1}: region_section with ${regions.length} regions`);
        
        regions.forEach((region, j) => {
          const treks = region.treks || [];
          console.log(`      Region ${j + 1}: "${region.name}" - ${treks.length} treks`);
          treks.forEach((trek, k) => {
            console.log(`         Trek ${k + 1}: "${trek.name}"`);
          });
        });
      }
    });
    
    console.log('\n🎉 Your Storyblok content is ready!');
    console.log('   Run: npm run dev');
    console.log('   Then visit: http://localhost:3000/regions\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Data:', error.response.data);
    }
  }
}

test();
