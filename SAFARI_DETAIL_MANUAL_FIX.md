# SafariDetail.tsx Manual Fix Instructions

## Current Status
The SafariDetail.tsx file has structural issues from partial automated edits. Follow these steps to fix it manually:

## Steps to Fix

### 1. Fix Indentation in Overview Tab (Lines 45-130)
The hero section grid needs proper indentation:

```tsx
{activeTab === 'overview' && (
  <div className="space-y-8">
    {/* Hero Section: Image (75%) + Contact Card (25%) */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Image Column - 75% width */}
      <div className="lg:col-span-3">
        {/* ... existing image code ... */}
      </div>
      
      {/* Contact Card Column - 25% width */}
      <div className="lg:col-span-1">
        {/* ... existing contact card code ... */}
      </div>
    </div>
    
    {/* About This Safari */}
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
      <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        About This Safari
      </h2>
      <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {safari.overview}
      </p>
    </div>
  </div>
)}
```

### 2. Remove Inline Tab Navigation (Lines ~135-160)
Delete this entire section:
```tsx
{/* Tab Navigation - Sticky */}
<div className="sticky top-[170px] md:top-[180px] z-40 mt-8 mb-6">
  <div className={...}>
    <div className="flex border-b...">
      {tabs.map((tab) => ( ... ))}
    </div>
  </div>
</div>
```

### 3. Remove Duplicate Safari Quick Info and Overview Content
After removing the inline tabs, there will be duplicate content. Keep only the clean structure where Safari Quick Info and Overview Content are NOT repeated.

## Quick Fix Alternative

If the above is too complex, you can:

1. **Backup the current Safari Detail.tsx**
2. **Copy the structure from PeakDetail.tsx** (which is now working correctly)
3. **Adapt it for Safari** by:
   - Changing `peak` to `safari`
   - Changing `PeakExpedition` to `SafariPackage`
   - Adding the `wildlife` tab
   - Adjusting colors from orange to green theme
   - Updating field names (peak.height → safari.location, etc.)

## Verification Checklist
After fixing:
- [ ] No TypeScript/compile errors
- [ ] File structure is properly indented
- [ ] Padding is `pt-[248px] md:pt-[264px]`
- [ ] No inline tab navigation
- [ ] Hero section only in overview tab
- [ ] All tabs render their content correctly
- [ ] No duplicate content sections

## Test the Fix
1. Navigate to `/safari/chitwan-national-park`
2. Verify tabs appear in header (with SafariMenu)
3. Click Overview - should show image + contact + about
4. Click other tabs - should show correct content
5. Content should appear right below sticky tabs
