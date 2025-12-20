# SocialMedia Component - Facebook Integration

## Overview
Created a SocialMedia component that displays Facebook feeds for both Ngima N Sherpa and Ngimalaya Adventure on the About page. The component uses Facebook Page Plugin iframes for reliable embedding and is fully responsive for mobile and desktop devices.

## Features

### Two Facebook Feeds
1. **Ngima N Sherpa** - Personal Facebook profile
   - URL: https://www.facebook.com/nima.sherpa.10236
   - Shows timeline posts and updates

2. **Ngimalaya Adventure** - Company Facebook page
   - URL: https://www.facebook.com/Ngimalaya
   - Shows business page timeline and posts

### Responsive Design

#### Mobile (< 640px)
- Each feed displayed in a horizontal scroll container
- Fixed width of 600px to show full Facebook content
- Custom scrollbar styling (gray with dark mode support)
- Horizontal scrolling enabled for better mobile experience

#### Desktop (≥ 640px)
- Two-column grid layout (side-by-side)
- Each feed adapts to container width
- Smooth, clean iframe integration

### Design Elements
- Consistent with site theme (blue gradients, rounded corners)
- Background decorative blur elements
- Section header with subtitle
- Facebook icons on headings
- Direct links to both Facebook pages below the feeds
- Dark mode support throughout

## Technical Implementation

### iframe Embed Approach
Uses Facebook Page Plugin with iframe embeds instead of JavaScript SDK for:
- Better reliability
- Faster loading
- No dependency on external JavaScript
- Better cross-browser compatibility

### Facebook Page Plugin Parameters
```
- tabs=timeline (shows posts feed)
- small_header=false (shows full page header)
- adapt_container_width=true (responsive width)
- hide_cover=false (shows cover photo)
- show_facepile=true (shows page followers)
```

### Mobile Optimization
```tsx
// Mobile: horizontal scroll container
<div className="w-full h-[500px] rounded-xl overflow-x-auto whitespace-nowrap sm:hidden">
  <iframe width="600" height="500" ... />
</div>

// Desktop: full-width responsive
<div className="w-full h-[500px] rounded-xl overflow-hidden sm:block hidden">
  <iframe width="100%" height="500" ... />
</div>
```

### Styling Classes
- `scrollbar-thin` - Thin scrollbar on mobile
- `scrollbar-thumb-gray-400` - Gray scrollbar thumb
- `dark:scrollbar-thumb-gray-600` - Darker thumb in dark mode
- `scrollbar-track-gray-100` - Light track background
- `dark:scrollbar-track-gray-800` - Dark track in dark mode

## Files Modified

### Created
- `/components/SocialMedia.tsx` - Main component

### Updated  
- `/app/about/page.tsx` - Added SocialMedia component import and display

## Integration

The component is integrated into the About page:
```tsx
import SocialMedia from '@/components/SocialMedia';

export default function AboutPage() {
  return (
    <>
      {/* ...existing about content... */}
      <SocialMedia />
    </>
  );
}
```

## Facebook Page Plugin
The component uses the official Facebook Page Plugin which provides:
- Live feed updates
- Like button
- Page info
- Follower count
- Interactive posts (when clicked, opens in Facebook)

### Plugin URL Format
```
https://www.facebook.com/plugins/page.php?
  href=[ENCODED_PAGE_URL]&
  tabs=timeline&
  width=[WIDTH]&
  height=[HEIGHT]&
  small_header=false&
  adapt_container_width=true&
  hide_cover=false&
  show_facepile=true&
  appId
```

## Accessibility
- Proper `title` attributes on iframes
- `aria-label` for screen readers
- `allowFullScreen` for better UX
- `rel="noopener noreferrer"` on external links
- Keyboard navigation support

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (iOS and macOS)
- ✅ Mobile browsers (responsive design)

## Performance
- No external JavaScript SDK required
- Iframes load asynchronously
- No impact on page load time
- Lazy loading supported by browsers

## Testing Checklist
- [ ] Both Facebook feeds display correctly
- [ ] Mobile horizontal scroll works smoothly
- [ ] Desktop side-by-side layout appears correctly
- [ ] Direct link buttons work
- [ ] Dark mode styling applies correctly
- [ ] Component appears on About page
- [ ] No console errors
- [ ] Scrollbar styling works on mobile

## Future Enhancements (Optional)
- Add Instagram feed integration
- Add "Follow" button counters
- Add recent posts slider
- Add social sharing buttons
- Add Twitter/X feed if needed
- Add YouTube channel integration

## Notes
- Facebook iframes may take a moment to load depending on network speed
- The feeds show publicly available posts only
- Users can interact with posts (like, comment) within the iframe
- The embed automatically updates when new posts are made
