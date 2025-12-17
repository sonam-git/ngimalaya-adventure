# Google Maps Setup Guide

## How to Add Google Maps API Key

### Step 1: Get a Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/)
2. Create a new project or select an existing one
3. Enable the **Maps Embed API**
4. Go to **Credentials** and create an API key

### Step 2: Add API Key to Your Project
1. Create a `.env.local` file in the root of your project
2. Add your API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```
3. Restart your development server

### Step 3: Secure Your API Key (Recommended)
1. In Google Cloud Console, go to your API key settings
2. Set **Application restrictions** to "HTTP referrers"
3. Add your domains:
   - `localhost:*` (for development)
   - `yourdomain.com/*` (for production)
4. Set **API restrictions** to only allow "Maps Embed API"

## Alternative: No API Key Required

If you don't want to use an API key, you can use the standard Google Maps iframe embed:

In `TrekDetail.tsx`, update the `getGoogleMapsUrl()` function to use Option 2:

```typescript
const getGoogleMapsUrl = () => {
  const query = encodeURIComponent(`${trek.name}, ${trek.region}, Nepal`);
  return `https://maps.google.com/maps?q=${query}&t=&z=9&ie=UTF8&iwloc=&output=embed`;
};
```

This method doesn't require an API key but has fewer customization options.

## Features Implemented

✅ Interactive Google Maps embed  
✅ Shows trek location and region  
✅ Displays key information (altitude, duration, difficulty)  
✅ Lists all stops along the route  
✅ Responsive design with dark mode support  
✅ Location details and route overview cards  

## Notes

- The map will show the general area of the trek
- For more precise route mapping, you can use Google Maps to create a custom map with the exact trek route and embed that instead
- The current implementation searches for the trek by name and region
