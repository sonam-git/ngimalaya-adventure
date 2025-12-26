# Trek Map with Single Location Field - Implementation Guide

## ✅ Simplified Implementation Complete!

The trek map system has been updated to use a **single `location` field** per itinerary day instead of separate `startPlace` and `endPlace` fields. This makes the system simpler and more intuitive.

## What Changed

### Type Definitions

#### Before (Complex - Start/End):
```typescript
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
  // No location field
}

interface DayCoordinates {
  day: number;
  title: string;
  start: { lat: number; lng: number } | null;
  end: { lat: number; lng: number } | null;
  startPlace: string;
  endPlace: string;
}
```

#### After (Simple - Single Location):
```typescript
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
  location?: string; // ✨ NEW: Single location field
}

interface DayCoordinates {
  day: number;
  title: string;
  location: string; // Single location name
  coordinates: { lat: number; lng: number } | null; // Geocoded coordinates
}
```

## How to Use

### 1. Add Location Field to Itinerary

Simply add a `location` field to each itinerary day:

```typescript
{
  id: 'abc-trek',
  name: 'Annapurna Base Camp Trek',
  // ...other trek properties
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu (1,350m)',
      description: '...',
      accommodation: 'Hotel',
      meals: 'Welcome Dinner',
      location: 'Kathmandu' // ✨ Add this field
    },
    {
      day: 2,
      title: 'Drive to Pokhara (823m)',
      description: '...',
      accommodation: 'Hotel',
      meals: 'Breakfast',
      location: 'Pokhara' // ✨ Add this field
    },
    {
      day: 3,
      title: 'Trek to Ulleri (2,050m)',
      description: '...',
      accommodation: 'Teahouse',
      meals: 'All meals',
      location: 'Ulleri' // ✨ Add this field
    },
    // ... more days
  ]
}
```

### 2. Location Field Format

The `location` field should be a simple place name. Examples:

- ✅ `'Kathmandu'`
- ✅ `'Lukla'`
- ✅ `'Namche Bazaar'`
- ✅ `'Annapurna Base Camp'`
- ✅ `'Machapuchare Base Camp'`
- ✅ `'Ghorepani'`

**Note**: The system will automatically append ", Nepal" when geocoding.

### 3. Map Display Behavior

The map will:
1. ✅ Display one marker per location
2. ✅ Connect all locations with a blue dashed line (in order)
3. ✅ Use special markers for first (green) and last (red) locations
4. ✅ Use blue markers for intermediate locations
5. ✅ Show day number and location name in popups

### 4. Fallback Behavior

If no `location` field is provided, the system will:
1. Try to extract location from the `title` field
2. Use patterns like "Trek to Ulleri" → "Ulleri"
3. Use patterns like "Drive to Pokhara" → "Pokhara"
4. Fall back to the trek's region name

## Visual Example

```
Day 1: Kathmandu 🟢 (Green - Start)
         |
         | (Blue dashed line)
         |
Day 2: Pokhara 🔵 (Blue - Trek location)
         |
         | (Blue dashed line)
         |
Day 3: Ulleri 🔵 (Blue - Trek location)
         |
         | (Blue dashed line)
         |
Day 4: Ghorepani 🔵 (Blue - Trek location)
         |
         | (Blue dashed line)
         |
Day 5: Tadapani 🔵 (Blue - Trek location)
         |
         | (Blue dashed line)
         |
... (more locations)
         |
         | (Blue dashed line)
         |
Day 14: Kathmandu 🔴 (Red - End)
```

## For Storyblok Users

### Add Location Field to Content Type

1. Go to Storyblok Content Types
2. Edit your Trek/Itinerary content type
3. Add a new field to itinerary items:
   - **Field Name**: `location`
   - **Field Type**: Text
   - **Display Name**: Location
   - **Description**: Main location for this day (e.g., Kathmandu, Lukla, Namche Bazaar)

### Fill Location Data

When creating trek content in Storyblok:
```
Itinerary Day 1:
- Day: 1
- Title: Arrival in Kathmandu
- Description: ...
- Accommodation: Hotel
- Meals: Welcome Dinner
- Location: Kathmandu ← Add this!
```

## Benefits of Single Location Approach

