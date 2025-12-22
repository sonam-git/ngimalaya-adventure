# Storyblok Content Creation Guide

## 🎯 Step-by-Step Guide to Create Your Nested Trek Content

### Prerequisites
- Storyblok account with access to your space
- Component definitions created (see Component Setup below)

---

## 1️⃣ Create Component Definitions

Before creating content, you need to define these nestable components in Storyblok:

### Component: `trek`
**Type:** Nestable Component (not a content type)

**Schema:**
```
- name (Text) *required
- description (Text/Textarea)
- image (Asset - Single)
- duration (Text) - e.g., "12 days"
- altitude (Text) - e.g., "5,364m"
- difficulty (Option - Single) - Options: Easy, Moderate, Hard, Challenging
- price (Text) - e.g., "$1,200"
- season (Text) - e.g., "March-May, September-November"
- groupSize (Text) - e.g., "1-12 people"
- adventureType (Option - Single) - Options: trekking, peak, safari
- highlights (Blocks) - Allow: simple_text_item
- included (Blocks) - Allow: simple_text_item
- excluded (Blocks) - Allow: simple_text_item
- requirements (Blocks) - Allow: simple_text_item
- itinerary (Blocks) - Allow: itinerary_day
- mapUrl (Text/Link)
```

### Component: `simple_text_item`
**Type:** Nestable Component

**Schema:**
```
- text (Text) *required
```

### Component: `itinerary_day`
**Type:** Nestable Component

**Schema:**
```
- day (Number) *required
- title (Text) *required
- description (Textarea) *required
- accommodation (Text)
- meals (Text)
- walkingHours (Text)
```

### Component: `region`
**Type:** Nestable Component

**Schema:**
```
- name (Text) *required
- description (Richtext)
- image (Asset - Single)
- treks (Blocks) - Allow: trek
```

