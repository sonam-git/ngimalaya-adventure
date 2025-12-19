# Trek Detail Tabs Sticky Positioning Fix

## Problem
The TrekDetailTabs component (rendered within TrekDetail.tsx) was not sticking properly below the TrekMenu when scrolling on trek detail pages.

## Root Cause
The sticky `top` values were incorrect:
- Old values: `top-[250px] md:top-[265px]`
- These values were calculated for the old header structure

After the header was made full-width and the breakpoint changed to 1024px, the vertical positioning needed to be recalculated.

## Solution
Updated the sticky positioning to match the actual header stack height:

### Calculation:
1. **Header**: 
   - Mobile: `h-24` = 96px
   - Desktop (md): `h-28` = 112px

2. **Prayer Flags**: `h-2` = 8px

3. **Region Menu**: ~52px (with padding and buttons)

4. **Trek Menu**:
   - Position: `top-[156px] md:top-[172px]`
   - Height: ~40px (py-2 + button height)

5. **Trek Detail Tabs should be at**:
   - Mobile: 156px (header+flags+region) + 40px (trek menu) = **196px**
   - Desktop: 172px + 40px = **212px**

### Changes Made

#### File: `/components/TrekDetail.tsx`

**Before:**
```tsx
<div className="sticky top-[250px] md:top-[265px] z-[32] mt-8 mb-6">
```

**After:**
```tsx
<div className="sticky top-[196px] md:top-[212px] z-[32] mt-8 mb-6">
```

### Z-Index Hierarchy
The sticky elements now have proper z-index layering:
- Header: `z-40`
- TrekMenu: `z-[34]`
- TrekDetailTabs: `z-[32]` ✅ (below TrekMenu)

## Architecture Note

The TrekDetailTabs functionality is embedded within the TrekDetail component rather than being a separate component in the Header. This is actually the correct approach because:

1. **State Management**: Uses TrekTabContext for managing active tab state
2. **Content Coupling**: Tabs are tightly coupled with the trek detail content
3. **Conditional Rendering**: Only appears on individual trek pages
4. **Scroll Behavior**: Has custom scroll-to-section behavior

The tabs don't need to be in the Header component - they just need correct sticky positioning to appear below the navigation hierarchy.

## Visual Result

When scrolling on a trek detail page:
```
┌─────────────────────────────────────┐
│ Header (h-24/h-28) + Prayer Flags  │ ← z-40
├─────────────────────────────────────┤
│ Region Menu (~52px)                 │ ← Part of Header
├─────────────────────────────────────┤
│ Trek Menu (~40px)                   │ ← z-34, top-[156px]/[172px]
├─────────────────────────────────────┤
│ Trek Detail Tabs                    │ ← z-32, top-[196px]/[212px] ✅
└─────────────────────────────────────┘
│ Scrolling Content                   │
```

## Testing Checklist

- [ ] Visit a trek detail page (e.g., `/treks/everest-base-camp`)
- [ ] Scroll down the page
- [ ] Verify Trek Detail Tabs stick right below the Trek Menu
- [ ] Verify no gap between Trek Menu and tabs
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (≥ 1024px)
- [ ] Verify tabs don't overlap with Trek Menu
- [ ] Verify content scrolls under the tabs correctly
- [ ] Click different tabs and verify smooth scroll to sections

## Files Modified

1. ✅ `/components/TrekDetail.tsx` - Updated sticky positioning from `top-[250px] md:top-[265px]` to `top-[196px] md:top-[212px]`

## Related Changes

This fix complements the earlier updates:
- Header made full-width with responsive padding
- Mobile menu breakpoint changed to 1024px
- Prayer flags made full viewport width
- Trek Menu made container-width (not full-width)

## Future Improvements (Optional)

If we ever want to move the tabs to the Header component:
1. Create a new context or prop drilling mechanism to pass tab state
2. Add conditional rendering in Header for trek detail pages
3. Update scroll-to-section behavior
4. Ensure tab state persists during navigation

However, the current implementation is cleaner and more maintainable.
