import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { formatPhoneNumber } from '@/utils/phoneFormatter';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface InquiryData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  // Honeypot field
  website?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const DISPOSABLE_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  '10minutemail.com', 'trashmail.com', 'temp-mail.org', 'yopmail.com',
  'sharklasers.com', 'maildrop.cc', 'getnada.com', 'fakeinbox.com',
  'spamgourmet.com', 'tempinbox.com', 'dispostable.com', 'burnermail.io'
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
  /<embed/i,
  /vbscript:/i
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
    
    const data: InquiryData = await request.json();
    
    // Honeypot check
    if (data.website) {
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true });
    }
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.subject || !data.message) {
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
      email: sanitizeInput(data.email),
      phone: data.phone ? formatPhoneNumber(sanitizeInput(data.phone)) : '',
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
    };
    
    // Determine subject category for better routing
    const subjectCategories = {
      'General Inquiry': '📋',
      'Trek Information': '🏔️',
      'Peak Climbing': '🗻',
      'Cultural Tours': '🏯',
      'Wildlife Safari': '🦁',
      'Cycling Tours': '🚴‍♂️',
      'Booking Assistance': '📅',
      'Group Trek Planning': '👥',
      'Equipment Rental': '🎒',
      'Travel Insurance': '🛡️',
      'Custom Itinerary': '🗺️',
      'Safety & Preparation': '⚠️',
      'Other': '💬'
    };
    
    const subjectIcon = subjectCategories[sanitizedData.subject as keyof typeof subjectCategories] || '💬';
    
    // Create email content
    const emailContent = {
      to: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
      from: {
        email: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
        name: 'Ngimalaya Adventure Inquiry System'
      },
      replyTo: sanitizedData.email,
      subject: `${subjectIcon} Inquiry: ${sanitizedData.subject} - ${sanitizedData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .section-title { color: #4facfe; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #4facfe; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
            .value { color: #333; }
            .subject-badge { display: inline-block; background: #4facfe; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
            .message-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #4facfe; margin: 15px 0; white-space: pre-wrap; line-height: 1.8; }
            .priority { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .action-buttons { margin: 20px 0; }
            .btn { display: inline-block; padding: 12px 24px; background: #4facfe; color: white; text-decoration: none; border-radius: 6px; margin: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${subjectIcon} New Inquiry Received</h1>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Contact Information</div>
                <div class="field"><span class="label">Name:</span> <span class="value">${sanitizedData.fullName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></span></div>
                ${sanitizedData.phone ? `<div class="field"><span class="label">Phone:</span> <span class="value">${sanitizedData.phone}</span></div>` : ''}
              </div>
              
              <div class="section">
                <div class="section-title">📌 Inquiry Details</div>
                <div class="field">
                  <span class="label">Category:</span><br>
                  <span class="subject-badge">${sanitizedData.subject}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">💬 Message</div>
                <div class="message-box">${sanitizedData.message}</div>
              </div>
              
              <div class="priority">
                <strong>⚠️ Action Required:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service.
              </div>
              
              <div class="action-buttons">
                <a href="mailto:${sanitizedData.email}" class="btn">Reply to Customer</a>
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure inquiry system</p>
                <p>IP Address: ${clientIP}</p>
                <p style="margin-top: 10px; font-size: 10px; color: #999;">
                  Security: Email validated, Content sanitized, Rate limited
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Inquiry Received

Contact Information:
- Name: ${sanitizedData.fullName}
- Email: ${sanitizedData.email}
${sanitizedData.phone ? `- Phone: ${sanitizedData.phone}` : ''}

Inquiry Details:
- Category: ${sanitizedData.subject}

Message:
${sanitizedData.message}

Received: ${new Date().toLocaleString()}
IP Address: ${clientIP}

Please respond within 24 hours.
      `
    };
    
    await sgMail.send(emailContent);
    
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully'
    });
    
  } catch (error: unknown) {
    console.error('Inquiry API Error:', error);
    
    if (error instanceof Error && error.message === 'Suspicious content detected') {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
