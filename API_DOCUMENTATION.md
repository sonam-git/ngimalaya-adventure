# API Documentation - Ngimalaya Adventure

## Overview
This document describes the API endpoints for form submissions in the Ngimalaya Adventure website. All endpoints use SendGrid for email delivery and implement comprehensive security measures.

---

## Security Features

### 🛡️ Implemented Security Measures

1. **Email Validation**
   - RFC-compliant email regex validation
   - Disposable email domain blocking (30+ domains)
   - Domain existence check

2. **Honeypot Protection**
   - Hidden `website` field to catch bots
   - Bots filling this field receive fake success response

3. **Rate Limiting**
   - Maximum 5 requests per hour per IP address
   - Automatic cleanup of old rate limit records
   - 429 status code returned when limit exceeded

4. **Input Sanitization**
   - HTML tag removal
   - XSS attack prevention
   - SQL injection pattern detection
   - Script tag blocking
   - Event handler blocking

5. **Suspicious Pattern Detection**
   - Blocks: `<script>`, `javascript:`, `onclick`, `onerror`, `<iframe>`, `eval()`, `data:text/html`, `<object>`, `<embed>`, `vbscript:`

6. **Content Security**
   - All inputs sanitized before processing
   - WhiteSpace normalization
   - Required field validation

---

## API Endpoints

### 1. Booking API
**Endpoint:** `POST /api/booking`

**Purpose:** Handle trek booking requests

**Request Body:**
```typescript
{
  fullName: string;          // Required
  email: string;             // Required, validated
  phone: string;             // Required
  country: string;           // Required
  age: string;               // Required
  fitnessLevel: string;      // Required
  destination: string;       // Required (trek ID or name)
  trekDate: string;          // Required (ISO date format)
  groupSize: string;         // Required
  specialRequests?: string;  // Optional
  dietaryRestrictions?: string; // Optional
  emergencyContact: string;  // Required
  emergencyPhone: string;    // Required
  website?: string;          // Honeypot - should be empty
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Booking request submitted successfully"
}
```

**Error Responses:**
- `400`: Missing required fields or invalid email
- `429`: Too many requests (rate limit exceeded)
- `500`: Server error

**Email Template:**
- Beautifully formatted HTML email
- Organized sections: Personal Info, Trek Details, Additional Info, Emergency Contact
- Includes client IP address for security
- Nepal Time (NPT) timestamp

---

### 2. Contact Form API
**Endpoint:** `POST /api/contact`

**Purpose:** Handle general contact form submissions

**Request Body:**
```typescript
{
  name: string;      // Required
  email: string;     // Required, validated
  phone?: string;    // Optional
  subject: string;   // Required
  message: string;   // Required
  website?: string;  // Honeypot - should be empty
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Responses:**
- `400`: Missing required fields or invalid email
- `429`: Too many requests
- `500`: Server error

---

### 3. Custom Trek Planning API
**Endpoint:** `POST /api/customtrek`

**Purpose:** Handle custom trek planning requests based on available days

**Request Body:**
```typescript
{
  fullName: string;      // Required
  country: string;       // Required
  availableDays: string; // Required (number of days)
  preferredDate: string; // Required (ISO date format)
  destination: string;   // Required
  email: string;         // Required, validated
  message?: string;      // Optional
  website?: string;      // Honeypot - should be empty
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Custom trek planning request submitted successfully"
}
```

**Error Responses:**
- `400`: Missing required fields or invalid email
- `429`: Too many requests
- `500`: Server error

**Email Template:**
- Gradient pink/red header design
- Highlights available days for quick reference
- Action reminder to create custom itinerary

---

### 4. Inquiry API (Contact Modal)
**Endpoint:** `POST /api/inquiry`

**Purpose:** Handle quick inquiries and questions

**Request Body:**
```typescript
{
  fullName: string;  // Required
  email: string;     // Required, validated
  phone?: string;    // Optional
  subject: string;   // Required (from predefined list)
  message: string;   // Required
  website?: string;  // Honeypot - should be empty
}
```

**Subject Categories:**
- General Inquiry
- Trek Information
- Booking Assistance
- Group Trek Planning
- Equipment Rental
- Travel Insurance
- Custom Itinerary
- Safety & Preparation
- Other

**Success Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully"
}
```

**Error Responses:**
- `400`: Missing required fields or invalid email
- `429`: Too many requests
- `500`: Server error

