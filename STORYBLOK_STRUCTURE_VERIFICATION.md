# Storyblok Structure Verification

This document verifies that the Storyblok structure for peaks and safaris matches all fields from the static data files.

## Peak Expeditions Field Mapping

### Static Data Interface (`peakExpeditions.ts`)
```typescript
interface PeakItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  meals?: string;
}

interface PeakExpedition {
  id: string;                        // ✅ Generated from name slug
  name: string;                      // ✅ Storyblok: name
  height: string;                    // ✅ Storyblok: height
  duration: string;                  // ✅ Storyblok: duration
  difficulty: string;                // ✅ Storyblok: difficulty
  season: string;                    // ✅ Storyblok: season
  image: string;                     // ✅ Storyblok: image.filename
  description: string;               // ✅ Storyblok: description
  price: string;                     // ✅ Storyblok: price
  accommodation: string;             // ✅ Storyblok: accommodation
  meals: string;                     // ✅ Storyblok: meals
  hiking: string;                    // ✅ Storyblok: hiking
  overview: string;                  // ✅ Storyblok: overview
  highlights: string[];              // ✅ Storyblok: highlights[].text
  itinerary: PeakItineraryDay[];     // ✅ Storyblok: itinerary[] (all fields mapped)
  included: string[];                // ✅ Storyblok: included[].text
  excluded: string[];                // ✅ Storyblok: excluded[].text
  requirements: string[];            // ✅ Storyblok: requirements[].text
  technicalRequirements: string[];   // ✅ Storyblok: technicalRequirements[].text
}
```

### Storyblok Structure for Peaks

**Content Structure:**
```
peak_section (story)
└── body (bloks)
    └── peak (nested blok component)
        ├── name: Text
        ├── height: Text
        ├── duration: Text
        ├── difficulty: Text
        ├── season: Text
        ├── image: Asset
        ├── description: Textarea
        ├── price: Text
        ├── accommodation: Text
        ├── meals: Text
        ├── hiking: Text
        ├── overview: Textarea
        ├── highlights: Bloks (repeatable)
        │   └── text: Text
        ├── itinerary: Bloks (repeatable)
        │   ├── day: Number
        │   ├── title: Text
        │   ├── description: Textarea
        │   ├── altitude: Text (optional)
        │   ├── duration: Text (optional)
        │   └── meals: Text (optional)
        ├── included: Bloks (repeatable)
        │   └── text: Text
        ├── excluded: Bloks (repeatable)
        │   └── text: Text
        ├── requirements: Bloks (repeatable)
        │   └── text: Text
        └── technicalRequirements: Bloks (repeatable)
            └── text: Text
```

**Converter Function:** `convertStoryblokPeakToPeak()` in `/lib/storyblok-converters.ts`

### All Peak Fields Verified ✅

| Field | Static Type | Storyblok Field | Converter | Status |
|-------|-------------|----------------|-----------|--------|
| id | string | Generated from name | slug generation | ✅ |
| name | string | name (Text) | peakBlock.name | ✅ |
| height | string | height (Text) | peakBlock.height | ✅ |
| duration | string | duration (Text) | peakBlock.duration | ✅ |
| difficulty | string | difficulty (Text) | peakBlock.difficulty | ✅ |
| season | string | season (Text) | peakBlock.season | ✅ |
| image | string | image (Asset) | peakBlock.image.filename | ✅ |
| description | string | description (Textarea) | peakBlock.description | ✅ |
| price | string | price (Text) | peakBlock.price | ✅ |
| accommodation | string | accommodation (Text) | peakBlock.accommodation | ✅ |
| meals | string | meals (Text) | peakBlock.meals | ✅ |
| hiking | string | hiking (Text) | peakBlock.hiking | ✅ |
| overview | string | overview (Textarea) | peakBlock.overview | ✅ |
| highlights | string[] | highlights[].text (Bloks) | map to array | ✅ |
| itinerary | PeakItineraryDay[] | itinerary[] (Bloks) | map with all fields | ✅ |
| included | string[] | included[].text (Bloks) | map to array | ✅ |
| excluded | string[] | excluded[].text (Bloks) | map to array | ✅ |
| requirements | string[] | requirements[].text (Bloks) | map to array | ✅ |
| technicalRequirements | string[] | technicalRequirements[].text (Bloks) | map to array | ✅ |

---

## Safari Packages Field Mapping

