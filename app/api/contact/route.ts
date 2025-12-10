import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { formatPhoneNumber } from '@/utils/phoneFormatter';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  // Honeypot field
  website?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Disposable email domains to block
const DISPOSABLE_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  '10minutemail.com', 'trashmail.com', 'temp-mail.org', 'yopmail.com',
  'sharklasers.com', 'maildrop.cc', 'getnada.com', 'fakeinbox.com',
  'spamgourmet.com', 'tempinbox.com'
];

// Suspicious patterns for XSS, SQL injection, etc.
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

// Rate limiting map
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
    
    const data: ContactData = await request.json();
    
    // Honeypot check
    if (data.website) {
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true });
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
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
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? formatPhoneNumber(sanitizeInput(data.phone)) : '',
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
    };
    
    // Create email content
    const emailContent = {
      to: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
      from: {
        email: process.env.NGIMALAYA_EMAIL || 'ngiman81@gmail.com',
        name: 'Ngimalaya Adventure Contact Form'
      },
      replyTo: sanitizedData.email,
      subject: `Contact Form: ${sanitizedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-top: 5px; }
            .message-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                </div>
                ${sanitizedData.phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${sanitizedData.phone}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value"><strong>${sanitizedData.subject}</strong></div>
                </div>
              </div>
              
              <div class="message-box">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${sanitizedData.message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure contact form</p>
                <p>IP Address: ${clientIP}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${sanitizedData.name}
Email: ${sanitizedData.email}
${sanitizedData.phone ? `Phone: ${sanitizedData.phone}` : ''}
Subject: ${sanitizedData.subject}

Message:
${sanitizedData.message}

Received: ${new Date().toLocaleString()}
IP Address: ${clientIP}
      `
    };
    
    await sgMail.send(emailContent);
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });
    
  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    
    if (error instanceof Error && error.message === 'Suspicious content detected') {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
