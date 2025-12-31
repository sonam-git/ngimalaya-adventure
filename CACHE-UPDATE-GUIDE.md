# Quick Cache Update Guide

## When You Deploy New Changes

### For Regular Deployments
✅ **No action needed!** 
- HTML pages use network-first strategy
- Users automatically get fresh content
- Next.js handles build file cache busting

### For Major Updates (New Features/Critical Fixes)

1. **Update Version Number**
   ```javascript
   // In public/sw.js - Line 3
   const CACHE_VERSION = 'v3.0.1'; // Increment this
   ```

2. **Update Version File**
   ```json
   // In public/version.json
   {
     "version": "3.0.1",
     "buildDate": "2025-12-31"
   }
   ```

3. **Deploy as usual**
   ```bash
   npm run build
   # Deploy to Vercel/hosting
   ```

4. **What Users Will See**
   - Automatic update check within 30 minutes
   - Prompt: "🎉 A new version is available!"
   - One-click refresh to update

## If Users Report Seeing Old Content

### Quick Fixes (tell users to try these):

1. **Hard Refresh** (Easiest)
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`

2. **Clear Browser Cache**
   - Chrome: `Cmd/Ctrl + Shift + Delete`
   - Select "Cached images and files"
   - Clear data

3. **Use Console Utility**
   - Press `F12` to open DevTools
   - Go to Console tab
   - Paste: `fetch('/clear-cache.js').then(r=>r.text()).then(eval)`
   - Then run: `clearAllCaches()`

## Version Numbers You Need to Update

When releasing major updates, change these files:

| File | Line | What to Change |
|------|------|----------------|
| `public/sw.js` | Line 3 | `CACHE_VERSION = 'v3.0.X'` |
| `public/version.json` | Line 2 | `"version": "3.0.X"` |

**That's it!** These two files control cache versioning.

## Testing Your Changes

### Before Deployment
```bash
npm run build
npm run start
# Visit http://localhost:3000
# Open DevTools > Application > Cache Storage
# Verify new version appears
```

### After Deployment
1. Visit site in **incognito/private window**
2. Open DevTools Console
3. Run: `fetch('/version.json').then(r=>r.json()).then(console.log)`
4. Verify version number matches your update

## Troubleshooting

### "Service Worker not updating"
- Check `public/sw.js` - did you increment `CACHE_VERSION`?
- Clear your own cache with hard refresh
- Check DevTools > Application > Service Workers > Update

### "Users still see old content"
- Verify deployment succeeded
- Check version.json is accessible: `yoursite.com/version.json`
- Ask users to hard refresh (Cmd/Ctrl+Shift+R)

### "Want to force immediate update for all users"
- Increment `CACHE_VERSION` in sw.js
- Deploy
- Users will be prompted within 30 minutes

## Cache Strategy Summary

| Content Type | Strategy | Cache Duration |
|--------------|----------|----------------|
| HTML Pages | Network-first | No cache |
| Service Worker | Never cached | No cache |
| Static Images | Cache-first | 7 days |
| Next.js Build Files | Cache-first | 1 year (immutable) |
| API Responses | Never cached | No cache |

## Remember

✨ **Most deployments need NO cache management!**
- Network-first for HTML ensures fresh content
- Only update version for major releases
- Users get updates automatically

📱 **Mobile users**: Same strategy applies
- PWA updates automatically
- Prompt appears when update available
- One tap to refresh

🚀 **Automated**: 
- Checks for updates every 30 minutes
- Checks when tab becomes visible
- Old caches cleaned automatically