### Static Data Interface (`safariPackages.ts`)
```typescript
interface SafariItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string;
}

interface SafariPackage {
  id: string;                        // ✅ Generated from name slug
  name: string;                      // ✅ Storyblok: name
  location: string;                  // ✅ Storyblok: location
  duration: string;                  // ✅ Storyblok: duration
  type: string;                      // ✅ Storyblok: type
  image: string;                     // ✅ Storyblok: image.filename
  description: string;               // ✅ Storyblok: description
  highlights: string[];              // ✅ Storyblok: highlights[].text
  badge: string;                     // ✅ Storyblok: badge
  overview: string;                  // ✅ Storyblok: overview
  itinerary: SafariItineraryDay[];   // ✅ Storyblok: itinerary[] (all fields mapped)
  included: string[];                // ✅ Storyblok: included[].text
  excluded: string[];                // ✅ Storyblok: excluded[].text
  requirements: string[];            // ✅ Storyblok: requirements[].text
  bestTime: string;                  // ✅ Storyblok: bestTime
  wildlife: string[];                // ✅ Storyblok: wildlife[].text
  activities: string[];              // ✅ Storyblok: activities[].text
}
```

### Storyblok Structure for Safaris

**Content Structure:**
```
safari_section (story)
└── body (bloks)
    └── safari (nested blok component)
        ├── name: Text
        ├── location: Text
        ├── duration: Text
        ├── type: Text
        ├── image: Asset
        ├── description: Textarea
        ├── highlights: Bloks (repeatable)
        │   └── text: Text
        ├── badge: Text
        ├── overview: Textarea
        ├── itinerary: Bloks (repeatable)
        │   ├── day: Number
        │   ├── title: Text
        │   ├── description: Textarea
        │   ├── activities: Bloks (repeatable)
        │   │   └── text: Text
        │   └── meals: Text (optional)
        ├── included: Bloks (repeatable)
        │   └── text: Text
        ├── excluded: Bloks (repeatable)
        │   └── text: Text
        ├── requirements: Bloks (repeatable)
        │   └── text: Text
        ├── bestTime: Textarea
        ├── wildlife: Bloks (repeatable)
        │   └── text: Text
        └── activities: Bloks (repeatable)
            └── text: Text
```

**Converter Function:** `convertStoryblokSafariToSafari()` in `/lib/storyblok-converters.ts`

### All Safari Fields Verified ✅

| Field | Static Type | Storyblok Field | Converter | Status |
|-------|-------------|----------------|-----------|--------|
| id | string | Generated from name | slug generation | ✅ |
| name | string | name (Text) | safariBlock.name | ✅ |
| location | string | location (Text) | safariBlock.location | ✅ |
| duration | string | duration (Text) | safariBlock.duration | ✅ |
| type | string | type (Text) | safariBlock.type | ✅ |
| image | string | image (Asset) | safariBlock.image.filename | ✅ |
| description | string | description (Textarea) | safariBlock.description | ✅ |
| highlights | string[] | highlights[].text (Bloks) | map to array | ✅ |
| badge | string | badge (Text) | safariBlock.badge | ✅ |
| overview | string | overview (Textarea) | safariBlock.overview | ✅ |
| itinerary | SafariItineraryDay[] | itinerary[] (Bloks) | map with all fields | ✅ |
| included | string[] | included[].text (Bloks) | map to array | ✅ |
| excluded | string[] | excluded[].text (Bloks) | map to array | ✅ |
| requirements | string[] | requirements[].text (Bloks) | map to array | ✅ |
| bestTime | string | bestTime (Textarea) | safariBlock.bestTime | ✅ |
| wildlife | string[] | wildlife[].text (Bloks) | map to array | ✅ |
| activities | string[] | activities[].text (Bloks) | map to array | ✅ |

---

## Nested Itinerary Field Details

### Peak Itinerary Fields ✅
```typescript
interface PeakItineraryDay {
  day: number;           // ✅ Storyblok: itinerary[].day (Number)
  title: string;         // ✅ Storyblok: itinerary[].title (Text)
  description: string;   // ✅ Storyblok: itinerary[].description (Textarea)
  altitude?: string;     // ✅ Storyblok: itinerary[].altitude (Text, optional)
  duration?: string;     // ✅ Storyblok: itinerary[].duration (Text, optional)
  meals?: string;        // ✅ Storyblok: itinerary[].meals (Text, optional)
}
```

