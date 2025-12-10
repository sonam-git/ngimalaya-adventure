# Forms in Ngimalaya Adventure Website

## Total Forms: 4

This website contains **4 different forms** across different components for various user interactions.

---

## 1. Contact Section Form
**Location:** `components/ContactSection.tsx`  
**Page:** Home page (`/`)  
**Purpose:** Main contact form on the homepage

### Fields:
- **Full Name** (required)
- **Email Address** (required)
- **Phone Number** (optional)
- **Subject** (required)
- **Message** (required)

### Features:
- ✅ Email validation
- ✅ Form validation
- ✅ Success message on submission
- ✅ Dark mode support
- ✅ Responsive design

---

## 2. Booking Modal Form
**Location:** `components/BookingModal.tsx`  
**Triggered by:** "Book Now" buttons on trek cards and trek detail pages  
**Purpose:** Trek booking and reservation

### Fields:
**Personal Information:**
- **Full Name** (required)
- **Email** (required)
- **Phone** (required)
- **Country** (dropdown, required)
- **Age** (required)

**Trek Details:**
- **Destination** (dropdown - all treks available)
- **Trek Date** (required)
- **Group Size** (required)
- **Fitness Level** (dropdown, required)
  - Beginner
  - Recreational
  - Fit
  - Active
  - Athlete
  - Professional

**Additional Information:**
- **Dietary Restrictions** (optional)
- **Special Requests** (optional)
- **Emergency Contact Name** (required)
- **Emergency Contact Phone** (required)

### Features:
- ✅ Pre-filled with trek data if opened from specific trek
- ✅ Dropdown to select destination if opened from general booking
- ✅ Comprehensive fitness level selection
- ✅ Emergency contact information
- ✅ Success confirmation screen with booking details
- ✅ Loading state during submission
- ✅ Form reset functionality
- ✅ Dark mode support

---

## 3. Custom Trek Planning Modal Form
**Location:** `components/CustomTrekModal.tsx`  
**Triggered by:** "Custom Trek" or "Plan Your Trek" buttons  
**Purpose:** Custom itinerary planning based on user's schedule

### Fields:
- **Full Name** (required)
- **Country** (dropdown, required)
- **Available Days** (required) - How many days user has available
- **Preferred Date** (required)
- **Destination** (dropdown, required)
  - Everest Base Camp
  - Annapurna Base Camp
  - Manaslu Circuit
  - Langtang Valley
  - Everest Three Passes
  - Annapurna Circuit
  - Upper Mustang
  - Kanchenjunga
  - Gokyo Lakes
  - Nar Phu Valley
  - Tsum Valley
  - Dolpo
  - Other/Custom Route
- **Email** (required)
- **Message** (optional) - Additional details/preferences

### Features:
- ✅ Focused on time constraints (available days)
- ✅ Destination-specific planning
- ✅ Success message with next steps
- ✅ Loading animation
- ✅ Dark mode support
- ✅ Form validation

---

## 4. Contact Modal Form
**Location:** `components/ContactModal.tsx`  
**Triggered by:** "Contact Us" buttons throughout the site  
**Purpose:** General contact and inquiries

### Fields:
- **Full Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Subject** (dropdown, required)
  - General Inquiry
  - Trek Information
  - Booking Assistance
  - Group Trek Planning
  - Equipment Rental
  - Travel Insurance
  - Custom Itinerary
  - Safety & Preparation
  - Other
- **Message** (required)

### Features:
- ✅ Subject categorization
- ✅ Quick access modal overlay
- ✅ Success confirmation
- ✅ Loading state
- ✅ Form validation
- ✅ Dark mode support

---

## Form Implementation Summary

### Common Features Across All Forms:
1. **State Management:** React useState hooks for form data
2. **Validation:** Required field validation
3. **Submit Handling:** Async form submission with loading states
4. **Success States:** Confirmation messages after successful submission
5. **Dark Mode:** Full dark mode support
6. **Responsive Design:** Mobile-first responsive layouts
7. **Accessibility:** Proper labels and ARIA attributes
8. **Reset Functionality:** Clear form after submission
9. **Loading States:** Visual feedback during submission
10. **Error Handling:** Built-in form validation

### Form Submission Flow:
```
User fills form → Validation → Loading state → API simulation → Success message → Form reset
```

### Data Collection Points:
- **Contact Information:** Name, email, phone
- **Location:** Country selection
- **Trek Preferences:** Destination, dates, duration
- **Fitness & Health:** Fitness level, dietary restrictions
- **Emergency:** Emergency contact details (booking only)
- **Custom Requests:** Special requirements and messages

---

## Form Actions (Current Implementation)

All forms currently:
- ✅ Collect user input
- ✅ Validate data
- ✅ Simulate API submission (2-second delay)
- ✅ Show success confirmation
- ⚠️ **Note:** Forms simulate submission. Backend API integration needed for actual data storage.

---

## Future Enhancements (Recommended)

1. **Backend Integration:**
   - Connect to email service (SendGrid, AWS SES, etc.)
   - Store submissions in database
   - Send confirmation emails to users

2. **Additional Validation:**
   - Phone number format validation
   - Email verification
   - Date range validation
   - Age range validation

3. **Analytics:**
   - Track form submissions
   - Monitor conversion rates
   - A/B testing different form layouts

4. **Enhancements:**
   - File upload for documents (passport, insurance)
   - Payment integration
   - Multi-step forms for complex bookings
   - Auto-save drafts
   - Calendar integration for date selection

---

## Summary Table

| Form | Component | Location | Fields | Purpose |
|------|-----------|----------|--------|---------|
| Contact Section | ContactSection.tsx | Home page | 5 | General contact |
| Booking Modal | BookingModal.tsx | Modal | 13 | Trek bookings |
| Custom Trek Modal | CustomTrekModal.tsx | Modal | 7 | Custom planning |
| Contact Modal | ContactModal.tsx | Modal | 5 | Quick inquiries |

**Total Forms:** 4  
**Total Unique Fields:** 30+  
**All Forms:** Fully functional with validation and dark mode support
