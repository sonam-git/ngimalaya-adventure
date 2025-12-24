# Storyblok Integration Issues & Fixes

## Issues Found & Fixed:

### 1. **Gallery API Caching Issue** ✅ FIXED
**Problem:** The `/app/api/gallery/route.ts` was missing `export const dynamic = 'force-dynamic'`

**Impact:** Next.js was caching the API responses, causing stale data to be served

**Fix Applied:**
```typescript
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### 2. **Version Mismatch** ✅ FIXED  
**Problem:** Gallery API used hardcoded `version: 'draft'` while peaks/safaris used environment-based version

**Impact:** Inconsistent data fetching between development and production

**Fix Applied:**
```typescript
version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
```

## Current Configuration Status:

### API Routes Configuration:
- ✅ `/app/api/gallery/route.ts` - Now has `dynamic = 'force-dynamic'` and proper version handling
- ✅ `/app/api/peaks/route.ts` - Already has `dynamic = 'force-dynamic'`
- ✅ `/app/api/safaris/route.ts` - Already has `dynamic = 'force-dynamic'`

### Storyblok Client Configuration:
All API routes properly use:
```typescript
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
});
```

## Remaining Checks:

### 1. Environment Variables
Ensure `.env.local` has:
```
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token_here
```

### 2. Storyblok Content Structure
Verify your Storyblok space has:

**Gallery:**
- Story at path: `gallery`
- Field name: `Gallery_block` (capital G, underscore)
- Nested blocks with component: `gallery_item`

**Peaks:**
- Story at path: `peak`
- Section component: `peak_section`
- Field: `peaks` array

**Safaris:**
- Story at path: `safari`
- Section component: `safari_section`
- Field: `safaris` array

## Testing Steps:

1. **Restart Dev Server** (Important!):
   ```bash
   # Kill the current server
   # Restart with:
   npm run dev
   ```

2. **Clear Browser Cache**:
   - Open DevTools (F12)
   - Right-click refresh button → "Empty Cache and Hard Reload"

3. **Check Server Logs**:
   Look for these messages in terminal:
   - `✅ Found gallery blocks in field: "Gallery_block"`
   - `✅ Fetched X peaks from Storyblok`
   - `✅ Found X safaris from Storyblok`

4. **Check Browser Console**:
   - Look for gallery API responses
   - Verify images are being loaded from Storyblok URLs (start with `https://a.storyblok.com/`)

## Common Issues & Solutions:

### Issue: Still seeing fallback images
**Causes:**
1. Storyblok content not published/saved in draft mode
2. Field names don't match (Gallery_block vs gallery_item)
3. Component names don't match (gallery_item vs Gallery Item)
4. Images not uploaded to Storyblok asset library

**Solutions:**
1. In Storyblok editor, click "Save" (or "Publish" if using published version)
2. Check field names match exactly what the API is looking for
3. Ensure component names are lowercase with underscores
4. Upload images to Storyblok asset library, don't just use URLs

### Issue: API returns empty array
**Causes:**
1. Story doesn't exist at expected path
2. Wrong field name
3. Content not in draft/published status

**Solutions:**
1. Check story slug matches API path
2. Verify field names in Storyblok schema
3. Save content and refresh

### Issue: Images load slowly
**Cause:** Storyblok CDN initial load

**Solution:** This is normal - Storyblok images are optimized on first request

## Next Steps:

1. ✅ **Restart dev server** to apply all changes
2. ✅ **Hard refresh browser** to clear cache
3. ✅ **Check terminal logs** for Storyblok fetch messages
4. ✅ **Verify Storyblok content** is saved and has correct structure
5. ✅ **Test each section** (gallery, peaks, safaris) individually

If issues persist after these fixes, check:
- Storyblok preview token is valid
- Content is saved in Storyblok
- Field names match exactly
- Images are uploaded to Storyblok asset library
