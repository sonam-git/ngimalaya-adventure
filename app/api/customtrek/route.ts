import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface CustomTrekData {
  fullName: string;
  country: string;
  availableDays: string;
  preferredDate: string;
  destination: string;
  email: string;
  message?: string;
  // Honeypot field
  website?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const DISPOSABLE_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  '10minutemail.com', 'trashmail.com', 'temp-mail.org', 'yopmail.com',
  'sharklasers.com', 'maildrop.cc', 'getnada.com', 'fakeinbox.com',
  'spamgourmet.com', 'tempinbox.com', 'dispostable.com'
];

const SUSPICIOUS_PATTERNS = [
  /<script/i,
  /javascript:/i,
  /on\w+=/i,
  /<iframe/i,
  /eval\(/i,
  /onclick/i,
  /onerror/i,
  /data:text\/html/i,
  /<object/i,
  /<embed/i
];

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function validateEmail(email: string): boolean {
  if (!EMAIL_REGEX.test(email)) return false;
  const domain = email.split('@')[1]?.toLowerCase();
  if (DISPOSABLE_DOMAINS.includes(domain)) return false;
  return true;
}

function sanitizeInput(input: string): string {
  const sanitized = input.replace(/<[^>]*>/g, '');
  
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(sanitized)) {
      throw new Error('Suspicious content detected');
    }
  }
  
  return sanitized.trim();
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now });
    return true;
  }
  
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now });
    return true;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const data: CustomTrekData = await request.json();
    
    // Honeypot check
    if (data.website) {
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true });
    }
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.country || 
        !data.availableDays || !data.preferredDate || !data.destination) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email
    if (!validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'Invalid or disposable email address' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(data.fullName),
      country: sanitizeInput(data.country),
      availableDays: sanitizeInput(data.availableDays),
      preferredDate: sanitizeInput(data.preferredDate),
      destination: sanitizeInput(data.destination),
      email: sanitizeInput(data.email),
      message: data.message ? sanitizeInput(data.message) : '',
    };
    
    // Create email content
    const emailContent = {
      to: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
      from: {
        email: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
        name: 'Ngimalaya Adventure Custom Trek Planner'
      },
      replyTo: sanitizedData.email,
      subject: `Custom Trek Planning Request: ${sanitizedData.destination} - ${sanitizedData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .section-title { color: #f5576c; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #f5576c; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 180px; }
            .value { color: #333; }
            .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .message-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #f5576c; margin: 15px 0; white-space: pre-wrap; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🗺️ Custom Trek Planning Request</h1>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Client Information</div>
                <div class="field"><span class="label">Full Name:</span> <span class="value">${sanitizedData.fullName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></span></div>
                <div class="field"><span class="label">Country:</span> <span class="value">${sanitizedData.country}</span></div>
              </div>
              
              <div class="section">
                <div class="section-title">📅 Trek Planning Details</div>
                <div class="field"><span class="label">Destination:</span> <span class="value"><strong>${sanitizedData.destination}</strong></span></div>
                <div class="field"><span class="label">Available Days:</span> <span class="value">${sanitizedData.availableDays} days</span></div>
                <div class="field"><span class="label">Preferred Date:</span> <span class="value">${sanitizedData.preferredDate}</span></div>
              </div>
              
              ${sanitizedData.message ? `
              <div class="section">
                <div class="section-title">💬 Additional Details</div>
                <div class="message-box">${sanitizedData.message}</div>
              </div>
              ` : ''}
              
              <div class="highlight">
                <strong>⚠️ Action Required:</strong> Create a custom itinerary based on the ${sanitizedData.availableDays}-day timeframe and respond within 24 hours.
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure custom trek planning system</p>
                <p>IP Address: ${clientIP}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Custom Trek Planning Request

Client Information:
- Full Name: ${sanitizedData.fullName}
- Email: ${sanitizedData.email}
- Country: ${sanitizedData.country}

Trek Planning Details:
- Destination: ${sanitizedData.destination}
- Available Days: ${sanitizedData.availableDays}
- Preferred Date: ${sanitizedData.preferredDate}

${sanitizedData.message ? `Additional Details:\n${sanitizedData.message}\n` : ''}

Received: ${new Date().toLocaleString()}
IP Address: ${clientIP}
      `
    };
    
    await sgMail.send(emailContent);
    
    return NextResponse.json({
      success: true,
      message: 'Custom trek planning request submitted successfully'
    });
    
  } catch (error: unknown) {
    console.error('Custom Trek API Error:', error);
    
    if (error instanceof Error && error.message === 'Suspicious content detected') {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again.' },
      { status: 500 }
    );
  }
}
