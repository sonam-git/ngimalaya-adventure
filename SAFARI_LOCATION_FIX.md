# Safari Location Extraction Fix

## Problem
Safari locations were showing as "Nepal" in the region dropdown instead of specific locations like "Koshi", "Bardia", and "Chitwan".

## Root Cause
The `location` field in Storyblok for all safaris was set to "Nepal" (or empty) instead of specific location names.

## Solution Implemented

### Automatic Location Extraction
Updated the safari converter to extract location from the safari name when the location field is not properly set.

**File:** `/lib/storyblok-converters.ts`

```typescript
export function convertStoryblokSafariToSafari(safariBlock: StoryblokSafariBlock): SafariPackage {
  // Generate slug from safari name
  const slug = safariBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-safari';
  
  // Extract location from name if location field is empty or just "Nepal"
  let location = safariBlock.location || 'Nepal';
  if (!safariBlock.location || safariBlock.location.trim() === '' || safariBlock.location === 'Nepal') {
    // Try to extract location from safari name
    const name = safariBlock.name || '';
    if (name.toLowerCase().includes('koshi')) {
      location = 'Koshi';
    } else if (name.toLowerCase().includes('bardia')) {
      location = 'Bardia';
    } else if (name.toLowerCase().includes('chitwan') || name.toLowerCase().includes('chitawan')) {
      location = 'Chitwan';
    }
  }
  
  console.log(`📍 Safari "${safariBlock.name}" - extracted location: "${location}" (original: "${safariBlock.location || 'undefined'}")`);
  
  return {
    id: slug,
    name: safariBlock.name || 'Untitled Safari',
    location: location, // Use extracted location
    // ... rest of the fields
  };
}
```

## How It Works

### Location Extraction Logic
1. Check if `location` field exists and is not empty or "Nepal"
2. If location is missing/empty/"Nepal", extract from safari name:
   - **"Koshi Tappu Reserve"** → `location: "Koshi"`
   - **"Bardia National Park"** → `location: "Bardia"`
   - **"Chitawan National Park"** → `location: "Chitwan"`
3. If no match found, fallback to "Nepal"

### API Response (Before)
```json
[
  {
    "name": "Koshi Tappu Reserve",
    "location": "Nepal"  ❌
  },
  {
    "name": "Bardia National Park",
    "location": "Nepal"  ❌
  },
  {
    "name": "Chitawan National Park",
    "location": "Nepal"  ❌
  }
]
```

### API Response (After)
```json
[
  {
    "name": "Koshi Tappu Reserve",
    "location": "Koshi"  ✅
  },
  {
    "name": "Bardia National Park",
    "location": "Bardia"  ✅
  },
  {
    "name": "Chitawan National Park",
    "location": "Chitwan"  ✅
  }
]
```

## Region Dropdown (After Fix)

Now the region dropdown properly shows:

```
All Regions
├─ Annapurna    (Trek region)
├─ Bardia       (Safari location) ✨
├─ Chitwan      (Safari location) ✨
├─ Everest      (Trek/Peak region)
├─ Koshi        (Safari location) ✨
└─ Langtang     (Trek region)
```

## User Experience

### Scenario: Finding Koshi Safari

**Before Fix:**
1. User opens region dropdown
2. Only sees "Nepal" for safaris ❌
3. Can't filter by specific safari location
4. All safaris appear regardless of selection

**After Fix:**
1. User opens region dropdown
2. Sees "Koshi", "Bardia", "Chitwan" ✅
3. Selects "Koshi"
4. Only Koshi Tappu Reserve safari appears ✨

## Benefits

### 1. Automatic Fallback
Even if Storyblok `location` field is not set, locations are extracted from safari names

### 2. No CMS Changes Required
Works with current Storyblok content without requiring content updates

### 3. Future-Proof
If `location` field is properly set in Storyblok, it will use that value instead of extraction

### 4. Better UX
Users can now filter safaris by specific locations

## Recommended: Update Storyblok Content

While the automatic extraction works, it's recommended to set the `location` field properly in Storyblok:

**In Storyblok CMS:**
1. Go to safari_section
2. For each safari:
   - **Koshi Tappu Reserve**: Set `location` = "Koshi"
   - **Bardia National Park**: Set `location` = "Bardia"
   - **Chitawan National Park**: Set `location` = "Chitwan"

This will:
- Make the data more explicit
- Remove dependency on name-based extraction
- Allow for more flexible naming

## Testing Results

✅ **API Response:** Correct locations extracted  
✅ **Build Status:** Successful  
✅ **Region Dropdown:** Shows all locations  
✅ **Filter Logic:** Works correctly  
✅ **TypeScript:** No errors  

## Files Modified
- `/lib/storyblok-converters.ts` - Added location extraction logic

---

**Date:** December 21, 2025  
**Status:** ✅ **COMPLETE** - Safari locations now properly extracted and filterable!

**Note:** This is a **workaround solution**. For best practices, update the `location` field in Storyblok CMS for each safari.