### Safari Itinerary Fields ✅
```typescript
interface SafariItineraryDay {
  day: number;           // ✅ Storyblok: itinerary[].day (Number)
  title: string;         // ✅ Storyblok: itinerary[].title (Text)
  description: string;   // ✅ Storyblok: itinerary[].description (Textarea)
  activities: string[];  // ✅ Storyblok: itinerary[].activities[].text (Bloks)
  meals?: string;        // ✅ Storyblok: itinerary[].meals (Text, optional)
}
```

---

## Implementation Files

### 1. Type Definitions: `/lib/types.ts`
- ✅ PeakExpedition interface (19 fields)
- ✅ PeakItineraryDay interface (6 fields)
- ✅ SafariPackage interface (17 fields)
- ✅ SafariItineraryDay interface (5 fields)

### 2. Converters: `/lib/storyblok-converters.ts`
- ✅ `convertStoryblokPeakToPeak()` - Maps all 19 peak fields
- ✅ `convertStoryblokSafariToSafari()` - Maps all 17 safari fields
- ✅ Slug generation for IDs
- ✅ Array mapping for repeatable bloks
- ✅ Nested itinerary mapping with all fields

### 3. API Fetch: `/lib/storyblok-api.ts`
- ✅ `fetchPeaksFromStoryblok()` - Fetches nested peak_section
- ✅ `fetchSafarisFromStoryblok()` - Fetches nested safari_section
- ✅ Proper error handling
- ✅ Cache control and revalidation

### 4. Fallback Logic: `/lib/storyblok-fetch-with-fallback.ts`
- ✅ `fetchPeaksWithFallback()` - Uses Storyblok API for peaks
- ✅ `fetchSafarisWithFallback()` - Uses Storyblok API for safaris
- ✅ Error logging and fallback behavior

---

## Verification Summary

### Peak Expeditions
- **Total Fields in Static Data:** 19 main fields + 6 itinerary fields
- **Storyblok Fields Mapped:** ✅ 19/19 main fields + 6/6 itinerary fields
- **Converter Status:** ✅ Complete
- **API Fetch Status:** ✅ Implemented
- **Type Safety:** ✅ Full TypeScript support

### Safari Packages
- **Total Fields in Static Data:** 17 main fields + 5 itinerary fields
- **Storyblok Fields Mapped:** ✅ 17/17 main fields + 5/5 itinerary fields
- **Converter Status:** ✅ Complete
- **API Fetch Status:** ✅ Implemented
- **Type Safety:** ✅ Full TypeScript support

---

## Example Storyblok Content Structure

### Creating a Peak in Storyblok:
1. Create a story: `peak_section`
2. Add a `peak` blok to body
3. Fill all required fields: name, height, duration, difficulty, season, image, description, price, accommodation, meals, hiking, overview
4. Add repeatable bloks:
   - highlights (multiple text entries)
   - itinerary (multiple days with day, title, description, altitude, duration, meals)
   - included (multiple text entries)
   - excluded (multiple text entries)
   - requirements (multiple text entries)
   - technicalRequirements (multiple text entries)

### Creating a Safari in Storyblok:
1. Create a story: `safari_section`
2. Add a `safari` blok to body
3. Fill all required fields: name, location, duration, type, image, description, badge, overview, bestTime
4. Add repeatable bloks:
   - highlights (multiple text entries)
   - itinerary (multiple days with day, title, description, activities[].text, meals)
   - included (multiple text entries)
   - excluded (multiple text entries)
   - requirements (multiple text entries)
   - wildlife (multiple text entries)
   - activities (multiple text entries)

---

## Next Steps

1. ✅ **Verify all fields are mapped** - COMPLETE
2. ✅ **Update converters** - COMPLETE
3. ✅ **Update API fetch functions** - COMPLETE
4. ✅ **Update types** - COMPLETE
5. 🔄 **Test with real Storyblok data** - IN PROGRESS
6. 📝 **Update UI components to use new data** - PENDING
7. 📝 **Create API endpoints for peaks and safaris** - PENDING
8. 📝 **Update menus and sections** - PENDING

---

## Notes

- All static data fields have been successfully mapped to Storyblok structure
- Converters handle nested arrays and optional fields properly
- Type safety is maintained throughout the conversion
- The structure follows the same nested pattern as regions/treks
- Ready for migration from static data to Storyblok CMS

**Last Updated:** January 2025
**Status:** ✅ All fields verified and mapped correctly
