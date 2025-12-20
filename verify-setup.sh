#!/bin/bash

# SEO & PWA Implementation Verification Script
# Run this to check if all files are in place

echo "🔍 Checking SEO & PWA Implementation..."
echo "========================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 ${YELLOW}(MISSING)${NC}"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "${RED}✗${NC} $1/ ${YELLOW}(MISSING)${NC}"
        return 1
    fi
}

# Check Core SEO Files
echo "📄 Core SEO Files:"
check_file "app/layout.tsx"
check_file "app/sitemap.ts"
check_file "app/opengraph-image.tsx"
check_file "components/StructuredData.tsx"
check_file "public/robots.txt"
echo ""

# Check PWA Files
echo "📱 PWA Files:"
check_file "public/manifest.json"
check_file "public/sw.js"
check_file "components/ServiceWorkerRegistration.tsx"
check_file "app/offline/page.tsx"
echo ""

# Check Configuration Files
echo "⚙️  Configuration Files:"
check_file "next.config.js"
check_file "eslint.config.js"
echo ""

# Check Documentation
echo "📚 Documentation:"
check_file "SEO_PWA_SETUP.md"
check_file "ICON_GENERATION_GUIDE.md"
check_file "IMPLEMENTATION_COMPLETE.md"
echo ""

# Check Required Icons
echo "🎨 Required PWA Icons:"
missing_icons=0
for size in 72 96 128 144 152 192 384 512; do
    if ! check_file "public/icon-${size}x${size}.png"; then
        ((missing_icons++))
    fi
done

if ! check_file "public/apple-touch-icon.png"; then
    ((missing_icons++))
fi

if ! check_file "public/favicon.ico"; then
    ((missing_icons++))
fi

if ! check_file "public/favicon-16x16.png"; then
    ((missing_icons++))
fi

if ! check_file "public/favicon-32x32.png"; then
    ((missing_icons++))
fi

echo ""

# Summary
echo "========================================="
echo "📊 Summary:"
echo ""

if [ $missing_icons -eq 0 ]; then
    echo -e "${GREEN}✓ All icons are in place!${NC}"
else
    echo -e "${YELLOW}⚠ Missing $missing_icons icon(s)${NC}"
    echo "  Run: See ICON_GENERATION_GUIDE.md for help"
    echo "  Quick: https://realfavicongenerator.net/"
fi

echo ""
echo "Next Steps:"
echo "1. Generate missing icons (if any)"
echo "2. Update contact info in StructuredData.tsx"
echo "3. Add Google Search Console verification"
echo "4. Run: npm run build"
echo "5. Test with Lighthouse"
echo "6. Deploy! 🚀"
echo ""
echo "For detailed instructions, see:"
echo "  → IMPLEMENTATION_COMPLETE.md"
echo "  → SEO_PWA_SETUP.md"
echo ""
