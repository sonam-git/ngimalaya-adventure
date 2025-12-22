/**
 * Font Diagnostic Script
 * Run this in your browser console to diagnose font rendering issues
 * Copy and paste into browser console: then run: checkFonts()
 */

function checkFonts() {
  console.log('%c=== FONT DIAGNOSTIC REPORT ===', 'color: blue; font-weight: bold; font-size: 16px;');
  console.log('\n');
  
  // Check if fonts are loaded
  console.log('%c1. FONT LOADING STATUS:', 'color: green; font-weight: bold;');
  if (document.fonts) {
    document.fonts.ready.then(() => {
      const fonts = Array.from(document.fonts);
      const uniqueFonts = [...new Set(fonts.map(f => f.family))];
      console.log('  ✓ Loaded fonts:', uniqueFonts.join(', '));
      
      // Check specific fonts
      const requiredFonts = ['Jaini Purva', 'Lato', 'Satisfy', 'Lugrasimo'];
      requiredFonts.forEach(fontName => {
        const loaded = fonts.some(f => f.family === fontName && f.status === 'loaded');
        console.log(`  ${loaded ? '✓' : '✗'} ${fontName}: ${loaded ? 'LOADED' : 'NOT LOADED'}`);
      });
    });
  } else {
    console.log('  ⚠ Font Loading API not supported');
  }
  
  console.log('\n');
  console.log('%c2. HEADING ELEMENTS:', 'color: green; font-weight: bold;');
  
  // Check all headings
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
    const elements = document.querySelectorAll(tag);
    if (elements.length > 0) {
      const el = elements[0];
      const computedFont = window.getComputedStyle(el).fontFamily;
      const color = computedFont.includes('Jaini Purva') ? 'green' : 'red';
      console.log(`  %c${tag}: ${computedFont}`, `color: ${color}`);
      
      if (!computedFont.includes('Jaini Purva')) {
        console.log(`    ⚠ ISSUE: Should be using Jaini Purva!`);
        console.log(`    Classes:`, el.className);
        console.log(`    Inline style:`, el.style.fontFamily || 'none');
      }
    }
  });
  
  console.log('\n');
  console.log('%c3. BODY TEXT ELEMENTS:', 'color: green; font-weight: bold;');
  
  // Check body and paragraphs
  const body = document.body;
  const bodyFont = window.getComputedStyle(body).fontFamily;
  const bodyColor = bodyFont.includes('Lato') ? 'green' : 'red';
  console.log(`  %cbody: ${bodyFont}`, `color: ${bodyColor}`);
  
  const p = document.querySelector('p');
  if (p) {
    const pFont = window.getComputedStyle(p).fontFamily;
    const pColor = pFont.includes('Lato') ? 'green' : 'red';
    console.log(`  %cp: ${pFont}`, `color: ${pColor}`);
  }
  
  console.log('\n');
  console.log('%c4. SPECIAL FONT CLASSES:', 'color: green; font-weight: bold;');
  
  // Check special font classes
  const specialClasses = [
    { selector: '.font-heading', expected: 'Jaini Purva' },
    { selector: '.font-display', expected: 'Jaini Purva' },
    { selector: '.font-body', expected: 'Lato' },
    { selector: '.jaini-purva-regular', expected: 'Jaini Purva' },
    { selector: '.satisfy', expected: 'Satisfy' },
    { selector: '.lugrasimo', expected: 'Lugrasimo' },
    { selector: '.times', expected: 'Times New Roman' }
  ];
  
  specialClasses.forEach(({ selector, expected }) => {
    const el = document.querySelector(selector);
    if (el) {
      const font = window.getComputedStyle(el).fontFamily;
      const isCorrect = font.includes(expected);
      const color = isCorrect ? 'green' : 'red';
      console.log(`  %c${selector}: ${font}`, `color: ${color}`);
      if (!isCorrect) {
        console.log(`    ⚠ Expected: ${expected}`);
      }
    } else {
      console.log(`  ⚠ ${selector}: NOT FOUND ON PAGE`);
    }
  });
  
  console.log('\n');
  console.log('%c5. CSS SPECIFICITY CHECK:', 'color: green; font-weight: bold;');
  
  // Check for conflicting styles
  const h1 = document.querySelector('h1');
  if (h1) {
    const styles = window.getComputedStyle(h1);
    console.log('  First <h1> element:');
    console.log('    font-family:', styles.fontFamily);
    console.log('    font-weight:', styles.fontWeight);
    console.log('    color:', styles.color);
    console.log('    Classes:', h1.className);
    
    // Check for inline styles
    if (h1.style.fontFamily) {
      console.log('    ⚠ HAS INLINE FONT-FAMILY:', h1.style.fontFamily);
    }
  }
  
  console.log('\n');
  console.log('%c6. POTENTIAL ISSUES:', 'color: orange; font-weight: bold;');
  
  // Check for Google Translate interference
  const fontTags = document.querySelectorAll('font');
  if (fontTags.length > 0) {
    console.log(`  ⚠ Found ${fontTags.length} <font> tags (likely from Google Translate)`);
    console.log('    This might be interfering with font rendering');
  }
  
  // Check for inline font-family styles
  const inlineFont = document.querySelectorAll('[style*="font-family"]');
  if (inlineFont.length > 0) {
    console.log(`  ⚠ Found ${inlineFont.length} elements with inline font-family styles`);
    console.log('    Sample:', inlineFont[0]);
  }
  
  console.log('\n');
  console.log('%c=== END DIAGNOSTIC REPORT ===', 'color: blue; font-weight: bold; font-size: 16px;');
  console.log('\n%cTo fix issues, try:', 'font-weight: bold;');
  console.log('1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)');
  console.log('2. Clear browser cache');
  console.log('3. Check that Google Fonts are loaded (Network tab)');
  console.log('4. Disable any browser extensions that might interfere');
}

// Auto-run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkFonts);
} else {
  checkFonts();
}

// Make it available globally
window.checkFonts = checkFonts;

console.log('%cFont Diagnostic Tool Loaded!', 'color: blue; font-weight: bold;');
console.log('Run checkFonts() in console to see detailed font analysis');
