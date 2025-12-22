# Search Fix: Peaks and Safaris Now Showing

## Problem
The search component was only showing trek results, not peaks or safaris.

## Root Causes Identified

### 1. Missing Data Props
**File:** `/app/page.tsx`
- The page was only fetching and passing `treks` to the SearchTrekking component
- Peaks and safaris were not being fetched or passed as props

### 2. Default Filter Too Restrictive
**File:** `/components/SearchTrekking.tsx`
- Default `adventureType` was set to `'trekking'`
- This caused only trekking results to be shown by default
- No "All Adventures" option existed

## Solutions Implemented

### 1. Updated `/app/page.tsx`

#### Added State for Peaks and Safaris
```typescript
const [treks, setTreks] = useState<Trek[]>([])
const [peaks, setPeaks] = useState<PeakExpedition[]>([])
const [safaris, setSafaris] = useState<SafariPackage[]>([])
```

#### Fetched All Data Types
```typescript
useEffect(() => {
  async function fetchData() {
    // Fetch treks
    const treksResponse = await fetch('/api/treks')
    if (treksResponse.ok) {
      const treksData = await treksResponse.json()
      setTreks(treksData)
    }

    // Fetch peaks
    const peaksResponse = await fetch('/api/peaks')
    if (peaksResponse.ok) {
      const peaksData = await peaksResponse.json()
      setPeaks(peaksData)
    }

    // Fetch safaris
    const safarisResponse = await fetch('/api/safaris')
    if (safarisResponse.ok) {
      const safarisData = await safarisResponse.json()
      setSafaris(safarisData)
    }
  }
  fetchData()
}, [])
```

#### Passed All Props to SearchTrekking
```typescript
<SearchTrekking treks={treks} peaks={peaks} safaris={safaris} />
```

### 2. Updated `/components/SearchTrekking.tsx`

#### Added "All Adventures" Option
```typescript
const TREK_TYPES = [
  { value: 'all', label: 'All Adventures' },
  { value: 'trekking', label: 'Trekking' },
  { value: 'peak', label: 'Peak Expedition' },
  { value: 'safari', label: 'Safari' },
];
```

#### Changed Default to Show All Results
```typescript
const [adventureType, setAdventureType] = useState('all');
const [results, setResults] = useState<SearchResult[]>([
  ...(treks || []).map(t => ({ ...t, type: 'trek' as const })),
  ...(peaks || []).map(p => ({ ...p, type: 'peak' as const })),
  ...(safaris || []).map(s => ({ ...s, type: 'safari' as const }))
]);
```

#### Updated Filter Logic for "All" Option

**Treks:**
```typescript
const trekResults = (treks || []).filter((t: Trek) => {
  // Only filter by adventure type if not 'all'
  if (adventureType !== 'all' && t.adventureType && t.adventureType.toLowerCase() !== adventureType) return false;
  // ... other filters
});
```

**Peaks:**
```typescript
const peakResults = (peaks || []).filter((p: PeakExpedition) => {
  // Only include if adventure type is 'all' or 'peak'
  if (adventureType !== 'all' && adventureType !== 'peak') return false;
  // ... other filters
});
```

**Safaris:**
```typescript
const safariResults = (safaris || []).filter((s: SafariPackage) => {
  // Only include if adventure type is 'all' or 'safari'
  if (adventureType !== 'all' && adventureType !== 'safari') return false;
  // Filter by location if region filter is set (safari uses 'location' field)
  if (region && s.location && !s.location.toLowerCase().includes(region.toLowerCase())) return false;
  // Safaris ignore difficulty filter
  if (duration && s.duration) {
    // ... duration filter logic
  }
});
```

#### Updated useEffect to Load All Results
```typescript
useEffect(() => {
  if (!searched) {
    setResults([
      ...(treks || []).map(t => ({ ...t, type: 'trek' as const })),
      ...(peaks || []).map(p => ({ ...p, type: 'peak' as const })),
      ...(safaris || []).map(s => ({ ...s, type: 'safari' as const }))
    ]);
  }
}, [treks, peaks, safaris, searched]);
```

## How It Works Now

### Default Behavior
1. Page loads and fetches treks, peaks, and safaris from their respective API endpoints
2. All three data types are passed to SearchTrekking component
3. Component initializes with `adventureType: 'all'`
4. Initial results show ALL adventures (treks + peaks + safaris)

### Filter Behavior
- **"All Adventures"**: Shows treks, peaks, and safaris filtered by region/location, difficulty (except safaris), and duration
- **"Trekking"**: Shows only treks filtered by region, difficulty, and duration
- **"Peak Expedition"**: Shows only peaks filtered by region, difficulty, and duration
- **"Safari"**: Shows only safaris filtered by location (using region selector) and duration (ignores difficulty)

### Result Display
- Each result correctly shows its type-specific URL:
  - Treks: `/treks/[trekId]`
  - Peaks: `/peak-expedition/[peakId]`
  - Safaris: `/safari/[safariId]`
- Properties are safely accessed with type guards (region vs location, etc.)

## Testing Results

✅ **Build Status:** Successful  
✅ **TypeScript Compilation:** No errors  
✅ **All Routes:** Generated successfully  
✅ **API Endpoints:** All functional (/api/treks, /api/peaks, /api/safaris)

## User Experience

### Before Fix
- Only treks were visible in search results
- No way to search for peaks or safaris
- Limited functionality

### After Fix
- All adventures visible by default
- Can filter by specific adventure type
- Full search functionality across all content types
- Better user discovery of all available adventures

## Files Modified
1. `/app/page.tsx` - Added peaks and safaris fetching and props
2. `/components/SearchTrekking.tsx` - Added "All Adventures" option and updated filter logic

## Important Field Mapping

### Region/Location Filter
Different adventure types use different field names in Storyblok:
- **Treks**: Use `region` field (e.g., "Everest", "Annapurna")
- **Peaks**: Use `region` field (e.g., "Everest", "Manaslu")
- **Safaris**: Use `location` field (e.g., "Chitwan", "Bardia")

The search component handles this automatically:
- When filtering treks/peaks: Checks the `region` field
- When filtering safaris: Checks the `location` field
- Both use case-insensitive substring matching for flexibility

---

**Date:** December 21, 2025  
**Status:** ✅ **COMPLETE** - All adventures now searchable and visible with proper location filtering!
