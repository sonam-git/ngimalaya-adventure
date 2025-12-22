/**
 * QUICK FONT VERIFICATION SCRIPT
 * Copy and paste this into your browser console on http://localhost:3000
 */

console.clear();
console.log('%c=== QUICK FONT CHECK ===', 'color: blue; font-size: 18px; font-weight: bold;');
console.log('\n');

// Check first heading
const h1 = document.querySelector('h1');
if (h1) {
  const font = window.getComputedStyle(h1).fontFamily;
  const isCorrect = font.includes('Jaini Purva');
  console.log(
    `%cH1 Font: ${font}`,
    `color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;`
  );
  console.log(isCorrect ? '✅ CORRECT - Using Jaini Purva' : '❌ WRONG - Should be Jaini Purva');
} else {
  console.log('%c⚠️ No h1 found on page', 'color: orange;');
}

console.log('\n');

// Check body text
const p = document.querySelector('p');
if (p) {
  const font = window.getComputedStyle(p).fontFamily;
  const isCorrect = font.includes('Lato');
  console.log(
    `%cParagraph Font: ${font}`,
    `color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;`
  );
  console.log(isCorrect ? '✅ CORRECT - Using Lato' : '❌ WRONG - Should be Lato');
} else {
  console.log('%c⚠️ No paragraph found on page', 'color: orange;');
}

console.log('\n');

// Check logo
const logo = document.querySelector('.jaini-purva-regular');
if (logo) {
  const font = window.getComputedStyle(logo).fontFamily;
  const isCorrect = font.includes('Jaini Purva');
  console.log(
    `%cLogo Font: ${font}`,
    `color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;`
  );
  console.log(isCorrect ? '✅ CORRECT - Using Jaini Purva' : '❌ WRONG - Should be Jaini Purva');
} else {
  console.log('%c⚠️ No .jaini-purva-regular found', 'color: orange;');
}

console.log('\n');

// Check if inline styles exist
const inlineStyle = Array.from(document.querySelectorAll('head style')).find(s => 
  s.innerHTML.includes('Jaini Purva')
);
if (inlineStyle) {
  console.log('%c✅ Inline critical CSS found in <head>', 'color: green; font-weight: bold;');
} else {
  console.log('%c❌ Inline critical CSS NOT found - this is the problem!', 'color: red; font-weight: bold;');
}

console.log('\n');

// Final verdict
console.log('%c=== VERDICT ===', 'color: blue; font-size: 16px; font-weight: bold;');
const h1Check = h1 && window.getComputedStyle(h1).fontFamily.includes('Jaini Purva');
const pCheck = p && window.getComputedStyle(p).fontFamily.includes('Lato');

if (h1Check && pCheck) {
  console.log('%c🎉 SUCCESS! Fonts are working correctly!', 'color: green; font-size: 18px; font-weight: bold;');
  console.log('Headings: Jaini Purva ✅');
  console.log('Body: Lato ✅');
} else if (h1Check && !pCheck) {
  console.log('%c⚠️ PARTIAL - Headings work, body text needs fix', 'color: orange; font-size: 16px; font-weight: bold;');
} else if (!h1Check && pCheck) {
  console.log('%c⚠️ PARTIAL - Body works, headings need fix', 'color: orange; font-size: 16px; font-weight: bold;');
} else {
  console.log('%c❌ PROBLEM - Fonts not applying correctly', 'color: red; font-size: 18px; font-weight: bold;');
  console.log('Action: Hard refresh (Cmd+Shift+R) or clear cache');
}
