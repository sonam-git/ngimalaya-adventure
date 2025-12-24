# Service Worker Error Fix

## Error
```
Uncaught (in promise) TypeError: Failed to execute 'put' on 'Cache': 
Request scheme 'chrome-extension' is unsupported at sw.js:43:17
```

## Root Cause
The service worker was attempting to cache **all** fetch requests, including:
- Chrome extension URLs (`chrome-extension://`)
- Non-HTTP protocols
- External resources

The Cache API only supports `http:` and `https:` schemes.

## Fix Applied ✅

### 1. Added URL Validation
Now the service worker:
- ✅ Skips non-HTTP(S) requests
- ✅ Skips Chrome extension URLs  
- ✅ Only caches same-origin requests
- ✅ Silently fails cache operations with error handling

### 2. Updated Service Worker Code

**Before (Line 21-43):**
```javascript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // ... tried to cache everything
  );
});
```

**After:**
```javascript
self.addEventListener('fetch', (event) => {
  // Skip caching for non-http(s) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Skip caching for Chrome extension requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    // ... only cache valid HTTP(S) same-origin requests
  );
});
```

### 3. Updated Cache Version
Changed `CACHE_NAME` from `'ngimalaya-v1'` to `'ngimalaya-v2'` to force service worker update.

## How to Apply the Fix

### Option 1: Clear Service Worker (Recommended)
1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Service Workers" in left sidebar
4. Click "Unregister" next to the service worker
5. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
6. New service worker will install automatically

### Option 2: Let It Update Automatically
1. Just refresh the page a few times
2. Service worker will update in background
3. Reload the page once more
4. New version will activate

### Option 3: Programmatic Update
Run in browser console:
```javascript
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
  location.reload();
});
```

## What Changed

| Issue | Before | After |
|-------|--------|-------|
| Chrome extension URLs | ❌ Tried to cache | ✅ Skipped |
| Non-HTTP URLs | ❌ Tried to cache | ✅ Skipped |
| External resources | ❌ Cached all | ✅ Only same-origin |
| Error handling | ❌ None | ✅ Try/catch added |
| Cache version | v1 | v2 (forces update) |

## Expected Behavior Now

✅ No more "chrome-extension" errors
✅ Service worker only caches your website assets
✅ Chrome extensions work normally
✅ PWA functionality maintained
✅ Offline support still works

## Testing

1. **Check DevTools Console** - Should be no errors
2. **Test Offline Mode**:
   - Open DevTools → Network tab
   - Select "Offline"
   - Navigate to a page you've visited
   - Should still work (cached)
3. **Verify Service Worker**:
   - DevTools → Application → Service Workers
   - Status should be "activated and is running"

## Files Modified

- ✅ `/public/sw.js` - Fixed caching logic and error handling

---

**The error is now fixed! Just refresh your browser to apply the new service worker.** 🎉
