import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { formatPhoneNumber } from '@/utils/phoneFormatter';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  age: string;
  fitnessLevel: string;
  destination: string;
  trekDate: string;
  groupSize: string;
  specialRequests?: string;
  dietaryRestrictions?: string;
  emergencyContact: string;
  emergencyPhone: string;
  // Honeypot field
  website?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Disposable email domains to block
const DISPOSABLE_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  '10minutemail.com', 'trashmail.com', 'temp-mail.org', 'yopmail.com',
  'sharklasers.com', 'maildrop.cc', 'getnada.com'
];

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
  /<script/i,
  /javascript:/i,
  /on\w+=/i,
  /<iframe/i,
  /eval\(/i,
  /onclick/i,
  /onerror/i
];

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function validateEmail(email: string): boolean {
  if (!EMAIL_REGEX.test(email)) return false;
  
  const domain = email.split('@')[1]?.toLowerCase();
  if (DISPOSABLE_DOMAINS.includes(domain)) return false;
  
  return true;
}

function sanitizeInput(input: string): string {
  // Remove any HTML tags and suspicious patterns
  const sanitized = input.replace(/<[^>]*>/g, '');
  
  // Check for suspicious patterns
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
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const data: BookingData = await request.json();
    
    // Honeypot check - if filled, it's a bot
    if (data.website) {
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true }); // Fake success to bot
    }
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.country || 
        !data.destination || !data.trekDate || !data.emergencyContact) {
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
    
    // Sanitize all inputs
    const sanitizedData = {
      fullName: sanitizeInput(data.fullName),
      email: sanitizeInput(data.email),
      phone: formatPhoneNumber(sanitizeInput(data.phone)),
      country: sanitizeInput(data.country),
      age: sanitizeInput(data.age),
      fitnessLevel: sanitizeInput(data.fitnessLevel),
      destination: sanitizeInput(data.destination),
      trekDate: sanitizeInput(data.trekDate),
      groupSize: sanitizeInput(data.groupSize),
      specialRequests: data.specialRequests ? sanitizeInput(data.specialRequests) : '',
      dietaryRestrictions: data.dietaryRestrictions ? sanitizeInput(data.dietaryRestrictions) : '',
      emergencyContact: sanitizeInput(data.emergencyContact),
      emergencyPhone: formatPhoneNumber(sanitizeInput(data.emergencyPhone)),
    };
    
    // Create email content
    const emailContent = {
      to: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
      from: {
        email: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
        name: 'Ngimalaya Adventure Booking System'
      },
      replyTo: sanitizedData.email,
      subject: `New Trek Booking: ${sanitizedData.destination} - ${sanitizedData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { margin-bottom: 25px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .section-title { color: #667eea; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 180px; }
            .value { color: #333; }
            .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏔️ New Trek Booking Request</h1>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} NPT</p>
            </div>
            
            <div class="content">
              <!-- Personal Information -->
              <div class="section">
                <div class="section-title">👤 Personal Information</div>
                <div class="field"><span class="label">Full Name:</span> <span class="value">${sanitizedData.fullName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value">${sanitizedData.email}</span></div>
                <div class="field"><span class="label">Phone:</span> <span class="value">${sanitizedData.phone}</span></div>
                <div class="field"><span class="label">Country:</span> <span class="value">${sanitizedData.country}</span></div>
                <div class="field"><span class="label">Age:</span> <span class="value">${sanitizedData.age}</span></div>
              </div>
              
              <!-- Trek Details -->
              <div class="section">
                <div class="section-title">🏔️ Trek Details</div>
                <div class="field"><span class="label">Destination:</span> <span class="value"><strong>${sanitizedData.destination}</strong></span></div>
                <div class="field"><span class="label">Trek Date:</span> <span class="value">${sanitizedData.trekDate}</span></div>
                <div class="field"><span class="label">Group Size:</span> <span class="value">${sanitizedData.groupSize} person(s)</span></div>
                <div class="field"><span class="label">Fitness Level:</span> <span class="value">${sanitizedData.fitnessLevel}</span></div>
              </div>
              
              <!-- Additional Information -->
              <div class="section">
                <div class="section-title">📋 Additional Information</div>
                ${sanitizedData.dietaryRestrictions ? `<div class="field"><span class="label">Dietary Restrictions:</span> <span class="value">${sanitizedData.dietaryRestrictions}</span></div>` : ''}
                ${sanitizedData.specialRequests ? `<div class="field"><span class="label">Special Requests:</span> <span class="value">${sanitizedData.specialRequests}</span></div>` : ''}
              </div>
              
              <!-- Emergency Contact -->
              <div class="section">
                <div class="section-title">🚨 Emergency Contact</div>
                <div class="field"><span class="label">Contact Name:</span> <span class="value">${sanitizedData.emergencyContact}</span></div>
                <div class="field"><span class="label">Contact Phone:</span> <span class="value">${sanitizedData.emergencyPhone}</span></div>
              </div>
              
              <div class="highlight">
                <strong>⚠️ Action Required:</strong> Please respond to this booking request within 24 hours.
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure booking system</p>
                <p>IP Address: ${clientIP}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Trek Booking Request

Personal Information:
- Full Name: ${sanitizedData.fullName}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone}
- Country: ${sanitizedData.country}
- Age: ${sanitizedData.age}

Trek Details:
- Destination: ${sanitizedData.destination}
- Trek Date: ${sanitizedData.trekDate}
- Group Size: ${sanitizedData.groupSize}
- Fitness Level: ${sanitizedData.fitnessLevel}

Additional Information:
${sanitizedData.dietaryRestrictions ? `- Dietary Restrictions: ${sanitizedData.dietaryRestrictions}` : ''}
${sanitizedData.specialRequests ? `- Special Requests: ${sanitizedData.specialRequests}` : ''}

Emergency Contact:
- Name: ${sanitizedData.emergencyContact}
- Phone: ${sanitizedData.emergencyPhone}

Received: ${new Date().toLocaleString()}
IP Address: ${clientIP}
      `
    };
    
    // Send email via SendGrid
    await sgMail.send(emailContent);
    
    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully'
    });
    
  } catch (error: unknown) {
    console.error('Booking API Error:', error);
    
    if (error instanceof Error && error.message === 'Suspicious content detected') {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to submit booking request. Please try again.' },
      { status: 500 }
    );
  }
}
