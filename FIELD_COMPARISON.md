# Quick Field Comparison: Static vs Storyblok

## Peak Expeditions - Field by Field

### ✅ All 19 Core Fields Mapped

| # | Field Name | Static Data | Storyblok Structure | Status |
|---|------------|-------------|---------------------|--------|
| 1 | `id` | `string` (e.g., "island-peak") | Generated from `name` slug | ✅ Auto-generated |
| 2 | `name` | `"Island Peak (Imja Tse)"` | `peak.name` (Text) | ✅ Direct mapping |
| 3 | `height` | `"6,165m"` | `peak.height` (Text) | ✅ Direct mapping |
| 4 | `duration` | `"19 Days"` | `peak.duration` (Text) | ✅ Direct mapping |
| 5 | `difficulty` | `"Strenuous Plus"` | `peak.difficulty` (Text) | ✅ Direct mapping |
| 6 | `season` | `"Feb-May, Oct-Dec"` | `peak.season` (Text) | ✅ Direct mapping |
| 7 | `image` | `"/assets/images/islandpeak.png"` | `peak.image.filename` (Asset) | ✅ Asset URL |
| 8 | `description` | Short description string | `peak.description` (Textarea) | ✅ Direct mapping |
| 9 | `price` | `"Contact for Price"` | `peak.price` (Text) | ✅ Direct mapping |
| 10 | `accommodation` | `"Teahouse"` | `peak.accommodation` (Text) | ✅ Direct mapping |
| 11 | `meals` | `"B, L & D"` | `peak.meals` (Text) | ✅ Direct mapping |
| 12 | `hiking` | `"5-7 hours"` | `peak.hiking` (Text) | ✅ Direct mapping |
| 13 | `overview` | Long description paragraph | `peak.overview` (Textarea) | ✅ Direct mapping |
| 14 | `highlights` | `string[]` (7 items) | `peak.highlights[]` (Bloks with text) | ✅ Array mapping |
| 15 | `itinerary` | `PeakItineraryDay[]` (19 days) | `peak.itinerary[]` (Bloks) | ✅ Nested mapping |
| 16 | `included` | `string[]` (15+ items) | `peak.included[]` (Bloks with text) | ✅ Array mapping |
| 17 | `excluded` | `string[]` (10+ items) | `peak.excluded[]` (Bloks with text) | ✅ Array mapping |
| 18 | `requirements` | `string[]` (8+ items) | `peak.requirements[]` (Bloks with text) | ✅ Array mapping |
| 19 | `technicalRequirements` | `string[]` (5+ items) | `peak.technicalRequirements[]` (Bloks with text) | ✅ Array mapping |

### ✅ Itinerary Nested Structure (6 fields)

| # | Field Name | Static Data | Storyblok Structure | Status |
|---|------------|-------------|---------------------|--------|
| 1 | `day` | `1, 2, 3...` (number) | `itinerary[].day` (Number) | ✅ Direct mapping |
| 2 | `title` | `"Arrival in Kathmandu"` | `itinerary[].title` (Text) | ✅ Direct mapping |
| 3 | `description` | Detailed day description | `itinerary[].description` (Textarea) | ✅ Direct mapping |
| 4 | `altitude` | `"1,400m"` (optional) | `itinerary[].altitude` (Text, optional) | ✅ Direct mapping |
| 5 | `duration` | `"3-4 hours"` (optional) | `itinerary[].duration` (Text, optional) | ✅ Direct mapping |
| 6 | `meals` | `"B, L, D"` (optional) | `itinerary[].meals` (Text, optional) | ✅ Direct mapping |

---

## Safari Packages - Field by Field

### ✅ All 17 Core Fields Mapped

