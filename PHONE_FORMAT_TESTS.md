# Phone Formatting Test Script

## Quick Test with cURL

Copy and paste these commands to test phone number formatting:

### Test 1: Plain Digits
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "5551234567",
    "subject": "Phone Format Test",
    "message": "Testing plain digits: 5551234567"
  }'
```
**Expected in email:** Phone: 555-123-4567

---

### Test 2: With Dashes
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "subject": "Phone Format Test",
    "message": "Testing with dashes: 555-123-4567"
  }'
```
**Expected in email:** Phone: 555-123-4567

---

### Test 3: With Parentheses
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "(555) 123-4567",
    "subject": "Phone Format Test",
    "message": "Testing with parentheses: (555) 123-4567"
  }'
```
**Expected in email:** Phone: 555-123-4567

---

### Test 4: With Country Code
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1 555 123 4567",
    "subject": "Phone Format Test",
    "message": "Testing with country code: +1 555 123 4567"
  }'
```
**Expected in email:** Phone: 555-123-4567

---

### Test 5: Booking with Emergency Phone
```bash
curl -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "5551234567",
    "country": "United States",
    "age": "30",
    "fitnessLevel": "fit",
    "destination": "Everest Base Camp",
    "trekDate": "2025-03-15",
    "groupSize": "2",
    "emergencyContact": "Jane Doe",
    "emergencyPhone": "5559876543"
  }'
```
**Expected in email:**  
Phone: 555-123-4567  
Emergency Contact Phone: 555-987-6543

---

### Test 6: Mixed Formats
```bash
curl -X POST http://localhost:3000/api/inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "555.123.4567",
    "subject": "General Inquiry",
    "message": "Testing dots as separators: 555.123.4567"
  }'
```
**Expected in email:** Phone: 555-123-4567

---

## Verification Checklist

After running tests, check your email (pasangb2020@gmail.com) for:

- [ ] All phone numbers formatted as XXX-XXX-XXXX
- [ ] No extra characters (spaces, parentheses, etc.)
- [ ] Consistent formatting across all fields
- [ ] Emergency phone also formatted correctly
- [ ] Optional phone fields work when empty

---

## Expected Results Summary

| Input Format          | Email Display   |
|----------------------|-----------------|
| 5551234567           | 555-123-4567    |
| 555-123-4567         | 555-123-4567    |
| (555) 123-4567       | 555-123-4567    |
| +1 555 123 4567      | 555-123-4567    |
| 1-555-123-4567       | 555-123-4567    |
| 555.123.4567         | 555-123-4567    |
| +44 20 7123 4567     | +44 20 7123 4567|

✅ All formats → **555-123-4567** (for 10-digit US numbers)  
🌍 International → **Original format preserved**