| Aspect | Before (Start/End) | After (Single Location) |
|--------|-------------------|------------------------|
| **Data Entry** | Complex - need 2 locations per day | Simple - 1 location per day |
| **Clarity** | Confusing - which is more important? | Clear - the main location |
| **Maintenance** | Hard - 2x the data to maintain | Easy - 1 field to update |
| **Map Display** | Cluttered - 2 markers per day | Clean - 1 marker per day |
| **Route Line** | Zig-zag pattern | Smooth, logical path |

## Example: Annapurna Base Camp Trek

```typescript
export const annapurnaRegionTreks: Trek[] = [
  {
    id: 'abc-trek',
    name: 'Annapurna Base Camp Trek',
    duration: '14 Days',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', location: 'Kathmandu', ... },
      { day: 2, title: 'Drive to Pokhara', location: 'Pokhara', ... },
      { day: 3, title: 'Trek to Ulleri', location: 'Ulleri', ... },
      { day: 4, title: 'Ulleri to Ghorepani', location: 'Ghorepani', ... },
      { day: 5, title: 'Poon Hill & Tadapani', location: 'Tadapani', ... },
      { day: 6, title: 'Tadapani to Chhomrong', location: 'Chhomrong', ... },
      { day: 7, title: 'Chhomrong to Dovan', location: 'Dovan', ... },
      { day: 8, title: 'Dovan to MBC', location: 'Machapuchare Base Camp', ... },
      { day: 9, title: 'MBC to ABC', location: 'Annapurna Base Camp', ... },
      { day: 10, title: 'ABC to Bamboo', location: 'Bamboo', ... },
      { day: 11, title: 'Bamboo to Jhinu', location: 'Jhinu Danda', ... },
      { day: 12, title: 'Jhinu to Pokhara', location: 'Pokhara', ... },
      { day: 13, title: 'Drive to Kathmandu', location: 'Kathmandu', ... },
      { day: 14, title: 'Departure', location: 'Kathmandu', ... },
    ]
  }
];
```

## Map Legend

When the map modal opens, users will see:

- 🟢 **Green Marker**: Start location (first day)
- 🔴 **Red Marker**: End location (last day)
- 🔵 **Blue Markers**: All trek locations in between
- **Blue Dashed Line**: Route connecting all locations in order

## Technical Details

### Geocoding Process

1. System collects all unique `location` values
2. Appends ", Nepal" to each location
3. Sends batch geocoding request to Nominatim API
4. Caches results in localStorage
5. Maps geocoded coordinates to each day
6. Renders markers and route line on map

### Smart Fallback

If `location` field is missing:
```typescript
// Auto-extract from title
"Trek to Ulleri" → "Ulleri, Nepal"
"Drive to Pokhara" → "Pokhara, Nepal"
"Rest day at Namche" → "Namche, Nepal"
```

## Migration Guide

### From Old System (Start/End) to New System (Single Location)

If you have existing trek data with start/end places:

```typescript
// OLD WAY ❌
{
  day: 5,
  title: 'Ghorepani to Tadapani',
  startPlace: 'Ghorepani',
  endPlace: 'Tadapani'
}

// NEW WAY ✅
{
  day: 5,
  title: 'Ghorepani to Tadapani',
  location: 'Tadapani' // Use the destination/end location
}
```

**Rule of thumb**: Use the **destination** or most significant location for the day.

## Testing

1. ✅ Add `location` field to at least one trek's itinerary
2. ✅ Navigate to the trek page
3. ✅ Click "Map" tab
4. ✅ Click "Open Interactive Map"
5. ✅ Verify:
   - All locations appear as markers
   - First location has green marker
   - Last location has red marker
   - Blue dashed line connects all locations
   - Clicking markers shows day info

## Files Changed

- ✅ `lib/types.ts` - Added `location?: string` to `ItineraryDay`
- ✅ `lib/types/map.ts` - Simplified to use single `location` and `coordinates`
- ✅ `lib/mapHelpers.ts` - Updated to process single locations
- ✅ `components/TrekMap.tsx` - Displays single-location markers with connecting line
- ✅ `components/TrekMapModal.tsx` - Extracts location field or falls back to title parsing
- ✅ `data/regions/annapurna.ts` - Added example `location` fields to ABC trek

## Next Steps

1. **Add locations to all treks**: Update your trek data files to include `location` fields
2. **Update Storyblok schema**: Add location field to your CMS content type
3. **Fill location data**: Add location values when creating/editing trek content
4. **Test the maps**: Verify maps display correctly for all treks

---

**Updated**: December 2024  
**Status**: ✅ Ready to Use  
**Simplicity**: Single location field per day  
**Display**: Connected route with colored markers