**Email Template:**
- Blue gradient header
- Subject category badges with icons
- Quick reply button
- Priority reminder (24-hour response time)

---

## Environment Variables

Required environment variables in `.env.local`:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key
NGIMALAYA_EMAIL=ngiman81@gmail.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Blocked Disposable Email Domains

The following disposable email providers are blocked:
- tempmail.com
- throwaway.email
- guerrillamail.com
- mailinator.com
- 10minutemail.com
- trashmail.com
- temp-mail.org
- yopmail.com
- sharklasers.com
- maildrop.cc
- getnada.com
- fakeinbox.com
- spamgourmet.com
- tempinbox.com
- dispostable.com
- burnermail.io

---

## Rate Limiting Details

- **Window:** 1 hour (3,600,000 ms)
- **Max Requests:** 5 per IP address
- **Storage:** In-memory Map (use Redis for production)
- **Identifier:** Client IP address from headers
- **Headers Checked:** `x-forwarded-for`, `x-real-ip`

---

## Testing the APIs

### Using cURL:

**Booking API:**
```bash
curl -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "country": "United States",
    "age": "30",
    "fitnessLevel": "fit",
    "destination": "everest-base-camp",
    "trekDate": "2025-03-15",
    "groupSize": "2",
    "emergencyContact": "Jane Doe",
    "emergencyPhone": "+1234567891"
  }'
```

**Contact API:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Trek Inquiry",
    "message": "I would like more information about the Everest Base Camp trek."
  }'
```

**Custom Trek API:**
```bash
curl -X POST http://localhost:3000/api/customtrek \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "country": "United States",
    "availableDays": "10",
    "preferredDate": "2025-04-01",
    "destination": "Annapurna Base Camp",
    "email": "john@example.com",
    "message": "I have 10 days available"
  }'
```

**Inquiry API:**
```bash
curl -X POST http://localhost:3000/api/inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "subject": "General Inquiry",
    "message": "What is the best time to trek?"
  }'
```

---

## Email Format

All emails include:
- ✅ Professional HTML template with gradient headers
- ✅ Organized sections with clear labels
- ✅ Color-coded by form type
- ✅ Client IP address (for security tracking)
- ✅ Nepal Time (NPT) timestamp
- ✅ Plain text fallback
- ✅ Reply-to set to customer's email
- ✅ Action reminders (24-hour response time)

---

## Security Best Practices

### For Production Deployment:

1. **Use Redis for Rate Limiting**
   ```typescript
   // Replace in-memory Map with Redis
   const redis = new Redis(process.env.REDIS_URL);
   ```

2. **Add CORS Protection**
   ```typescript
   // Allow only your domain
   const allowedOrigins = ['https://yourdomain.com'];
   ```

3. **Implement reCAPTCHA**
   ```typescript
   // Add Google reCAPTCHA v3 verification
   ```

4. **Use Environment-specific API Keys**
   - Development: Test API key
   - Production: Production API key with verified sender

5. **Monitor API Usage**
   - Set up SendGrid activity tracking
   - Log all API calls
   - Alert on unusual patterns

6. **Database Logging**
   - Store all submissions in database
   - Keep audit trail
   - Enable admin dashboard to review submissions

---

## Error Handling

All endpoints handle:
- ✅ Network errors
- ✅ SendGrid API failures
- ✅ Invalid JSON payloads
- ✅ Missing required fields
- ✅ Invalid email formats
- ✅ Suspicious content patterns
- ✅ Rate limit violations

Errors are logged to console and appropriate HTTP status codes are returned.

---

## Future Enhancements

1. **Database Integration**
   - Store all form submissions
   - Admin dashboard to view/manage submissions
   - Submission history

2. **Advanced Security**
   - Google reCAPTCHA v3
   - IP geolocation blocking
   - Advanced bot detection (ML-based)

3. **Email Features**
   - Auto-responder emails to customers
   - Email templates in multiple languages
   - PDF attachment generation (itineraries, quotes)

4. **Analytics**
   - Track conversion rates
   - A/B testing for email templates
   - Response time monitoring

5. **Integrations**
   - CRM integration (Salesforce, HubSpot)
   - Slack notifications for new bookings
   - SMS notifications via Twilio

---

## Support

For issues or questions:
- Email: ngiman81@gmail.com
- Check SendGrid dashboard for delivery status
- Review Next.js logs for API errors

---

## License

All API endpoints are proprietary to Ngimalaya Adventure Nepal.
