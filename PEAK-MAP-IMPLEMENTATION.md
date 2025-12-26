# Peak Expedition Map Implementation

## ✅ Interactive Maps Added to Peak Expeditions!

The interactive map functionality has been successfully extended to peak expeditions. Peak expedition pages now have the same powerful route visualization as treks.

## What Was Added

### New Components
1. **PeakMapModal** - Modal wrapper specifically for peak expeditions
2. **Updated PeakDetail** - Added map button and modal integration
3. **Location field** - Added to `PeakItineraryDay` type

### Features
- 🗺️ Interactive OpenStreetMap-based expedition route visualization
- 📍 Day-by-day waypoints showing the entire expedition path
- 🟢 Green marker for start location (Day 1)
- 🔴 Red marker for summit/end location (Last day)
- 🔵 Blue markers for intermediate locations
- ➖ Blue dashed line connecting all locations
- 🌙 Dark mode support
- 📱 Mobile responsive
- ⚡ Smart caching (fast subsequent loads)
- 🚪 React Portal rendering - guaranteed overlay
- 🔝 Highest z-index - always above all UI elements

## How to Use

### 1. Add Location Field to Peak Itinerary

Simply add a `location` field to each itinerary day in your peak expedition data:

```typescript
{
  id: 'island-peak',
  name: 'Island Peak (Imja Tse)',
  height: '6,165m',
  duration: '19 Days',
  // ...other peak properties
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu',
      description: '...',
      altitude: '1,400m',
      meals: 'Dinner',
      location: 'Kathmandu' // ✨ Add this!
    },
    {
      day: 2,
      title: 'Fly to Lukla, Trek to Phakding',
      altitude: '2,610m',
      duration: '3-4 hours',
      location: 'Phakding' // ✨ Add this!
    },
    {
      day: 3,
      title: 'Phakding to Namche Bazaar',
      altitude: '3,440m',
      duration: '5-6 hours',
      location: 'Namche Bazaar' // ✨ Add this!
    },
    // ... more days
    {
      day: 14,
      title: 'Summit Day',
      altitude: '6,165m summit',
      duration: '10-12 hours',
      location: 'Island Peak Summit' // ✨ Summit location!
    }
  ]
}
```

### 2. View the Map

Users can view the expedition route by:
1. Navigate to any peak expedition page (e.g., `/peak-expedition/island-peak`)
2. Click the **"Map"** tab in the peak details
3. Click **"Open Interactive Route Map"** button
4. Explore the expedition route with zoom, pan, and clickable markers

## Location Field Examples

### For Peak Expeditions:
- ✅ `'Kathmandu'` - Starting point
- ✅ `'Lukla'` - Entry point to Khumbu
- ✅ `'Namche Bazaar'` - Sherpa capital
- ✅ `'Dingboche'` - Acclimatization stop
- ✅ `'Lobuche'` - High altitude stop
- ✅ `'Gorak Shep'` - Near Everest Base Camp
- ✅ `'Island Peak Base Camp'` - Base camp
- ✅ `'Island Peak High Camp'` - High camp
- ✅ `'Island Peak Summit'` - Summit location

## Map Display Behavior

The expedition map will:
1. ✅ Display one marker per location
2. ✅ Connect all locations with a blue dashed line (in sequential order)
3. ✅ Use green marker for start (Day 1)
4. ✅ Use red marker for summit/end (Last day)
5. ✅ Use blue markers for all intermediate locations
6. ✅ Show day number, location name, and title in marker popups

## Visual Example

```
Day 1: Kathmandu 🟢 (Green - Start)
         |
         | (Blue line - expedition route)
         |
Day 2: Phakding 🔵
         |
Day 3: Namche Bazaar 🔵
         |
Day 5: Tengboche 🔵
         |
Day 6: Dingboche 🔵
         |
Day 8: Lobuche 🔵
         |
Day 9: Gorak Shep 🔵
         |
Day 10: Chhukung 🔵
         |
Day 11: Island Peak Base Camp 🔵
         |
Day 13: Island Peak High Camp 🔵
         |
Day 14: Island Peak Summit 🔴 (Red - Summit/End)
```

## Type Definition

```typescript
// lib/types.ts
export interface PeakItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  meals?: string;
  location?: string; // ✨ NEW: Location for map display
}
```

## Component Architecture

### PeakMapModal
- Located: `/components/PeakMapModal.tsx`
- Purpose: Modal wrapper for peak expedition maps
- Features: Loading state, error handling, legend, portal rendering
- Z-Index: `z-[9999999]` - Highest in application

### PeakDetail Updates
- Added: `MapPin` icon import
- Added: `isMapModalOpen` state
- Added: "Open Interactive Route Map" button in Map tab
- Added: `<PeakMapModal>` component at bottom

## Smart Fallback

If no `location` field is provided, the system will:
1. Try to extract location from the `title` field
2. Use patterns like:
   - "Trek to Namche" → "Namche"
   - "Summit Day" → "Summit"
   - "Base Camp Training" → "Base Camp"
3. Fall back to peak name or "Nepal"

## For Storyblok Users

### Add Location Field to Content Type

