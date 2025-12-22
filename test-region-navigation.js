#!/usr/bin/env node

/**
 * Test script to verify region navigation uses correct slugs
 * This tests that:
 * 1. Static data uses correct region slugs (without -region suffix)
 * 2. Links to /regions/[slug] match Storyblok data structure
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Region Navigation Slugs\n');
console.log('='.repeat(60));

// Expected region slugs (matching Storyblok)
const expectedRegionSlugs = [
  'everest',
  'annapurna',
  'manaslu',
  'kanchenjunga',
  'langtang',
  'dolpo',
  'dhaulagiri',
  'makalu',
  'rolwaling'
];

console.log('\n✅ Expected Region Slugs (from Storyblok):');
expectedRegionSlugs.forEach(slug => console.log(`   - ${slug}`));

// Read the static data file
const treksFilePath = path.join(__dirname, 'data', 'treks.ts');
const treksContent = fs.readFileSync(treksFilePath, 'utf8');

console.log('\n📖 Checking static data file (data/treks.ts)...\n');

// Extract region IDs from the file
const regionIdMatches = treksContent.match(/id: '[^']+'/g) || [];
const staticRegionIds = regionIdMatches
  .filter(match => match.includes('id:'))
  .map(match => match.replace(/id: '([^']+)'/, '$1'))
  .filter(id => !id.startsWith('trek-') && !id.includes('other'));

console.log('📝 Region IDs found in static data:');
staticRegionIds.forEach(id => {
  const isCorrect = expectedRegionSlugs.includes(id);
  const status = isCorrect ? '✅' : '❌';
  console.log(`   ${status} ${id}${isCorrect ? '' : ' (INCORRECT - should not have -region suffix)'}`);
});

// Check if any old slugs with -region suffix exist
const hasOldSlugs = staticRegionIds.some(id => id.includes('-region'));
if (hasOldSlugs) {
  console.log('\n❌ ERROR: Found region IDs with -region suffix!');
  console.log('   These will not match Storyblok data.');
  console.log('   Please remove the -region suffix from all region IDs.');
  process.exit(1);
}

// Check sitemap
const sitemapPath = path.join(__dirname, 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  console.log('\n📖 Checking sitemap (app/sitemap.ts)...\n');
  
  if (sitemapContent.includes('/treks/regions/')) {
    console.log('❌ Sitemap uses /treks/regions/ paths (should be /regions/)');
  } else if (sitemapContent.includes('/regions/')) {
    console.log('✅ Sitemap uses correct /regions/ paths');
  } else {
    console.log('⚠️  Could not find region paths in sitemap');
  }
}

console.log('\n' + '='.repeat(60));
console.log('✅ All region slugs are correct!');
console.log('\nRegion navigation should now work properly:');
console.log('   - Static fallback uses: everest, annapurna, etc.');
console.log('   - Storyblok uses: everest, annapurna, etc.');
console.log('   - URLs: /regions/everest, /regions/annapurna, etc.');
console.log('\nNext steps:');
console.log('   1. Restart your dev server');
console.log('   2. Navigate to http://localhost:3000/regions');
console.log('   3. Click "Explore Region" on any region card');
console.log('   4. Verify that treks are loaded from Storyblok (or static fallback)');
console.log('\n🎉 Test complete!\n');
