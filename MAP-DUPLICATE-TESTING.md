# Testing Duplicate Location Markers

This guide helps you test the duplicate location marker functionality on the interactive map.

## Quick Test: Island Peak Expedition

The Island Peak expedition in the codebase already contains multiple duplicate locations, making it perfect for testing.

### Steps to Test

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to Island Peak:**
   - Go to http://localhost:3000
   - Click on "Peak Expedition" in the navigation
   - Select "Island Peak (Imja Tse)" from the list

3. **Open the Interactive Map:**
   - Scroll to the "Map" tab
   - Click "Open Interactive Map" button

4. **Observe Duplicate Locations:**

   You should see the following revisited locations with multiple markers:

   **Namche Bazaar (3 visits):**
   - Day 3: Trek from Phakding
   - Day 4: Acclimatization day
   - Day 16: Return trek

   **Dingboche (2 visits):**
   - Day 6: Trek from Tengboche
   - Day 7: Acclimatization day

   **Island Peak Base Camp (3 visits):**
   - Day 10: Arrive at base camp
   - Day 11: Rest and preparation
   - Day 14: Return from high camp

### What to Look For

✅ **Marker Spread:**
- Markers for the same location should be arranged in a circular pattern
- The spread should be visible but not excessive (~300m offset)
- More visits = slightly larger circular spread

✅ **Color Variation:**
- Each visit should have a different blue shade
- First visit: Standard blue (#3B82F6)
- Second visit: Lighter blue (#60A5FA)
- Third visit: Darker blue (#2563EB)

✅ **Visual Enhancements:**
- Duplicate markers should be slightly larger (32x44 vs 30x42)
- White border around duplicate markers
- Subtle pulsing animation

✅ **Popup Information:**
- Click each marker to open its popup
- Should show "🔄 Visit X of Y" for duplicate locations
- Visit numbers should be sequential and accurate

✅ **Legend:**
- Check the legend at the bottom of the map
- Should include "Revisited Locations" with two-colored indicator
- Additional explanatory note about circular pattern

## Manual Test Cases

### Test Case 1: Two Visits
**Location:** Dingboche
**Days:** 6, 7
**Expected:**
- Two markers offset 180° apart (opposite sides)
- Different blue shades
- Visit 1 of 2 and Visit 2 of 2 in popups

### Test Case 2: Three Visits
**Location:** Namche Bazaar or Island Peak Base Camp
**Days:** Various
**Expected:**
- Three markers forming a triangle (120° apart)
- Three different blue shades
- Visit 1 of 3, Visit 2 of 3, Visit 3 of 3 in popups

### Test Case 3: Route Continuity
**Expected:**
- Dashed blue line should connect all markers in day order
- Line passes through duplicate location markers
- Route clearly shows the journey progression

## Edge Cases to Test

### 1. Start/End at Same Location
If a trek starts and ends at the same location (e.g., Kathmandu):
- Start marker (green) should appear at one position
- End marker (red) should be offset from the start
- Any intermediate visits should also be offset

### 2. Consecutive Days at Same Location
Multiple consecutive days without moving (e.g., rest days):
- Each day should have its own marker
- Markers should spread evenly
- Days should be numbered correctly in popups

### 3. Dark Mode
Toggle dark mode and verify:
- Marker colors remain visible
- Popup text is readable
- Legend is clearly visible
- Tile layer switches to dark theme

## Creating Custom Test Data

To test with your own data, create a trek with duplicates:

```typescript
{
  id: 'test-trek-duplicates',
  name: 'Test Trek with Duplicates',
  itinerary: [
    {
      day: 1,
      title: 'Arrive in Kathmandu',
      location: 'Kathmandu',
      description: 'Start of trek'
    },
    {
      day: 2,
      title: 'Trek to Namche',
      location: 'Namche Bazaar',
      description: 'First visit'
    },
    {
      day: 3,
      title: 'Acclimatization at Namche',
      location: 'Namche Bazaar',
      description: 'Second visit - rest day'
    },
    {
      day: 4,
      title: 'Trek to Tengboche',
      location: 'Tengboche',
      description: 'Move on'
    },
    {
      day: 5,
      title: 'Return to Namche',
      location: 'Namche Bazaar',
      description: 'Third visit - on the way back'
    },
    {
      day: 6,
      title: 'Return to Kathmandu',
      location: 'Kathmandu',
      description: 'End of trek'
    },
  ]
}
```

This creates:
- Kathmandu: 2 visits (start and end)
- Namche Bazaar: 3 visits (days 2, 3, 5)
- Tengboche: 1 visit (control - should show normal marker)

## Visual Checklist

Use this checklist while testing:

- [ ] Multiple markers visible for duplicate locations
- [ ] Markers arranged in circular pattern
- [ ] Different blue shades for each visit
- [ ] Visit counter shows in popup (e.g., "Visit 2 of 3")
- [ ] Duplicate markers slightly larger than regular ones
- [ ] White border visible around duplicate markers
- [ ] Subtle pulsing animation on duplicate markers
- [ ] Route line connects through all markers
- [ ] Legend includes "Revisited Locations" entry
- [ ] Explanatory note about circular pattern visible
- [ ] All markers clickable and show correct information
- [ ] Map zoom accommodates all markers
- [ ] Works in both light and dark mode

## Performance Check

For treks with many duplicate locations:

- [ ] Map loads smoothly without lag
- [ ] Markers render quickly
- [ ] No visual glitches or overlapping
- [ ] Popups open/close smoothly
- [ ] Animation doesn't impact performance
- [ ] Zoom and pan remain responsive

## Common Issues

### Issue: Markers Overlapping
**Cause:** Offset distance too small
**Solution:** Increase `baseOffset` in TrekMap.tsx

### Issue: Markers Too Far Apart
**Cause:** Offset distance too large
**Solution:** Decrease `baseOffset` in TrekMap.tsx

### Issue: Colors Too Similar
**Cause:** Adjacent blue shades not distinct enough
**Solution:** Reorder `blueShades` array for more contrast

### Issue: Animation Distracting
**Cause:** Pulse animation too prominent
**Solution:** Adjust animation timing or scale in CSS

## Browser Testing

Test in multiple browsers:

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Reporting Issues

If you find issues, note:
1. Browser and version
2. Screen size/resolution
3. Specific trek/peak tested
4. Location where issue occurred
5. Screenshot if visual issue
6. Console errors if any

---

**Last Updated:** December 2024
**Test Coverage:** Island Peak, Manual Test Cases, Edge Cases
