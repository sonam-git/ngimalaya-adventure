# Storyblok Gallery Setup Guide

## Overview
The gallery has been configured to fetch images from Storyblok. If no images are found in Storyblok, it automatically falls back to hardcoded local images.

## How to Set Up Gallery Items in Storyblok

### Step 1: Create a New Component Type (if not exists)
1. Go to your Storyblok space
2. Navigate to **Components** in the left sidebar
3. Click **+ New** to create a new component
4. Name it: `gallery-item`
5. Set it as a **Content type** (not nestable)

### Step 2: Add Fields to the gallery-item Component
Add the following fields to your `gallery-item` component:

| Field Name   | Field Type | Required | Description                    |
|--------------|------------|----------|--------------------------------|
| `title`      | Text       | Yes      | Title of the gallery image     |
| `description`| Textarea   | No       | Description of the image       |
| `image`      | Asset      | Yes      | The gallery image file         |
| `region`     | Text       | No       | Region name (e.g., "Everest")  |
| `trek`       | Text       | No       | Trek name if applicable        |

### Step 3: Create Gallery Item Stories
1. In Storyblok, navigate to **Content**
2. Create a new folder called `gallery` (optional, for organization)
3. Click **+ Entry** to create a new story
4. Select the `gallery-item` component type
5. Fill in the fields:
   - **Name**: A unique name for the story (e.g., "everest-base-camp-sunrise")
   - **title**: Display title (e.g., "Everest Base Camp at Sunrise")
   - **description**: Image description
   - **image**: Upload your image
   - **region**: e.g., "Everest Region"
   - **trek**: e.g., "Everest Base Camp Trek"
6. Click **Save** or **Publish**

### Step 4: Repeat for Multiple Images
Create as many `gallery-item` stories as you want to display in the gallery.

## How It Works

### API Endpoint
The `/api/gallery` endpoint fetches all Storyblok stories with the component type `gallery-item`:

```typescript
const response = await Storyblok.get('cdn/stories', {
  version: 'draft', // Change to 'published' for production
  filter_query: {
    component: {
      in: 'gallery-item',
    },
  },
});
```

### GallerySection Component
The `GallerySection` component:
1. Fetches images from `/api/gallery`
2. If Storyblok returns images → displays them
3. If Storyblok returns empty → displays fallback hardcoded images

### Fallback Images
The following fallback images are used when Storyblok has no gallery items:

```typescript
const fallbackImages = [
  {
    title: 'Annapurna Circuit Trek',
    image: '/images/annapurna-circuit.jpg',
    description: 'Experience the complete circuit around the Annapurna massif',
    region: 'Annapurna',
    trek: 'Annapurna Circuit Trek',
  },
  // ... more fallback images
];
```

## Testing

### Check the Console
Open your browser's developer console and look for these debug messages:
- `🎨 Fetching gallery items from Storyblok...`
- `📦 Storyblok response received`
- `📝 Found X gallery items`
- `✅ Mapped gallery items: X items`

### Verify in GallerySection
The component will log:
- `📡 Fetching images from API...`
- `✅ Received X images from API`
- `⚠️ No images from API, using Y fallback images`

## Production Checklist

Before deploying to production:

1. ✅ Ensure all gallery items are **published** in Storyblok
2. ✅ Change API version from `'draft'` to `'published'` in `/app/api/gallery/route.ts`
3. ✅ Remove debug `console.log` statements from:
   - `/app/api/gallery/route.ts`
   - `/components/GallerySection.tsx`
4. ✅ Test the gallery displays correctly
5. ✅ Verify fallback images work if Storyblok is unavailable

## Troubleshooting

### No Images Showing
1. Check that `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN` is set in your `.env.local`
2. Verify gallery items are published in Storyblok
3. Check browser console for error messages
4. Ensure component type is exactly `gallery-item`

### Images From Storyblok Not Displaying
1. Verify the `image` field has a valid `filename`
2. Check that images are properly uploaded in Storyblok
3. Ensure Storyblok CDN URLs are accessible

### Only Fallback Images Showing
1. This means the API returned an empty array
2. Check that gallery-item stories exist in Storyblok
3. Verify the component type name matches exactly
4. Try changing `version: 'published'` to `version: 'draft'` temporarily

## File Locations

- **API Route**: `/app/api/gallery/route.ts`
- **Component**: `/components/GallerySection.tsx`
- **This Guide**: `/STORYBLOK-GALLERY-SETUP.md`
