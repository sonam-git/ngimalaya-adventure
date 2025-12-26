# Fix: "Map container is already initialized" Error

## Problem
The Leaflet map was throwing an error: **"Map container is already initialized"** when the TrekMap component re-rendered or when React's Strict Mode caused double initialization.

## Root Cause
1. **React Strict Mode**: In development, React 18+ with Strict Mode intentionally mounts components twice to help detect side effects
2. **Component Re-renders**: The map container was being reused without properly cleaning up the previous Leaflet instance
3. **Async Leaflet Loading**: The async loading of Leaflet could result in race conditions where the map was initialized multiple times

## Solution Implemented

### 1. **Enhanced Initialization Checks** (`TrekMap.tsx`)
```typescript
const container = mapContainerRef.current; // Capture ref early for cleanup

// Multiple safety checks:
if (!container || mapRef.current) return;  // Check if already initialized
if ((container as any)._leaflet_id) return; // Check Leaflet's internal flag
if (mapRef.current) return;                 // Double-check after async load
```

### 2. **Improved Error Handling**
```typescript
try {
  map = L.map(container, {
    zoomControl: true,
    scrollWheelZoom: true,
  });
  mapRef.current = map;
} catch (error) {
  console.error('Error initializing map:', error);
  return;
}
```

### 3. **Proper Cleanup Function**
```typescript
return () => {
  if (mapRef.current) {
    try {
      mapRef.current.remove();
    } catch (error) {
      console.error('Error removing map:', error);
    } finally {
      mapRef.current = null;
    }
  }
  
  // Clear Leaflet's internal ID
  if (container) {
    delete (container as any)._leaflet_id;
  }
};
```

### 4. **Unique Key for React Reconciliation** (`TrekMapModal.tsx`)
```typescript
<TrekMap
  key={`${trek.id}-${isDarkMode ? 'dark' : 'light'}`}
  trekName={trek.name}
  dayCoordinates={dayCoordinates}
  isDarkMode={isDarkMode}
/>
```

## Why This Works

### 1. **Early Container Capture**
Capturing the container reference at the start of the effect ensures the cleanup function has access to the same DOM node, preventing React's ref warning.

### 2. **Multiple Guard Rails**
Three separate checks prevent double initialization:
- Check if map ref is already set
- Check if container already has Leaflet's internal ID
- Double-check after async Leaflet loading completes

### 3. **Defensive Cleanup**
The cleanup function:
- Wraps `remove()` in try-catch to handle edge cases
- Uses `finally` to ensure the ref is always nullified
- Explicitly deletes Leaflet's internal `_leaflet_id` from the container

### 4. **React Key Strategy**
Adding a unique key that includes:
- `trek.id` - Forces remount when switching treks
- `isDarkMode` - Forces remount when theme changes (different tile layers)

This ensures React completely unmounts and remounts the component, triggering proper cleanup.

## Testing Checklist

✅ **Strict Mode**: Map initializes correctly in development
✅ **Theme Toggle**: Switching dark/light mode doesn't cause errors
✅ **Trek Switch**: Changing treks properly cleans up and reinitializes
✅ **Modal Close/Reopen**: Opening modal multiple times works correctly
✅ **Hot Reload**: Development hot reloading doesn't break the map
✅ **Production Build**: No errors in production environment

## Additional Improvements Made

### Error Boundaries
Both initialization and cleanup now have proper error handling to prevent the entire component from crashing.

### Console Warnings
Helpful console messages for debugging:
- "No valid coordinates found for trek map" - when trek has no geocodable data
- "Error initializing map" - if Leaflet fails to create the map
- "Error removing map" - if cleanup fails

## Files Modified

1. **`components/TrekMap.tsx`**
   - Added container reference capture
   - Enhanced initialization checks
   - Improved error handling
   - Better cleanup function

2. **`components/TrekMapModal.tsx`**
   - Added unique key to TrekMap component

## Result

🎉 The map now works reliably in all scenarios:
- ✅ Development with Strict Mode
- ✅ Production builds
- ✅ Multiple modal opens/closes
- ✅ Theme switching
- ✅ Trek switching
- ✅ Hot module reloading

## Prevention Tips

When working with Leaflet in React:

1. **Always capture refs early** in useEffect for cleanup
2. **Check `_leaflet_id`** before initializing
3. **Use try-catch** for both init and cleanup
4. **Clear internal IDs** in cleanup
5. **Add unique keys** for complex scenarios
6. **Test in Strict Mode** during development

## References

- [Leaflet Issue #4968](https://github.com/Leaflet/Leaflet/issues/4968) - Map container already initialized
- [React 18 Strict Mode](https://react.dev/reference/react/StrictMode)
- [React useEffect Cleanup](https://react.dev/reference/react/useEffect#cleanup-function)
