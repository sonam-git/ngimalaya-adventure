#!/usr/bin/env node

/**
 * Generate PWA icons from your existing logo
 * Run: node generate-icons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Generating PWA icons from your Ngimalaya logo...\n');

// Icon sizes needed
const sizes = [
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
];

const publicDir = path.join(__dirname, 'public');
const sourceLogo = path.join(publicDir, 'favicon.png');

// Check if source logo exists
if (!fs.existsSync(sourceLogo)) {
  console.error('❌ Error: favicon.png not found in public folder!');
  process.exit(1);
}

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
  console.log('✅ Using sharp for high-quality PNG generation');
  console.log(`📁 Source: ${path.basename(sourceLogo)}\n`);
  
  // Generate PNGs with sharp from your logo
  (async () => {
    for (const { size, name } of sizes) {
      try {
        await sharp(sourceLogo)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toFile(path.join(publicDir, name));
        console.log(`✓ Generated ${name} (${size}x${size})`);
      } catch (error) {
        console.error(`✗ Failed to generate ${name}:`, error.message);
      }
    }
    
    // Generate favicon.ico from 32x32
    try {
      await sharp(sourceLogo)
        .resize(32, 32, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, 'favicon.ico'));
      console.log(`✓ Generated favicon.ico (32x32)`);
    } catch (error) {
      console.error(`✗ Failed to generate favicon.ico:`, error.message);
    }
    
    console.log('\n✅ All icons generated from your Ngimalaya logo!');
    console.log('🎉 Your actual logo is now used for all PWA icons!\n');
  })();
  
} catch (error) {
  console.log('⚠️  Sharp not installed. Installing sharp for image generation...\n');
  console.log('Run: npm install sharp --save-dev\n');
  process.exit(1);
}
