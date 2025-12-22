#!/usr/bin/env node

// Test region and trek fetching
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'lDRTIBkgKSB79Tg74V6mYwtt',
});

async function testRegionFetch() {
  try {
    console.log('🔍 Testing region fetching...\n');
    
    // Fetch the main story
    const { data } = await Storyblok.get('cdn/stories/trek', {
      version: 'draft',
    });
    
    const sections = data.story.content.sections || [];
    const regionSections = sections.filter(s => s.component === 'region_section');
    
    const allRegions = [];
    regionSections.forEach(section => {
      if (section.regions) {
        allRegions.push(...section.regions);
      }
    });
    
    console.log(`📦 Total regions found: ${allRegions.length}\n`);
    
    // Test each region
    allRegions.forEach((region, i) => {
      const regionName = region.name;
      const regionSlug = regionName?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      const trekCount = region.treks?.length || 0;
      
      console.log(`Region ${i + 1}:`);
      console.log(`   Name: "${regionName}"`);
      console.log(`   Generated Slug: "${regionSlug}"`);
      console.log(`   Treks: ${trekCount}`);
      
      if (region.treks && region.treks.length > 0) {
        region.treks.forEach((trek, j) => {
          const trekName = trek.name;
          const trekSlug = trekName?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          console.log(`      ${j + 1}. "${trekName}" → slug: "${trekSlug}"`);
        });
      }
      console.log('');
    });
    
    // Test specific region fetch by slug
    console.log('🧪 Testing fetch by slug "everest"...');
    const testSlug = 'everest';
    const foundRegion = allRegions.find(r => {
      const slug = r.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return slug === testSlug;
    });
    
    if (foundRegion) {
      console.log(`✅ Found region: "${foundRegion.name}"`);
      console.log(`   Treks in region: ${foundRegion.treks?.length || 0}`);
      if (foundRegion.treks) {
        foundRegion.treks.forEach((trek, i) => {
          console.log(`      ${i + 1}. ${trek.name}`);
        });
      }
    } else {
      console.log(`❌ Region with slug "${testSlug}" not found`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testRegionFetch();
