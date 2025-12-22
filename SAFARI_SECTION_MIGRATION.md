# SafariSection Migration to Storyblok

## Change Summary
Migrated `SafariSection` component from hardcoded static data to fetch data from Storyblok via the `/api/safaris` endpoint.

## Changes Made

### File: `/components/SafariSection.tsx`

#### Before (Hardcoded Data)
```typescript
const SafariSection: React.FC = () => {
  // ...
  const [selectedSafari, setSelectedSafari] = useState<typeof safaris[0] | null>(null);
  
  const safaris = [
    {
      id: 'chitwan-national-park',
      name: 'Chitwan National Park',
      type: 'UNESCO Site',
      duration: '2-4 Days',
      badge: 'Family Friendly',
      image: '/assets/images/chitawan.jpg',
      description: 'Home to the rare one-horned rhinoceros and Bengal tigers.',
    },
    {
      id: 'bardia-national-park',
      name: 'Bardia National Park',
      // ... more hardcoded data
    },
    // ... more safaris
  ];
```

#### After (Storyblok Data)
```typescript
import { SafariPackage } from '@/lib/types';

const SafariSection: React.FC = () => {
  const [safaris, setSafaris] = useState<SafariPackage[]>([]);
  const [selectedSafari, setSelectedSafari] = useState<SafariPackage | null>(null);
  
  // Fetch safaris from API
  useEffect(() => {
    async function fetchSafaris() {
      try {
        const response = await fetch('/api/safaris');
        if (response.ok) {
          const data = await response.json();
          setSafaris(data);
        }
      } catch (error) {
        console.error('Error fetching safaris:', error);
      }
    }
    fetchSafaris();
  }, []);
```

## Data Flow

### Complete Pipeline
```
Storyblok CMS
    ↓
Safari Section Story (safari_section component)
    ↓
/lib/storyblok-api.ts → getAllSafarisFromSection()
    ↓
/lib/storyblok-converters.ts → convertStoryblokSafariToSafari()
    ↓
/lib/storyblok-fetch-with-fallback.ts → fetchSafarisWithFallback()
    ↓
/app/api/safaris/route.ts → GET endpoint
    ↓
/components/SafariSection.tsx → useEffect fetch
    ↓
Display on Homepage
```

## Benefits

### 1. Single Source of Truth
- Safari data is now managed entirely in Storyblok CMS
- No need to update code when safari content changes
- Content editors can modify safaris without developer intervention

### 2. Consistency
- All safari data (section, detail pages, search) comes from the same source
- Reduces risk of data inconsistencies
- Ensures uniform data structure across the application

### 3. Maintainability
- Easier to add new safaris (just add in CMS)
- No code deployment needed for content updates
- Centralized content management

### 4. Full Safari Package Data
The component now has access to all safari fields from Storyblok:
- ✅ Basic info (name, location, duration, type, image)
- ✅ Description and overview
- ✅ Highlights and badges
- ✅ Full itinerary
- ✅ Included/excluded items
- ✅ Requirements
- ✅ Best time to visit
- ✅ Wildlife list
- ✅ Activities

## Component Behavior

### Initial State
- Safaris array starts empty: `[]`
- Component renders with no safaris initially

### After Data Load
1. Component mounts
2. `useEffect` triggers API call to `/api/safaris`
3. Data fetched and converted from Storyblok
4. State updated with safari data
5. Component re-renders showing safaris from CMS

### User Interactions
- **Click safari card** → Opens detail modal with safari information
- **View Details button** → Navigates to `/safari/[safariId]` page
- **Enquire Now button** → Opens contact modal
- **Explore More button** → Navigates to `/safari` page

## Image Handling

### Automatic URL Support
The component uses `safari.image` directly:
```typescript
<img src={safari.image} alt={safari.name} />
```

This works seamlessly with:
- **Storyblok URLs**: `https://a.storyblok.com/f/.../image.jpg` ✅
- **Local paths**: `/assets/images/safari.jpg` (if needed) ✅

## Error Handling

The component includes error handling for API failures:
```typescript
try {
  const response = await fetch('/api/safaris');
  if (response.ok) {
    const data = await response.json();
    setSafaris(data);
  }
} catch (error) {
  console.error('Error fetching safaris:', error);
}
```

If fetch fails:
- Error logged to console
- Safaris remain empty array `[]`
- Component renders empty section gracefully

## TypeScript Safety

### Type Definitions
- Uses `SafariPackage` type from `/lib/types.ts`
- Ensures type safety across the entire data flow
- IntelliSense support for all safari properties

### State Typing
```typescript
const [safaris, setSafaris] = useState<SafariPackage[]>([]);
const [selectedSafari, setSelectedSafari] = useState<SafariPackage | null>(null);
```

## Backward Compatibility

### Removed Dependencies
- ❌ No more hardcoded safari data
- ❌ No more manual image path management
- ❌ No more code updates for content changes

### Maintained Features
- ✅ Mobile slider functionality
- ✅ Desktop grid layout
- ✅ Safari detail modal
- ✅ Contact modal integration
- ✅ Navigation to detail pages
- ✅ Dark mode support
- ✅ Responsive design

## Testing Results

✅ **Build Status:** Successful  
✅ **TypeScript:** No errors  
✅ **API Endpoint:** Working (/api/safaris)  
✅ **Data Fetching:** Successful  
✅ **Location Extraction:** Working (Koshi, Bardia, Chitwan)  
✅ **Component Rendering:** No issues  

## Files Modified
1. `/components/SafariSection.tsx` - Migrated from hardcoded to API-based data fetching

## Related Components

These components are already using Storyblok data:
- ✅ `TreksSection.tsx` - Fetches from `/api/treks`
- ✅ `PeakExpeditionSection.tsx` - Fetches from `/api/peaks`
- ✅ `SearchTrekking.tsx` - Receives all data via props
- ✅ `SafariSection.tsx` - Now fetches from `/api/safaris` ✨

## Migration Complete

All major sections on the homepage now fetch data exclusively from Storyblok:

| Section | Data Source | Status |
|---------|-------------|--------|
| Treks | `/api/treks` | ✅ Storyblok |
| Peaks | `/api/peaks` | ✅ Storyblok |
| Safaris | `/api/safaris` | ✅ Storyblok |
| Search | Props from page | ✅ Storyblok |

---

**Date:** December 21, 2025  
**Status:** ✅ **COMPLETE** - SafariSection now uses Storyblok data exclusively!
