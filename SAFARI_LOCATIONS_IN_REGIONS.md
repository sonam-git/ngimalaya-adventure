# Safari Locations in Region Dropdown

## Enhancement
Updated the region dropdown to include safari locations alongside trek and peak regions, allowing users to filter safaris by selecting their location.

## Changes Made

### Updated `getRegions()` Function
**File:** `/components/SearchTrekking.tsx`

#### Before
```typescript
// Only extracted regions from treks
const getRegions = (treks: Trek[] | undefined) => {
  if (!treks || treks.length === 0) return [];
  
  const regions = treks
    .filter((t: Trek) => t.region && t.region.length > 0)
    .map((t: Trek) => t.region)
    .filter(Boolean);
  return Array.from(new Set(regions)) as string[];
};
```

#### After
```typescript
// Now extracts regions from treks, peaks, AND safari locations
const getRegions = (
  treks: Trek[] | undefined, 
  peaks: PeakExpedition[] | undefined, 
  safaris: SafariPackage[] | undefined
) => {
  const regions: string[] = [];
  
  // Get regions from treks
  if (treks && treks.length > 0) {
    const trekRegions = treks
      .filter((t: Trek) => t.region && t.region.length > 0)
      .map((t: Trek) => t.region)
      .filter(Boolean);
    regions.push(...trekRegions);
  }
  
  // Get regions from peaks
  if (peaks && peaks.length > 0) {
    const peakRegions = peaks
      .filter((p: PeakExpedition) => p.region && p.region.length > 0)
      .map((p: PeakExpedition) => p.region!)
      .filter(Boolean);
    regions.push(...peakRegions);
  }
  
  // Get locations from safaris (treated as regions)
  if (safaris && safaris.length > 0) {
    const safariLocations = safaris
      .filter((s: SafariPackage) => s.location && s.location.length > 0)
      .map((s: SafariPackage) => s.location)
      .filter(Boolean);
    regions.push(...safariLocations);
  }
  
  // Return unique sorted regions/locations
  return Array.from(new Set(regions)).sort() as string[];
};
```

### Updated Function Calls
Changed all calls to `getRegions()` to pass all three data sources:

```typescript
// Before
{getRegions(treks).map((r: string) => <option key={r} value={r}>{r}</option>)}

// After
{getRegions(treks, peaks, safaris).map((r: string) => <option key={r} value={r}>{r}</option>)}
```

## How It Works

### Region Dropdown Population
The dropdown now contains:
1. **Trek Regions**: Everest, Annapurna, Langtang, etc.
2. **Peak Regions**: Everest, Manaslu, etc.
3. **Safari Locations**: Chitwan, Bardia, etc.

All entries are:
- ✅ Deduplicated (no duplicates even if multiple adventures share the same region)
- ✅ Sorted alphabetically for easy navigation
- ✅ Filtered to remove empty values

### User Experience

#### Example Scenario
**Safari Locations in Storyblok:**
- Chitwan National Park (location: "Chitwan")
- Bardia National Park (location: "Bardia")

**Trek Regions in Storyblok:**
- Everest Base Camp (region: "Everest")
- Annapurna Circuit (region: "Annapurna")

**Region Dropdown Shows:**
```
All Regions
Annapurna
Bardia
Chitwan
Everest
```

#### Filter Behavior
1. User selects "Chitwan" from region dropdown
2. Filter logic:
   - **Treks**: Filters by `region === "Chitwan"` (none match)
   - **Peaks**: Filters by `region` contains "Chitwan" (none match)
   - **Safaris**: Filters by `location` contains "Chitwan" (matches Chitwan safaris) ✅
3. Results show only Chitwan safaris

#### Mixed Results Example
If you have:
- Everest Base Camp Trek (region: "Everest")
- Island Peak Expedition (region: "Everest")
- Chitwan Safari (location: "Chitwan")

Selecting "Everest" shows:
- ✅ Everest Base Camp Trek
- ✅ Island Peak Expedition
- ❌ Chitwan Safari (filtered out)

Selecting "Chitwan" shows:
- ❌ Everest Base Camp Trek (filtered out)
- ❌ Island Peak Expedition (filtered out)
- ✅ Chitwan Safari

## Benefits

### 1. Better Discovery
Users can now discover safaris through the region dropdown without knowing they need to look specifically for "locations"

### 2. Unified Interface
Single dropdown for all region/location filtering across all adventure types

### 3. Consistent UX
No need for separate "location" dropdown for safaris - everything uses the same "Region" filter

### 4. Smart Filtering
The backend automatically knows to:
- Check `region` field for treks and peaks
- Check `location` field for safaris

## Technical Details

### Field Mapping
| Adventure Type | Storyblok Field | Dropdown Label |
|----------------|-----------------|----------------|
| Trek           | `region`        | "Region"       |
| Peak           | `region`        | "Region"       |
| Safari         | `location`      | "Region"       |

### Data Flow
```
Storyblok Data
    ↓
Fetch & Convert
    ↓
Extract Values:
- Trek.region → regions[]
- Peak.region → regions[]
- Safari.location → regions[]
    ↓
Deduplicate & Sort
    ↓
Populate Dropdown
    ↓
User Selects Value
    ↓
Filter Logic:
- Treks: filter by region
- Peaks: filter by region
- Safaris: filter by location
    ↓
Display Results
```

## Testing Results

✅ **Build Status:** Successful  
✅ **TypeScript Compilation:** No errors  
✅ **Dropdown Population:** Working correctly  
✅ **Filter Logic:** All adventure types filtered correctly  

## Files Modified
- `/components/SearchTrekking.tsx` - Updated `getRegions()` function and all calls

---

**Date:** December 21, 2025  
**Status:** ✅ **COMPLETE** - Safari locations now appear in region dropdown!
