# Interactive Trek Map Implementation

## Overview
This implementation adds an interactive Leaflet-based map feature to the trekking website that displays day-by-day route information with geocoded locations.

## Features Implemented

### 1. **Geocoding Service** (`lib/geocoding.ts`)
- Uses OpenStreetMap Nominatim API for free geocoding
- Built-in caching to avoid repeated API calls
- Rate limiting (1 request/second) to respect API limits
- Automatic place name resolution

### 2. **Map Helpers** (`lib/mapHelpers.ts`)
- Process trek itineraries and geocode all locations
- Calculate midpoints for day labels
- Transform trek data into map-ready coordinates

### 3. **Type Definitions** (`lib/types/map.ts`)
- `TrekDay`: Individual day information
- `DayCoordinates`: Geocoded coordinates for each day
- `TrekMapData`: Complete trek map data structure

### 4. **TrekMap Component** (`components/TrekMap.tsx`)
- Interactive Leaflet map with OpenStreetMap tiles
- Custom markers:
  - 🟢 Green pins for start points
  - 🔴 Red pins for end points
  - 🔵 Blue labels for day numbers
- Dashed blue lines connecting each day's route
- Click markers to see popup with details
- Automatic bounds fitting to show full route
- Dark mode support (different tile style)
- Responsive and mobile-friendly

### 5. **TrekMapModal Component** (`components/TrekMapModal.tsx`)
- Full-screen modal for map display
- Loading state while geocoding
- Error handling with user-friendly messages
- Map legend showing marker meanings
- Tips for using the interactive map
- Automatic place name extraction from trek titles
- Consistent with existing theme and design system

### 6. **Integration with TrekDetail** (`components/TrekDetail.tsx`)
- Added "Open Interactive Map" button in Map tab
- New state management for map modal
- Modal triggered from existing Map tab
- Does not interfere with existing Google Maps embed
- All existing functionality preserved

## How It Works

### Flow:
1. User clicks "Open Interactive Map" button in the Map tab
2. Modal opens and shows loading state
3. Component extracts place names from trek itinerary titles
4. Places are geocoded using Nominatim API (cached for performance)
5. Map renders with markers, lines, and labels
6. User can interact with map (zoom, pan, click markers)

### Place Name Extraction:
The system intelligently extracts place names from trek day titles:
- "Lukla to Phakding" → Start: Lukla, End: Phakding
- "Trek from Namche to Tengboche" → Start: Namche, End: Tengboche
- "Rest day at Dingboche" → Uses trek region as fallback

All places are appended with ", Nepal" for better geocoding accuracy.

## Files Created/Modified

### New Files:
- `/lib/geocoding.ts` - Geocoding utilities
- `/lib/types/map.ts` - TypeScript interfaces
- `/lib/mapHelpers.ts` - Map data processing
- `/components/TrekMap.tsx` - Interactive map component
- `/components/TrekMapModal.tsx` - Map modal wrapper

### Modified Files:
- `/components/TrekDetail.tsx` - Added map modal integration

## Dependencies Added
```json
{
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.1",
  "@types/leaflet": "^1.9.8"
}
```

## Usage

### For Users:
1. Navigate to any trek detail page
2. Click on the "Map" tab
3. Click "Open Interactive Map" button
4. Explore the route with interactive markers
5. Click markers to see day details
6. Use zoom/pan controls to navigate

### For Developers:
The map automatically works with any trek that has an itinerary. No additional configuration needed.

```typescript
// The map modal can be used anywhere:
<TrekMapModal 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trek={trekData}
/>
```

## Performance Considerations

### Caching:
- Geocoding results are cached in memory
- First load may take 5-10 seconds (geocoding all places)
- Subsequent loads are instant (uses cache)
- Cache persists during user session

### Rate Limiting:
- Nominatim API: 1 request per second
- For a 15-day trek: ~30 seconds first load (15 days × 2 places)
- This only happens once per trek per session

### Optimization Tips:
1. Consider adding server-side geocoding for production
2. Store coordinates in Storyblok CMS alongside trek data
3. Implement persistent cache (localStorage/database)
4. Pre-geocode popular treks during build time

## API Requirements

### Nominatim (OpenStreetMap):
- **Cost**: Free
- **Rate Limit**: 1 request/second
- **Terms**: Requires User-Agent header (already included)
- **Documentation**: https://nominatim.org/release-docs/develop/api/Search/

### Alternative APIs:
If you need faster/more accurate geocoding, consider:
- Google Maps Geocoding API (paid, very accurate)
- Mapbox Geocoding API (paid, good for trekking routes)
- Your own geocoding database

## Styling

The map includes custom CSS for:
- Custom marker pins (green/red drops)
- Day number badges
- Popups with trek information
- Dark mode support
- Responsive design

All styles are inline using JSX `<style>` tags to avoid CSS conflicts.

## Future Enhancements

### Possible Improvements:
1. **Elevation Profile**: Show altitude changes along route
2. **Distance Calculation**: Display daily trekking distances
3. **Photos on Map**: Show trek photos at specific locations
4. **Route Animation**: Animate the trek path day by day
5. **Download Map**: Export map as PDF or image
6. **Offline Support**: Cache maps for offline viewing
7. **Multiple Routes**: Compare different trek routes
8. **Weather Overlay**: Show weather conditions along route
9. **3D Terrain**: Use Mapbox GL for 3D mountain views
10. **Custom Waypoints**: Let users add personal notes

## Troubleshooting

### Map Not Loading:
- Check browser console for errors
- Ensure internet connection (map tiles require network)
- Verify Leaflet CSS is loading
- Check that trek has valid itinerary data

### Geocoding Fails:
- Place names must be recognizable (e.g., "Lukla, Nepal")
- Check Nominatim API status
- Verify rate limiting is working (1 req/sec)
- Try more specific place names

### Performance Issues:
- First load is slow (geocoding API calls)
- Check network tab for API response times
- Consider pre-geocoding popular treks
- Implement server-side caching

## Browser Compatibility

### Supported:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Requirements:
- JavaScript enabled
- Modern browser with ES6+ support
- Internet connection for map tiles
- Geolocation API (optional, for "locate me" feature)

## Accessibility

### Features:
- Keyboard navigation support
- Screen reader friendly popups
- High contrast markers
- Semantic HTML structure
- ARIA labels for interactive elements

## Testing Checklist

- [ ] Map loads without errors
- [ ] Markers appear at correct locations
- [ ] Lines connect start/end points
- [ ] Day labels show correct numbers
- [ ] Popups display trek information
- [ ] Dark mode switches tile style
- [ ] Map fits all waypoints in view
- [ ] Modal opens/closes properly
- [ ] Loading state shows during geocoding
- [ ] Error messages display on failure
- [ ] Works on mobile devices
- [ ] Existing trek functionality unaffected

## License & Attribution

### Leaflet:
- License: BSD 2-Clause
- Copyright: Vladimir Agafonkin

### OpenStreetMap:
- Data: © OpenStreetMap contributors
- License: Open Database License (ODbL)
- Tiles: © OpenStreetMap contributors

Map displays include proper attribution as required by license terms.
