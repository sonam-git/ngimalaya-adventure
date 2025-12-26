# Z-Index Hierarchy Documentation

This document provides a comprehensive overview of all z-index values used in the Ngimalaya Adventure website to ensure proper layering of UI elements.

## Z-Index Scale

The application uses the following z-index hierarchy (from lowest to highest):

### Base Layer (z-1 to z-100)
- **Footer** (`z-[1]`): Base layer for footer content
- **Hero Section** (`z-[100]`): Hero section content on mobile

### Navigation Layer (z-30 to z-50)
- **MobileBottomBar** (`z-30`): Fixed bottom navigation on mobile devices
- **RegionMenu** (`z-[35]`): Sticky region selection menu

### Content Layer (Default/No explicit z-index)
- **Header**: Main navigation header
- **TrekMenu**: Trek selection menu
- **TrekDetailTabs**: Tab navigation for trek details
- **SafariMenu**: Safari selection menu
- **SafariDetailTabs**: Tab navigation for safari details
- **PeakMenu**: Peak selection menu
- **PeakDetailTabs**: Tab navigation for peak details
- **PrayerFlagBorder**: Decorative border element

### Modal Layer (z-[9999])
Most modals and overlays use this layer:
- **AnnouncementModal**: Site announcements
- **BookingModal**: Booking form
- **ContactModal**: Contact form
- **CustomTrekModal**: Custom trek inquiry
- **SafariSection Modal**: Safari detail modal
- **TreksSection Modal**: Trek detail modal
- **PeakExpeditionSection Modal**: Peak detail modal
- **GallerySection Modal**: Image gallery viewer
- **ReviewsSection Modal**: Review detail modal
- **SearchTrekking Modal & Dropdown**: Search interface

### AI Assistant Layer (z-[999999])
- **AIAssistant**: AI chat widget

### Map Modal Layer (z-[9999999]) - HIGHEST PRIORITY
- **TrekMapModal**: Interactive trek route map modal
  - **Purpose**: Must overlay ALL other UI elements including the AI Assistant
  - **Rationale**: When users open the map, it should be the primary focus without any distractions
  - **Components Below**: All menus, tabs, modals, and the AI Assistant
  - **Implementation**: Uses **React Portal** (`createPortal`) to render at `document.body` level
  - **Why Portal**: Ensures DOM-level independence from parent components, avoiding z-index stacking context issues

## Z-Index Best Practices

### When to Use Each Layer

1. **Base Layer (1-100)**: Static content that should always be below interactive elements
2. **Navigation Layer (30-50)**: Sticky/fixed navigation that needs to stay above content but below modals
3. **Content Layer (default)**: Regular page content
4. **Modal Layer (9999)**: Overlays, popups, and modals
5. **AI Assistant (999999)**: Persistent chat widget that should be accessible from most views
6. **Map Modal (9999999)**: Critical full-screen overlays that must be above everything

### Adding New Components

When adding new components, follow these guidelines:

1. **Regular Content**: No explicit z-index needed
2. **Sticky Navigation**: Use `z-[30]` to `z-[50]` range
3. **Modals/Overlays**: Use `z-[9999]` (standard modal layer)
4. **Critical Full-Screen Overlays**: Use `z-[9999999]` + React Portal (see TrekMapModal example)
5. **Avoid**: Creating new arbitrary z-index values

### React Portal Usage

For critical modals that must overlay everything:

```tsx
import { createPortal } from 'react-dom';

const YourModal = ({ isOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999999]">
      {/* Modal content */}
    </div>
  );

  return createPortal(modalContent, document.body);
};
```

**Benefits:**
- DOM-independent rendering
- No stacking context issues
- Guaranteed overlay behavior
- Clean, maintainable code

### Testing Z-Index Issues

To verify correct layering:

1. **Open Multiple Modals**: Ensure the most recently opened modal is on top
2. **Test with AI Assistant**: Open the AI chat and then open other modals
3. **Test Map Modal**: Open the Trek Map Modal and verify it overlays everything
4. **Responsive Testing**: Check z-index behavior on mobile, tablet, and desktop
5. **Theme Testing**: Verify layering in both light and dark modes

## Component-Specific Notes

### TrekMapModal
- Uses `z-[9999999]` to ensure it's always the topmost element
- **Uses React Portal**: Renders via `createPortal(content, document.body)` for true root-level overlay
- Critical for user experience as map interaction requires full attention
- Includes backdrop with `backdrop-blur-sm` for visual separation
- Client-side mounting check prevents SSR hydration issues

### AIAssistant
- Uses `z-[999999]` to stay accessible across most views
- Should be below TrekMapModal to avoid interfering with map interaction

### RegionMenu
- Uses `z-[35]` as it's a sticky navigation element
- Must stay above content but below all modals

### MobileBottomBar
- Uses `z-30` for fixed bottom navigation on mobile
- Lower than RegionMenu to avoid conflicts

## Troubleshooting

### Common Issues

1. **Modal Not Appearing**: Check if another element has a higher z-index
2. **Navigation Hidden**: Ensure sticky navigation has appropriate z-index (30-50)
3. **Clicking Through Elements**: Verify backdrop has proper z-index and click handlers
4. **Responsive Issues**: Test z-index behavior across all breakpoints

### Resolution Steps

1. Identify the conflicting components
2. Check this document for the correct hierarchy
3. Adjust z-index values to maintain the hierarchy
4. Test across all breakpoints and themes
5. Update this document if new patterns emerge

## Future Considerations

- Consider using CSS custom properties (CSS variables) for z-index values
- Create a centralized z-index scale in Tailwind config
- Implement a React context or utility for managing z-index dynamically
- Add automated tests to verify z-index hierarchy

---

**Last Updated**: December 2024  
**Maintainer**: Development Team  
**Review Frequency**: Quarterly or when adding new modal/overlay components