**Note:** We removed these fields from regions (they're now only in treks):
- ~~highlights~~
- ~~bestSeason~~
- ~~difficulty~~

### Component: `region_section`
**Type:** Nestable Component

**Schema:**
```
- regions (Blocks) - Allow: region
```

### Content Type: `trek_page`
**Type:** Content Type (Story)

**Schema:**
```
- sections (Blocks) - Allow: region_section (and later: peak_section, safari_section)
```

---

## 2️⃣ Create the Story

### Step 1: Create New Story
1. Go to Content → New Story
2. Name: "Trek Page" (or whatever you prefer)
3. Slug: `trek-page` (must match what's in `storyblok-api.ts`)
4. Content type: `trek_page`
5. Click "Create"

### Step 2: Add Region Section
1. Click "+ Add Block" in the `sections` field
2. Select `region_section`

### Step 3: Add Regions
Inside the `region_section`, click "+ Add Block" in `regions`:

#### Example Region: Everest
```
name: Everest Region
description: (Use richtext editor)
  Home to the world's highest peak, Mount Everest, this region offers 
  spectacular trekking routes with stunning Himalayan views...
image: (Upload image - e.g., everest-region.jpg)
treks: (Add multiple trek blocks - see below)
```

### Step 4: Add Treks to Region
Inside the region, click "+ Add Block" in `treks`:

#### Example Trek: Everest Base Camp
```
name: Everest Base Camp Trek
description: A classic trek to the base of the world's highest mountain
image: (Upload image - e.g., ebc-trek.jpg)
duration: 12 days
altitude: 5,364m
difficulty: Moderate
price: $1,200
season: March-May, September-November
groupSize: 1-12 people
adventureType: trekking

highlights: (Add blocks)
  - Block 1: text: "Reach Everest Base Camp at 5,364m"
  - Block 2: text: "Climb Kala Patthar for panoramic views"
  - Block 3: text: "Visit Tengboche Monastery"
  - Block 4: text: "Experience Sherpa culture"

included: (Add blocks)
  - Block 1: text: "Airport transfers"
  - Block 2: text: "Accommodation in Kathmandu and teahouses"
  - Block 3: text: "All meals during trek"
  - Block 4: text: "Experienced trekking guide"
  - Block 5: text: "Sagarmatha National Park permit"
  - Block 6: text: "TIMS card"

excluded: (Add blocks)
  - Block 1: text: "International flights"
  - Block 2: text: "Nepal visa fees"
  - Block 3: text: "Travel insurance"
  - Block 4: text: "Personal expenses"
  - Block 5: text: "Tips for guide and porter"

requirements: (Add blocks)
  - Block 1: text: "Good physical fitness"
  - Block 2: text: "Proper trekking gear"
  - Block 3: text: "Travel insurance with helicopter rescue"
  - Block 4: text: "Positive attitude and team spirit"

itinerary: (Add blocks)
  - Day 1:
      day: 1
      title: Arrival in Kathmandu
      description: Welcome to Nepal! Transfer to hotel and trek briefing.
      accommodation: Hotel
      meals: Dinner
      walkingHours: 0
  
  - Day 2:
      day: 2
      title: Fly to Lukla, Trek to Phakding
      description: Scenic mountain flight to Lukla, then trek along...
      accommodation: Teahouse
      meals: Breakfast, Lunch, Dinner
      walkingHours: 3-4 hours
  
  - Day 3:
      day: 3
      title: Phakding to Namche Bazaar
      description: Cross several suspension bridges...
      accommodation: Teahouse
      meals: Breakfast, Lunch, Dinner
      walkingHours: 5-6 hours
  
  (Continue for all 12 days...)

mapUrl: https://maps.google.com/... (optional)
```

---

## 3️⃣ Example Structure

Here's how your content should look:

```
trek_page (Story: trek-page)
└── sections
    └── region_section [0]
        └── regions
            ├── region [0] "Everest Region"
            │   ├── name: "Everest Region"
            │   ├── description: (richtext)
            │   ├── image: everest-region.jpg
            │   └── treks
            │       ├── trek [0] "Everest Base Camp Trek"
            │       ├── trek [1] "Gokyo Lakes Trek"
            │       └── trek [2] "Three Passes Trek"
            │
            ├── region [1] "Annapurna Region"
            │   ├── name: "Annapurna Region"
            │   ├── description: (richtext)
            │   ├── image: annapurna-region.jpg
            │   └── treks
            │       ├── trek [0] "Annapurna Base Camp Trek"
            │       ├── trek [1] "Annapurna Circuit"
            │       └── trek [2] "Poon Hill Trek"
            │
            └── region [2] "Langtang Region"
                ├── name: "Langtang Region"
                ├── description: (richtext)
                ├── image: langtang-region.jpg
                └── treks
                    ├── trek [0] "Langtang Valley Trek"
                    └── trek [1] "Tamang Heritage Trek"
```

---

## 4️⃣ Tips for Content Entry

### Images
- **Recommended sizes:**
  - Region images: 1200x800px
  - Trek images: 1200x800px
- **Format:** JPG or WebP (WebP preferred for performance)
- **Quality:** High quality but optimized (under 500KB per image)

### Text Fields
- **Trek names:** Keep concise (e.g., "Everest Base Camp Trek")
- **Descriptions:** 2-3 sentences for regions, 1-2 for treks
- **Duration:** Be specific (e.g., "12 days" not "10-12 days")
- **Altitude:** Use consistent units (meters or feet)
- **Season:** Use format "Month-Month, Month-Month"

### Highlights/Included/Excluded/Requirements
- Each bullet point should be concise (one sentence max)
- Aim for 4-8 items per section
- Use parallel structure (start each with verb or noun)

### Itinerary
- Number days sequentially starting from 1
- Keep titles short and descriptive
- Descriptions can be 2-3 sentences
- Include walking hours for trekking days (e.g., "5-6 hours")

---

## 5️⃣ Publishing

1. **Save** your content (Ctrl+S or Cmd+S)
2. Click **Publish** button in top right
3. Your content is now live!

---

## 6️⃣ Verify in Your App

Once published:

1. **Development:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000/regions

2. **Check Console:**
   Look for:
   - "Fetching regions from Storyblok..."
   - "Successfully fetched X regions from Storyblok"
   - "Successfully fetched X treks from Storyblok"

3. **Check Data:**
   - Navigate to `/regions` - should show your regions
   - Click a region - should show treks in that region
   - Click a trek - should show full trek details with tabs

---

## 🚨 Understanding the Error Message

### "Trek page story not found in Storyblok"

If you see this error in your console:
```
Error fetching trek page from Storyblok: {}
Trek page story not found in Storyblok. Please create a story with slug "trek-page" and content type "trek_page".
```

**This is NORMAL and EXPECTED** if you haven't created the content yet! 

**What this means:**
- Your app is trying to fetch from Storyblok ✅
- Storyblok responded with a 404 (not found) ✅
- Your app automatically fell back to static data ✅
- Everything is working correctly! ✅

**What to do:**
1. Follow the steps below to create your content in Storyblok
2. Once created and published, the error will disappear
3. Your app will then use Storyblok data instead of static fallback

**Don't worry!** The fallback system ensures your app works perfectly even without Storyblok content.

---

## 📝 Quick Checklist

Before publishing, verify:
- [ ] All required fields filled (marked with *)
- [ ] Images uploaded and saved
- [ ] At least one region created
- [ ] At least one trek per region
- [ ] Itinerary days numbered sequentially
- [ ] All highlight/included/excluded items added
- [ ] Story saved AND published (not draft)
- [ ] Access token in `.env.local`

---

## 🎉 Next Steps

Once your content is in Storyblok:
1. Test on development (npm run dev)
2. Verify all pages load correctly
3. Check that static fallback still works (remove env var temporarily)
4. Deploy to production
5. Enjoy your dynamic CMS-powered trek website! 🏔️

---

## 📚 Additional Resources

- [Storyblok Blocks Documentation](https://www.storyblok.com/docs/guide/essentials/content-structures#blocks)
- [Storyblok Asset API](https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/assets)
- [Next.js ISR Documentation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
