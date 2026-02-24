# Email Provider Migration Guide

## Overview

The email system now supports two providers:
1. **Nodemailer with SMTP** (recommended, free)
2. **SendGrid** (legacy, can be used as fallback)

You can switch between providers using the `EMAIL_PROVIDER` environment variable.

## Configuration

### Option 1: Nodemailer with Gmail SMTP (Recommended)

This is the recommended approach as it's free and doesn't require a third-party service.

#### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Factor Authentication

#### Step 2: Generate an App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select your device (or "Other")
4. Click "Generate"
5. Copy the 16-character password

#### Step 3: Configure Environment Variables
Add these to your `.env.local` file:

```bash
# Use Nodemailer
EMAIL_PROVIDER=nodemailer

# Your destination email
NGIMALAYA_EMAIL=ngiman81@gmail.com

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ngiman81@gmail.com
SMTP_PASS=your-16-char-app-password
```

### Option 2: SendGrid (Legacy)

If you want to continue using SendGrid:

```bash
# Use SendGrid
EMAIL_PROVIDER=sendgrid

# Your destination email
NGIMALAYA_EMAIL=ngiman81@gmail.com

# SendGrid API Key
SENDGRID_API_KEY=your-sendgrid-api-key
```

## How It Works

The email system automatically detects which provider to use based on the `EMAIL_PROVIDER` environment variable:

- `EMAIL_PROVIDER=nodemailer` (default) → Uses SMTP
- `EMAIL_PROVIDER=sendgrid` → Uses SendGrid API

If `EMAIL_PROVIDER` is not set, it defaults to `nodemailer`.

## Testing

To test your email configuration:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Submit a test form (contact, booking, etc.)

3. Check the server logs for:
   - `Sending email via nodemailer...` or `Sending email via sendgrid...`
   - `Email sent successfully via [provider]`

## Other SMTP Providers

You can use other SMTP providers by changing the `SMTP_HOST` and `SMTP_PORT`:

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP Server
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false  # or true for port 465
```

## Troubleshooting

### "Authentication failed" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Factor Authentication is enabled on your Google account

### "Connection refused" error
- Check if your SMTP host and port are correct
- Some networks block SMTP ports - try using port 465 with `SMTP_SECURE=true`

### Emails not arriving
- Check your spam folder
- Verify the `NGIMALAYA_EMAIL` is correct
- Check server logs for any error messages

## Files Modified

- `lib/email.ts` - New email service utility
- `app/api/booking/route.ts` - Updated to use email service
- `app/api/contact/route.ts` - Updated to use email service
- `app/api/customtrek/route.ts` - Updated to use email service
- `app/api/inquiry/route.ts` - Updated to use email service
- `.env.example` - Updated with new environment variables
