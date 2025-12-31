# Cache Management Strategy

## Overview
This document explains the comprehensive cache management strategy implemented to ensure users always see the latest version of the website.

## Problem
Users were seeing cached versions of the site even when new updates were deployed, leading to stale content and outdated features.

## Solution Implemented

### 1. HTTP Cache Headers (next.config.js)
```
HTML Pages: no-cache, no-store, must-revalidate
Service Worker: no-cache, no-store, must-revalidate
Static Assets: 7 days with revalidation
Next.js Build Files: 1 year immutable (they have hashes)
```

### 2. Service Worker Strategy (sw.js)

#### Network-First for HTML
- HTML pages always fetch from network first
- Falls back to cache only if network fails
- Ensures users get fresh content on every visit

#### Cache-First for Static Assets
- Images, fonts, and other assets use cache-first
- Improves performance while allowing updates
- Old caches are automatically cleaned up

#### Version Management
- Version number: `v3.0.0` (update in `sw.js` and `version.json`)
- Automatic cache cleanup when version changes
- Manual cache clearing via message events

### 3. Auto-Update Detection

#### Service Worker Registration
- Checks for updates every 30 minutes
- Checks for updates when page becomes visible
- Prompts user when new version is available
- Auto-reloads after user confirmation

### 4. Manual Cache Clearing

#### For Users
If users see stale content, they can:
1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache in browser settings
3. Use DevTools: Right-click > Inspect > Application > Clear Storage

#### For Developers
Use the clear-cache utility:
```javascript
// In browser console
clearAllCaches()
```

Or load the script:
```html
<script src="/clear-cache.js"></script>
```

## How to Force a Cache Update

When you deploy new changes:

### Method 1: Update Service Worker Version (Recommended)
1. Edit `public/sw.js`
2. Update `CACHE_VERSION` (e.g., from 'v3.0.0' to 'v3.0.1')
3. Update `public/version.json` with same version
4. Deploy

### Method 2: Update Next.js Build
- Next.js automatically adds hashes to built files
- Each deployment creates new hashed filenames
- Old files are automatically invalidated

## Testing Cache Behavior

### Test Network-First Strategy
1. Open DevTools > Network tab
2. Reload the page
3. Look for HTML requests - should say "(from network)"

### Test Service Worker Update
1. Deploy with new version number
2. Visit site in incognito/private window
3. Should see console log: "New version available!"
4. Accept the prompt to reload

### Test Cache Clearing
1. Open DevTools > Application tab
2. Check "Cache Storage" section
3. Should see cache names with version numbers
4. Run `clearAllCaches()` in console
5. Verify caches are deleted

## Browser Cache Clearing Instructions for Users

### Chrome/Edge
1. Press `Cmd+Shift+Delete` (Mac) or `Ctrl+Shift+Delete` (Windows)
2. Select "Cached images and files"
3. Click "Clear data"

### Safari
1. Safari > Settings > Advanced
2. Check "Show Develop menu"
3. Develop > Empty Caches
4. Or just press `Cmd+Option+E`

### Firefox
1. Firefox > Settings > Privacy & Security
2. Cookies and Site Data > Clear Data
3. Check "Cached Web Content"
4. Click "Clear"

## Monitoring

### Check Current Version
```javascript
// In browser console
fetch('/version.json').then(r => r.json()).then(console.log)
```

### Check Service Worker Status
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(console.log)
```

### Check All Caches
```javascript
// In browser console
caches.keys().then(console.log)
```

## Best Practices

### For Content Updates
- No action needed - network-first ensures fresh HTML
- Users see updates immediately on page load

### For Major Releases
1. Update `CACHE_VERSION` in `sw.js`
2. Update `version.json`
3. Deploy
4. Users will be prompted to refresh

### For Emergency Cache Clear
- Ask users to hard refresh: `Cmd+Shift+R` / `Ctrl+Shift+R`
- Or direct them to `/clear-cache.js` utility

## Version History
- v3.0.0 (2025-12-31): Implemented comprehensive cache management
  - Network-first for HTML pages
  - Improved service worker update detection
  - Automatic cache cleanup
  - Manual cache clearing utilities

## FAQ

**Q: Why do users still see old content after deployment?**
A: Most likely their service worker hasn't updated yet. They will see a prompt on their next visit.

**Q: How long until users see the update?**
A: Immediately for new visitors. Within 30 minutes for returning visitors (due to update checks).

**Q: Can users force an immediate update?**
A: Yes, with hard refresh (`Cmd+Shift+R`) or running `clearAllCaches()` in console.

**Q: Do I need to update version numbers for every deployment?**
A: Only for major changes. Next.js handles most cache busting automatically.