| # | Field Name | Static Data | Storyblok Structure | Status |
|---|------------|-------------|---------------------|--------|
| 1 | `id` | `string` (e.g., "chitwan-national-park") | Generated from `name` slug | ✅ Auto-generated |
| 2 | `name` | `"Chitwan National Park"` | `safari.name` (Text) | ✅ Direct mapping |
| 3 | `location` | `"Chitwan, Nepal"` | `safari.location` (Text) | ✅ Direct mapping |
| 4 | `duration` | `"2-4 Days"` | `safari.duration` (Text) | ✅ Direct mapping |
| 5 | `type` | `"UNESCO Site"` | `safari.type` (Text) | ✅ Direct mapping |
| 6 | `image` | `"./assets/images/chitawan.jpg"` | `safari.image.filename` (Asset) | ✅ Asset URL |
| 7 | `description` | Short description string | `safari.description` (Textarea) | ✅ Direct mapping |
| 8 | `highlights` | `string[]` (5 items) | `safari.highlights[]` (Bloks with text) | ✅ Array mapping |
| 9 | `badge` | `"Family Friendly"` | `safari.badge` (Text) | ✅ Direct mapping |
| 10 | `overview` | Long description paragraph | `safari.overview` (Textarea) | ✅ Direct mapping |
| 11 | `itinerary` | `SafariItineraryDay[]` (4 days) | `safari.itinerary[]` (Bloks) | ✅ Nested mapping |
| 12 | `included` | `string[]` (12+ items) | `safari.included[]` (Bloks with text) | ✅ Array mapping |
| 13 | `excluded` | `string[]` (7+ items) | `safari.excluded[]` (Bloks with text) | ✅ Array mapping |
| 14 | `requirements` | `string[]` (9+ items) | `safari.requirements[]` (Bloks with text) | ✅ Array mapping |
| 15 | `bestTime` | Seasonal description | `safari.bestTime` (Textarea) | ✅ Direct mapping |
| 16 | `wildlife` | `string[]` (11+ species) | `safari.wildlife[]` (Bloks with text) | ✅ Array mapping |
| 17 | `activities` | `string[]` (9+ activities) | `safari.activities[]` (Bloks with text) | ✅ Array mapping |

### ✅ Itinerary Nested Structure (5 fields)

| # | Field Name | Static Data | Storyblok Structure | Status |
|---|------------|-------------|---------------------|--------|
| 1 | `day` | `1, 2, 3...` (number) | `itinerary[].day` (Number) | ✅ Direct mapping |
| 2 | `title` | `"Arrival and Jungle Activities"` | `itinerary[].title` (Text) | ✅ Direct mapping |
| 3 | `description` | Detailed day description | `itinerary[].description` (Textarea) | ✅ Direct mapping |
| 4 | `activities` | `string[]` (5+ activities) | `itinerary[].activities[]` (Bloks with text) | ✅ Nested array |
| 5 | `meals` | `"B, L, D"` (optional) | `itinerary[].meals` (Text, optional) | ✅ Direct mapping |

---

## Summary

### Peak Expeditions
- **Total Fields:** 25 (19 core + 6 itinerary)
- **Mapped to Storyblok:** ✅ 25/25 (100%)
- **Complex Nested Structures:** ✅ 1 (itinerary with 6 fields)
- **Array Fields:** ✅ 6 (highlights, itinerary, included, excluded, requirements, technicalRequirements)

### Safari Packages
- **Total Fields:** 22 (17 core + 5 itinerary)
- **Mapped to Storyblok:** ✅ 22/22 (100%)
- **Complex Nested Structures:** ✅ 1 (itinerary with nested activities array)
- **Array Fields:** ✅ 7 (highlights, itinerary, included, excluded, requirements, wildlife, activities)

### Converter Functions
- ✅ `convertStoryblokPeakToPeak()` - Handles all 25 fields including nested structures
- ✅ `convertStoryblokSafariToSafari()` - Handles all 22 fields including nested structures
- ✅ Both functions include proper type safety, defaults, and null checking

---

## Example Data Flow

### Peak: Island Peak
```
Static Data → Storyblok Content → Converter → App Type
───────────────────────────────────────────────────────
{                    peak_section             {
  id: "island-peak" → [Generate from name] → id: "island-peak",
  name: "Island..."  → peak.name           → name: "Island...",
  height: "6,165m"  → peak.height         → height: "6,165m",
  itinerary: [      → peak.itinerary[]    → itinerary: [
    {                  [{                      {
      day: 1,     →      day: 1,        →       day: 1,
      title: "A..."→     title: "A..."  →       title: "A...",
      ...         →      ...            →       ...
    }]             ]                        }]
  ]                                        ]
}                                        }
```

### Safari: Chitwan National Park
```
Static Data → Storyblok Content → Converter → App Type
───────────────────────────────────────────────────────
{                    safari_section           {
  id: "chitwan..."  → [Generate from name] → id: "chitwan...",
  name: "Chitwan"   → safari.name          → name: "Chitwan",
  wildlife: [       → safari.wildlife[]    → wildlife: [
    "Rhino",    →      [{text:"Rhino"}]  →     "Rhino",
    "Tiger"     →       {text:"Tiger"}]  →     "Tiger"
  ]                                        ]
}                                        }
```

---

**Conclusion:** All fields from static data files are successfully mapped to Storyblok structure with proper converters and type safety. The implementation is ready for content migration.
