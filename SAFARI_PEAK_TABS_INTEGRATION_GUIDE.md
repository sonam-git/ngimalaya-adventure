# Safari and Peak Detail Tabs Integration Guide

## Date: December 19, 2025

## Overview
Similar to TrekDetail, we need to integrate SafariDetailTabs and PeakDetailTabs into the Header component for consistent sticky navigation.

## Components Created
1. ✅ `SafariDetailTabs.tsx` - Created with tab navigation for Safari pages
2. ✅ `PeakDetailTabs.tsx` - Created with tab navigation for Peak pages
3. ✅ Header.tsx - Updated to import and use the new tab components

## Required Changes for SafariDetail.tsx

### 1. Update Component State
Remove the `handleTabChange` function and `tabs` array (now in SafariDetailTabs):
```tsx
// REMOVE these:
const { activeTab, setActiveTab } = useSafariTab();  // Remove setActiveTab
const handleTabChange = (tabId: string) => { ... };  // Remove entire function
const tabs = [ ... ];  // Remove tabs array

// KEEP only:
const { activeTab } = useSafariTab();
```

### 2. Update Padding
Change the container padding to account for header stack:
```tsx
// Change from:
<div className="min-h-screen pt-[80px] md:pt-[100px]">

// To (Header + PrayerFlag + SafariMenu + SafariDetailTabs):
<div className="min-h-screen pt-[248px] md:pt-[264px]">
```

Calculation:
- Header: 96px (md: 112px)
- PrayerFlag: 40px
- SafariMenu: 56px
- SafariDetailTabs: 56px
- Total: 248px (md: 264px)

### 3. Move Hero Section INTO Overview Tab
The image and contact card should ONLY appear when Overview tab is active:

```tsx
<div ref={contentRef} className="w-full">
  {/* Overview Tab */}
  {activeTab === 'overview' && (
    <div className="space-y-8">
      {/* Hero Section: Image + Contact Card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Image Column - 75% */}
        <div className="lg:col-span-3">
          {/* ... existing image code ... */}
        </div>
        
        {/* Contact Card - 25% */}
        <div className="lg:col-span-1">
          {/* ... existing contact card code ... */}
        </div>
      </div>
      
      {/* About This Safari */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
        <h2>About This Safari</h2>
        <p>{safari.overview}</p>
      </div>
    </div>
  )}
  
  {/* Highlights Tab */}
  {activeTab === 'highlights' && ( ... )}
  
  {/* ... other tabs ... */}
</div>
```

### 4. Remove Inline Tab Navigation
Delete the entire sticky tab navigation section (around line 130-160):
```tsx
// DELETE THIS ENTIRE BLOCK:
<div className="sticky top-[170px] md:top-[180px] z-40 mt-8 mb-6">
  <div className={...}>
    <div className="flex border-b...">
      {tabs.map((tab) => ( ... ))}
    </div>
  </div>
</div>
```

## Required Changes for PeakDetail.tsx

Follow the EXACT same pattern as SafariDetail:

### 1. Update Component State
```tsx
// Remove setActiveTab, handleTabChange, and tabs array
const { activeTab } = usePeakTab();
```

### 2. Update Padding
```tsx
// Header + PrayerFlag + PeakMenu + PeakDetailTabs
<div className="min-h-screen pt-[248px] md:pt-[264px]">
```

### 3. Move Hero Section INTO Overview Tab
Same structure as Safari - image + booking card should be inside overview tab

### 4. Remove Inline Tab Navigation
Remove the duplicate sticky tab navigation

## Header.tsx Integration (Already Done ✅)

The Header component now conditionally renders:
- PeakDetailTabs when on a peak detail page (`getCurrentPeakId()` returns a value)
- SafariDetailTabs when on a safari detail page (`getCurrentSafariId()` returns a value)

## Sticky Header Stack Heights

### Trek Pages:
- Header: 96px (md: 112px)
- PrayerFlag: 40px
- RegionMenu: 52px
- TrekMenu: 48px
- TrekDetailTabs: 56px
- **Total: 292px (md: 308px)**

### Peak Pages:
- Header: 96px (md: 112px)
- PrayerFlag: 40px
- PeakMenu: 56px
- PeakDetailTabs: 56px
- **Total: 248px (md: 264px)**

### Safari Pages:
- Header: 96px (md: 112px)
- PrayerFlag: 40px
- SafariMenu: 56px
- SafariDetailTabs: 56px
- **Total: 248px (md: 264px)**

## Testing Checklist

After making changes:
1. [ ] Navigate to a safari detail page (e.g., `/safari/chitwan-national-park`)
2. [ ] Verify tabs appear in header (sticky with SafariMenu)
3. [ ] Click Overview - should show image + contact card + about section
4. [ ] Click other tabs - should show their respective content
5. [ ] Content should appear right below the sticky tabs
6. [ ] Repeat for peak detail pages (e.g., `/peak-expedition/mera-peak`)

## Benefits
- ✅ Consistent tab navigation across all detail pages
- ✅ Proper sticky positioning (no manual calculations)
- ✅ Content appears right below tabs
- ✅ Hero sections only in Overview tab (no duplication)
- ✅ Cleaner code structure
