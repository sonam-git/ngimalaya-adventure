#!/bin/bash
# Font Test Script for Satisfy and Lugrasimo fonts

echo "🎨 Testing Satisfy & Lugrasimo Fonts..."
echo ""
echo "📋 Steps to test:"
echo ""
echo "1. Build and start server:"
echo "   cd /Users/sonamjsherpa/Desktop/ngimalaya-adventure"
echo "   rm -rf .next"
echo "   npm run build"
echo "   npm run dev"
echo ""
echo "2. Open browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Check Hero 'Welcome to' text:"
echo "   - Should be cursive/handwritten (Satisfy font)"
echo "   - Not regular sans-serif"
echo ""
echo "4. Check About page quote:"
echo "   - Navigate to About section"
echo "   - Quote should be cursive/handwritten (Satisfy font)"
echo ""
echo "5. Run this in browser console (F12):"
cat << 'EOF'

console.clear();
console.log('%c=== FONT TEST: Satisfy & Lugrasimo ===', 'font-size: 18px; font-weight: bold; color: purple;');

// Test 1: Welcome to text
const welcomeElements = document.querySelectorAll('.satisfy-regular');
console.log('\n%c1. Satisfy-regular elements found:', 'font-weight: bold;', welcomeElements.length);

welcomeElements.forEach((el, i) => {
  const font = window.getComputedStyle(el).fontFamily;
  const text = el.textContent.trim().substring(0, 50);
  console.log(`\nElement ${i + 1}:`);
  console.log('  Text:', text);
  console.log('  Font:', font);
  
  if (font.toLowerCase().includes('satisfy')) {
    console.log('  ✅ CORRECT: Satisfy font applied');
  } else {
    console.log('  ❌ WRONG: Expected Satisfy, got:', font);
  }
});

// Test 2: Lugrasimo elements
const lugrasimoElements = document.querySelectorAll('.lugrasimo-regular, .lugrasimo');
console.log('\n%c2. Lugrasimo elements found:', 'font-weight: bold;', lugrasimoElements.length);

lugrasimoElements.forEach((el, i) => {
  const font = window.getComputedStyle(el).fontFamily;
  const text = el.textContent.trim().substring(0, 50);
  console.log(`\nElement ${i + 1}:`);
  console.log('  Text:', text);
  console.log('  Font:', font);
  
  if (font.toLowerCase().includes('lugrasimo')) {
    console.log('  ✅ CORRECT: Lugrasimo font applied');
  } else {
    console.log('  ❌ WRONG: Expected Lugrasimo, got:', font);
  }
});

// Test 3: Check font loading
console.log('\n%c3. Font Loading Status:', 'font-weight: bold;');
document.fonts.ready.then(() => {
  const fonts = Array.from(document.fonts);
  const satisfy = fonts.find(f => f.family.includes('Satisfy'));
  const lugrasimo = fonts.find(f => f.family.includes('Lugrasimo'));
  
  console.log('Satisfy loaded:', satisfy ? '✅ Yes' : '❌ No');
  console.log('Lugrasimo loaded:', lugrasimo ? '✅ Yes' : '❌ No');
  
  if (satisfy) console.log('  Status:', satisfy.status);
  if (lugrasimo) console.log('  Status:', lugrasimo.status);
});

console.log('\n%c=== Test Complete ===', 'font-size: 16px; font-weight: bold; color: green;');
console.log('Check the visual appearance:');
console.log('- "Welcome to" should look handwritten/cursive');
console.log('- Quote should look handwritten/cursive');

EOF

echo ""
echo "6. Expected results:"
echo "   ✅ Font: \"Satisfy\", cursive"
echo "   ✅ Elements: 2+ (Welcome to + Quote)"
echo "   ❌ NOT: \"Lato\" or \"Arial\""
echo ""
echo "📚 Full documentation: SATISFY_LUGRASIMO_FONT_FIX.md"
