#!/usr/bin/env node

// Test the full conversion process
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'lDRTIBkgKSB79Tg74V6mYwtt',
});

// Simulate the converter
function convertTrek(trekBlock, regionName, regionSlug) {
  const slug = trekBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-trek';
  
  return {
    id: slug,
    name: trekBlock.name || 'Untitled Trek',
    duration: trekBlock.duration || 'N/A',
    altitude: trekBlock.altitude || 'N/A',
    difficulty: trekBlock.difficulty || 'Moderate',
    description: trekBlock.description || '',
    highlights: trekBlock.highlights?.map(h => h.text) || [],
    image: trekBlock.image?.filename || '/assets/images/default-trek.jpg',
    price: trekBlock.price || 'Contact for pricing',
    season: trekBlock.season || 'Year-round',
    groupSize: trekBlock.groupSize || '1-10 people',
    region: regionName,
    adventureType: trekBlock.adventureType?.toLowerCase() || 'trekking',
    included: trekBlock.included?.map(i => i.text) || [],
    excluded: trekBlock.excluded?.map(e => e.text) || [],
    requirements: trekBlock.requirements?.map(r => r.text) || [],
    mapUrl: trekBlock.mapUrl,
  };
}

async function testFullFlow() {
  try {
    console.log('🧪 Testing full conversion flow for region "everest"...\n');
    
    // 1. Fetch story
    const { data } = await Storyblok.get('cdn/stories/trek', {
      version: 'draft',
    });
    
    // 2. Extract regions
    const sections = data.story.content.sections || [];
    const regionSections = sections.filter(s => s.component === 'region_section');
    const allRegions = [];
    regionSections.forEach(section => {
      if (section.regions) {
        allRegions.push(...section.regions);
      }
    });
    
    // 3. Find everest region
    const testSlug = 'everest';
    const region = allRegions.find(r => {
      const slug = r.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return slug === testSlug;
    });
    
    if (!region) {
      console.error(`❌ Region "${testSlug}" not found!`);
      return;
    }
    
    console.log(`✅ Found region: "${region.name}"`);
    console.log(`   Raw treks: ${region.treks?.length || 0}\n`);
    
    // 4. Convert treks
    if (region.treks) {
      const regionSlug = region.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      
      console.log('📦 Converting treks:');
      region.treks.forEach((trek, i) => {
        console.log(`\n   Trek ${i + 1}: "${trek.name}"`);
        console.log(`      Raw adventureType: "${trek.adventureType}"`);
        console.log(`      Raw difficulty: "${trek.difficulty}"`);
        
        const converted = convertTrek(trek, region.name, regionSlug);
        
        console.log(`      ✓ Converted adventureType: "${converted.adventureType}"`);
        console.log(`      ✓ Converted difficulty: "${converted.difficulty}"`);
        console.log(`      ✓ Region: "${converted.region}"`);
        console.log(`      ✓ ID/Slug: "${converted.id}"`);
      });
      
      // 5. Filter to only trekking
      const convertedTreks = region.treks
        .map(t => convertTrek(t, region.name, regionSlug))
        .filter(t => t.adventureType === 'trekking');
      
      console.log(`\n🎯 Results:`);
      console.log(`   Total raw treks: ${region.treks.length}`);
      console.log(`   Filtered trekking treks: ${convertedTreks.length}`);
      
      if (convertedTreks.length === 0) {
        console.log('\n⚠️  WARNING: No treks after filtering!');
        console.log('   This means adventureType !== "trekking" for all treks');
      } else {
        console.log('\n✅ These treks will be displayed:');
        convertedTreks.forEach((trek, i) => {
          console.log(`   ${i + 1}. ${trek.name}`);
        });
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testFullFlow();
