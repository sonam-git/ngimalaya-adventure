# Phone Number Formatting - Implementation Guide

## Overview
All form APIs automatically format phone numbers to **XXX-XXX-XXXX** format in the emails sent to pasangb2020@gmail.com, regardless of how users input them.

---

## How It Works

### User Input (Any Format)
Users can enter phone numbers in **any format**:
- `1234567890` ✅
- `123 456 7890` ✅
- `(123) 456-7890` ✅
- `123.456.7890` ✅
- `+1 123 456 7890` ✅
- `+1-123-456-7890` ✅

### Backend Processing
The API automatically:
1. Removes all non-digit characters (spaces, dashes, dots, parentheses)
2. Removes country codes (+1, 1, etc.)
3. Formats to **XXX-XXX-XXXX** for 10-digit numbers
4. Keeps original format for international numbers (>10 digits)

### Email Display
All emails show formatted phone numbers:
- **Input:** `1234567890`
- **Email:** `123-456-7890` ✅

---

## Implementation Details

### Utility Function
Created: `/utils/phoneFormatter.ts`

```typescript
export function formatPhoneNumber(phone: string): string {
  // Removes all non-digits except leading +
  // Removes country codes
  // Formats 10-digit numbers as XXX-XXX-XXXX
  // Returns original for international numbers
}
```

### APIs Updated

#### 1. Booking API (`/api/booking`)
Formats:
- `phone` - Customer phone
- `emergencyPhone` - Emergency contact phone

#### 2. Contact API (`/api/contact`)
Formats:
- `phone` - Contact phone (optional field)

#### 3. Inquiry API (`/api/inquiry`)
Formats:
- `phone` - Inquiry phone (optional field)

#### 4. Custom Trek API (`/api/customtrek`)
- No phone field in this form

---

## Examples

### Example 1: US Phone Number
**User Input:** `(555) 123-4567`  
**Processed:** Remove (, ), -, space → `5551234567`  
**Email Display:** `555-123-4567` ✅

### Example 2: Phone with Country Code
**User Input:** `+1 555 123 4567`  
**Processed:** Remove +, 1, spaces → `5551234567`  
**Email Display:** `555-123-4567` ✅

### Example 3: Plain Digits
**User Input:** `5551234567`  
**Processed:** Already clean → `5551234567`  
**Email Display:** `555-123-4567` ✅

### Example 4: International Number
**User Input:** `+44 20 7123 4567`  
**Processed:** Too many digits (>10), keep original  
**Email Display:** `+44 20 7123 4567` ✅

### Example 5: Short Number
**User Input:** `123456`  
**Processed:** Less than 10 digits, keep as-is  
**Email Display:** `123456` ✅

---

## Form Input Fields

### Recommended Input Setup

**No restrictions on user input:**
```tsx
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleInputChange}
  placeholder="(123) 456-7890"
  // No maxLength, no pattern restrictions
/>
```

**Why?**
- Users can paste numbers in any format
- International users can include country codes
- Better UX - no formatting constraints
- Backend handles all formatting

### Optional: Client-Side Formatting

If you want to show formatted numbers while typing:

```tsx
const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  // Allow user to type however they want
  setFormData(prev => ({
    ...prev,
    phone: value
  }));
};

// OR with live formatting (optional)
const formatAsUserTypes = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};
```

---

## Email Template Display

### Booking Email
```html
<div class="field">
  <span class="label">Phone:</span> 
  <span class="value">555-123-4567</span>  <!-- Formatted! -->
</div>

<div class="field">
  <span class="label">Emergency Contact Phone:</span> 
  <span class="value">555-987-6543</span>  <!-- Formatted! -->
</div>
```

### Contact/Inquiry Email
```html
<div class="field">
  <span class="label">Phone:</span> 
  <span class="value">555-123-4567</span>  <!-- Formatted! -->
</div>
```

---

## Testing

### Test Cases

```bash
# Test 1: Plain 10 digits
curl -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "5551234567",
    "emergencyPhone": "5559876543",
    ...
  }'
# Expected in email: 555-123-4567, 555-987-6543

# Test 2: With dashes
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "555-123-4567",
    ...
  }'
# Expected in email: 555-123-4567

# Test 3: With parentheses
curl -X POST http://localhost:3000/api/inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "(555) 123-4567",
    ...
  }'
# Expected in email: 555-123-4567

# Test 4: With country code
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+1 (555) 123-4567",
    ...
  }'
# Expected in email: 555-123-4567

# Test 5: International number
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+44 20 7123 4567",
    ...
  }'
# Expected in email: +44 20 7123 4567 (original format)

# Test 6: Empty phone (optional field)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@test.com",
    "subject": "Test",
    "message": "Hi"
    // No phone field
  }'
# Expected: Email sent without phone field, no error
```

---

## Edge Cases Handled

### ✅ Handled Cases
- Empty strings
- Null/undefined values
- Too many digits (international)
- Too few digits
- Multiple spaces
- Multiple dashes
- Dots as separators
- Parentheses
- Leading +1 or 1
- Mixed formats
- Special characters

### Example Edge Cases
```typescript
formatPhoneNumber('')                    → ''
formatPhoneNumber('abc')                 → 'abc'
formatPhoneNumber('123')                 → '123'
formatPhoneNumber('1234567890')          → '123-456-7890'
formatPhoneNumber('11234567890')         → '123-456-7890'
formatPhoneNumber('+11234567890')        → '123-456-7890'
formatPhoneNumber('123-456-7890')        → '123-456-7890'
formatPhoneNumber('(123) 456-7890')      → '123-456-7890'
formatPhoneNumber('+44 20 7123 4567')    → '+44 20 7123 4567'
```

---

## Benefits

### For Users
✅ No format restrictions  
✅ Can paste from anywhere  
✅ International numbers supported  
✅ Natural input experience  

### For You (Email Recipient)
✅ Consistent format in emails  
✅ Easy to read and dial  
✅ Standard US format (XXX-XXX-XXXX)  
✅ Clickable phone links (if enabled)  

### For Business
✅ Professional appearance  
✅ Reduced user friction  
✅ Better conversion rates  
✅ International-friendly  

---

## Optional Enhancement: Clickable Phone Links

To make phone numbers clickable in emails:

```html
<div class="field">
  <span class="label">Phone:</span> 
  <span class="value">
    <a href="tel:+1${sanitizedData.phone.replace(/\D/g, '')}">
      ${sanitizedData.phone}
    </a>
  </span>
</div>
```

This allows you to click the phone number to call directly from your email client on mobile devices!

---

## Summary

🎯 **Goal:** Users input phone numbers freely, emails show formatted numbers  
✅ **Implemented:** All 3 APIs with phone fields  
📧 **Format:** XXX-XXX-XXXX (US standard)  
🌍 **International:** Original format preserved  
🚀 **Status:** Production ready  

**No changes needed to form components - formatting happens automatically on the backend!**