1. Go to Storyblok Content Types
2. Edit your Peak Expedition itinerary content type
3. Add a new field:
   - **Field Name**: `location`
   - **Field Type**: Text
   - **Display Name**: Location
   - **Description**: Main location for this day (e.g., Kathmandu, Namche Bazaar, Base Camp, Summit)

### Fill Location Data

When creating peak expedition content:
```
Itinerary Day 11:
- Day: 11
- Title: Chhukung to Island Peak Base Camp
- Description: Trek to base camp...
- Altitude: 5,200m
- Duration: 3-4 hours
- Meals: B, L, D
- Location: Island Peak Base Camp ← Add this!
```

## Example: Island Peak Expedition

```typescript
export const peakExpeditions: PeakExpedition[] = [
  {
    id: 'island-peak',
    name: 'Island Peak (Imja Tse)',
    height: '6,165m',
    duration: '19 Days',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', location: 'Kathmandu', ... },
      { day: 2, title: 'Fly to Lukla, Trek to Phakding', location: 'Phakding', ... },
      { day: 3, title: 'Phakding to Namche Bazaar', location: 'Namche Bazaar', ... },
      { day: 5, title: 'Namche to Tengboche', location: 'Tengboche', ... },
      { day: 6, title: 'Tengboche to Dingboche', location: 'Dingboche', ... },
      { day: 8, title: 'Dingboche to Lobuche', location: 'Lobuche', ... },
      { day: 9, title: 'Lobuche to Gorak Shep', location: 'Gorak Shep', ... },
      { day: 11, title: 'To Island Peak Base Camp', location: 'Island Peak Base Camp', ... },
      { day: 13, title: 'To High Camp', location: 'Island Peak High Camp', ... },
      { day: 14, title: 'Summit Day', location: 'Island Peak Summit', ... },
      { day: 17, title: 'To Namche Bazaar', location: 'Namche Bazaar', ... },
      { day: 18, title: 'Namche to Lukla', location: 'Lukla', ... },
    ]
  }
];
```

## Map Legend

When the map modal opens, users will see:

- 🟢 **Green Marker**: Start location (first day)
- 🔴 **Red Marker**: Summit/end location (last day)
- 🔵 **Blue Markers**: All expedition locations in between
- **Blue Dashed Line**: Route connecting all locations in sequential order

## Technical Details

### Shared Components
Peak expeditions use the same map rendering components as treks:
- `TrekMap.tsx` - Renders the actual Leaflet map
- `lib/mapHelpers.ts` - Processes location data
- `lib/geocoding.ts` - Converts locations to coordinates

### Geocoding Process
1. System collects all unique `location` values from itinerary
2. Appends ", Nepal" to each location
3. Sends batch geocoding request to Nominatim API
4. Caches results in localStorage for fast subsequent loads
5. Maps coordinates to each day
6. Renders markers and route line on the map

### Portal Rendering
- Uses React Portal to render at `document.body` level
- Ensures modal overlays all other UI elements
- Independent of component hierarchy
- No z-index stacking context issues

## Files Changed

1. ✅ **lib/types.ts** - Added `location?: string` to `PeakItineraryDay`
2. ✅ **components/PeakMapModal.tsx** - New modal component for peaks
3. ✅ **components/PeakDetail.tsx** - Added map button and modal integration
4. ✅ **data/peakExpeditions.ts** - Added example locations to Island Peak

## Benefits

| Feature | Before | After |
|---------|--------|-------|
| **Map Type** | Static Google Maps iframe | Interactive OpenStreetMap |
| **Route Display** | Single point location | Complete expedition path |
| **Interactivity** | None | Zoom, pan, clickable markers |
| **Offline Ready** | No | Cached geocoding data |
| **Dark Mode** | No | Yes |
| **Mobile** | Limited | Fully responsive |

## Testing

1. ✅ Navigate to peak expedition page (e.g., `/peak-expedition/island-peak`)
2. ✅ Click "Map" tab
3. ✅ Click "Open Interactive Route Map" button
4. ✅ Verify:
   - All locations appear as markers
   - First location has green marker
   - Last location has red marker
   - Blue dashed line connects all locations
   - Clicking markers shows day info
   - Zoom and pan work smoothly
   - Works in light and dark mode

## Next Steps

1. **Add locations to all peak expeditions**: Update peak data files
2. **Update Storyblok schema**: Add location field to CMS
3. **Fill location data**: Add locations when creating/editing expeditions
4. **Test the maps**: Verify maps display correctly for all peaks

## Comparison: Trek vs Peak Maps

Both use the same underlying technology:

| Aspect | Trek Map | Peak Map |
|--------|----------|----------|
| **Component** | TrekMapModal | PeakMapModal |
| **Data Source** | Trek.itinerary | PeakExpedition.itinerary |
| **Location Field** | ItineraryDay.location | PeakItineraryDay.location |
| **Map Renderer** | TrekMap.tsx | TrekMap.tsx (shared) |
| **Features** | Identical | Identical |

---

**Implemented**: December 2024  
**Status**: ✅ Ready to Use  
**Coverage**: Both Treks and Peak Expeditions  
**Display**: Interactive route maps with portal rendering
