# Map Duplicate Location Handling

## Overview

The interactive map system intelligently handles situations where a trek or expedition revisits the same location on different days (e.g., acclimatization days, returning to base camps, or passing through the same village multiple times).

## Problem Statement

Many treks and expeditions revisit the same locations:
- **Acclimatization days** at the same camp
- **Base camp stays** over multiple days during summit attempts
- **Return journeys** through the same villages
- **Rest days** at popular stopping points

Without special handling, these would appear as a single marker on the map, making it unclear that the location is visited multiple times.

## Solution

### Visual Distinction

When a location is visited multiple times, the system:

1. **Spreads markers in a circular pattern** around the actual location
2. **Uses different blue color shades** for each visit
3. **Scales the spread** based on the number of visits (more visits = larger circle)
4. **Adds enhanced styling** with larger markers, white borders, and pulsing animation
5. **Shows visit information** in the marker popup

### Technical Implementation

#### Marker Offset Algorithm

```typescript
// Calculate circular offset for duplicate locations
const baseOffset = 0.003; // About 300 meters at equator
const offsetDistance = baseOffset * Math.sqrt(locCount); // Scale with square root

// Distribute markers evenly in a circle
const angle = (occurrence * (360 / locCount)) * (Math.PI / 180);
lat += offsetDistance * Math.cos(angle);
lng += offsetDistance * Math.sin(angle);
```

**Key aspects:**
- Base offset of 300 meters provides good visual separation
- Square root scaling prevents excessive spread for many visits
- Even circular distribution ensures markers don't overlap
- Offset is in geographic degrees (latitude/longitude)

#### Color Palette

Eight distinct blue shades are used cyclically:

```typescript
const blueShades = [
  '#3B82F6', // Blue-500 (default - visit 1)
  '#60A5FA', // Blue-400 (lighter - visit 2)
  '#2563EB', // Blue-600 (darker - visit 3)
  '#93C5FD', // Blue-300 (very light - visit 4)
  '#1D4ED8', // Blue-700 (very dark - visit 5)
  '#7DD3FC', // Sky-300 (bright - visit 6)
  '#1E40AF', // Blue-800 (deep - visit 7)
  '#BFDBFE', // Blue-200 (pale - visit 8)
];
```

If more than 8 visits occur, colors cycle through again.

#### Enhanced Marker Styling

Duplicate location markers get special treatment:

```tsx
// Larger size
iconSize: [32, 44] // vs. [30, 42] for regular markers

// Custom styling
style="background: ${pinColor}; 
       box-shadow: 0 3px 10px ${pinColor}90; 
       border: 2px solid white;"

// Pulsing animation
animation: pulse-marker 2s ease-in-out infinite;
```

#### Popup Enhancement

Marker popups show visit information:

```
Day 4
Namche Bazaar
🔄 Visit 2 of 3
Trek to Tengboche
```

The visit counter clearly indicates which visit this marker represents.

## User Experience

### Map Legend

The map modal includes a dedicated legend item:

```
🔵 🔵  Revisited Locations
```

With additional explanatory text:
> 🔄 **Revisited Locations:** When the trek returns to the same location on different days, markers are spread in a circular pattern with different blue shades for easy identification. Check the marker popup for visit numbers.

### Interactive Feedback

- **Hover:** Markers scale up slightly (110%)
- **Animation:** Duplicate markers pulse continuously to draw attention
- **Click:** Popup shows visit number and context
- **Visual:** Different colors help quickly identify different visits

## Examples

### Island Peak Expedition

Real-world example from the codebase:

- **Namche Bazaar:** Visited 3 times (Days 3, 4, and 16)
- **Dingboche:** Visited 2 times (Days 6 and 7)
- **Island Peak Base Camp:** Visited 3 times (Days 10, 11, and 14)

Each revisited location shows:
- Multiple markers in a circular pattern
- Different blue shades for each visit
- Visit counters in popups
- Proper day numbering

## Configuration

### Adjusting Offset Distance

To change the visual spread of duplicate markers:

```typescript
const baseOffset = 0.003; // Increase for more spread, decrease for less
```

**Guidelines:**
- 0.001 = ~100m spread (too tight for most cases)
- 0.003 = ~300m spread (current default, works well)
- 0.005 = ~500m spread (good for dense areas with many duplicates)
- 0.01+ = Very large spread (may make markers too far from actual location)

### Adjusting Scaling

The square root scaling can be adjusted:

```typescript
const offsetDistance = baseOffset * Math.sqrt(locCount); // Current
const offsetDistance = baseOffset * locCount; // Linear scaling (more aggressive)
const offsetDistance = baseOffset; // No scaling (constant offset)
```

### Adding More Colors

To support more than 8 visits with unique colors:

```typescript
const blueShades = [
  // ... existing 8 colors ...
  '#93C5FD', // Blue-300 (visit 9)
  '#DBEAFE', // Blue-100 (visit 10)
  // etc.
];
```

## Testing

### Test Cases

1. **No duplicates:** Markers should appear at exact locations
2. **Two visits:** Markers offset 180° apart
3. **Three visits:** Markers offset 120° apart (triangle)
4. **Four+ visits:** Even circular distribution
5. **Many visits:** Colors cycle through palette

### Manual Testing

Use the Island Peak expedition to test:
1. Open the peak detail page for Island Peak
2. Click "Open Interactive Map" in the Map tab
3. Observe multiple markers at Namche Bazaar
4. Click each marker to verify visit numbers
5. Check that colors differ for each visit
6. Verify markers are spread in a circular pattern

## Future Enhancements

Potential improvements:

1. **Cluster icon:** Show visit count badge on a single cluster marker
2. **Animation sequence:** Highlight visit order with sequential animation
3. **Color themes:** Different color schemes for different route types
4. **User preference:** Let users toggle between clustered/spread view
5. **Smart labels:** Show all visit days in a single combined popup
6. **Path highlighting:** Connect duplicate markers to show visit sequence

## Related Files

- `components/TrekMap.tsx` - Core map rendering with duplicate handling
- `components/TrekMapModal.tsx` - Modal wrapper with duplicate legend
- `components/PeakMapModal.tsx` - Peak-specific modal with duplicate legend
- `lib/mapHelpers.ts` - Map data processing utilities
- `lib/types/map.ts` - Type definitions for map data

## References

- [Leaflet Documentation](https://leafletjs.com/)
- [OpenStreetMap Attribution](https://www.openstreetmap.org/copyright)
- Geographic coordinate offset calculations based on latitude/longitude degrees

---

**Last Updated:** December 2024
**Feature Status:** ✅ Production Ready
