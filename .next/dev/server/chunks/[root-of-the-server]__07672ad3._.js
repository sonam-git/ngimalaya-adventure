module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/utils/phoneFormatter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Phone number formatting utilities
 */ /**
 * Format phone number to XXX-XXX-XXXX format
 * Handles various input formats and international numbers
 * 
 * @param phone - Raw phone number input (can include spaces, dashes, parentheses, +)
 * @returns Formatted phone number in XXX-XXX-XXXX format, or original if can't format
 */ __turbopack_context__.s([
    "formatPhoneNumber",
    ()=>formatPhoneNumber,
    "formatPhoneWithCountryCode",
    ()=>formatPhoneWithCountryCode,
    "isValidPhoneNumber",
    ()=>isValidPhoneNumber
]);
function formatPhoneNumber(phone) {
    if (!phone) return '';
    // Remove all non-digit characters except leading +
    const cleaned = phone.replace(/[^\d+]/g, '');
    // Remove leading + or country codes (1, +1, etc.)
    let digits = cleaned.replace(/^\+?1?/, '');
    // If we have exactly 10 digits, format as XXX-XXX-XXXX
    if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    // If we have 11 digits and starts with 1, remove the 1 and format
    if (digits.length === 11 && digits.startsWith('1')) {
        digits = digits.slice(1);
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    // For international numbers or other formats, return original with some cleanup
    if (digits.length > 10) {
        // Keep the original format for international numbers
        return phone.trim();
    }
    // For shorter numbers, just clean them up
    return digits || phone;
}
function isValidPhoneNumber(phone) {
    if (!phone) return false;
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
}
function formatPhoneWithCountryCode(phone, countryCode = '+1') {
    const formatted = formatPhoneNumber(phone);
    if (formatted.match(/^\d{3}-\d{3}-\d{4}$/)) {
        const parts = formatted.split('-');
        return `${countryCode} (${parts[0]}) ${parts[1]}-${parts[2]}`;
    }
    return phone;
}
}),
"[project]/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sendgrid/mail/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$phoneFormatter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/phoneFormatter.ts [app-route] (ecmascript)");
;
;
;
// Initialize SendGrid
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].setApiKey(process.env.SENDGRID_API_KEY || '');
// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Disposable email domains to block
const DISPOSABLE_DOMAINS = [
    'tempmail.com',
    'throwaway.email',
    'guerrillamail.com',
    'mailinator.com',
    '10minutemail.com',
    'trashmail.com',
    'temp-mail.org',
    'yopmail.com',
    'sharklasers.com',
    'maildrop.cc',
    'getnada.com',
    'fakeinbox.com',
    'spamgourmet.com',
    'tempinbox.com'
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
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;
function validateEmail(email) {
    if (!EMAIL_REGEX.test(email)) return false;
    const domain = email.split('@')[1]?.toLowerCase();
    if (DISPOSABLE_DOMAINS.includes(domain)) return false;
    return true;
}
function sanitizeInput(input) {
    const sanitized = input.replace(/<[^>]*>/g, '');
    for (const pattern of SUSPICIOUS_PATTERNS){
        if (pattern.test(sanitized)) {
            throw new Error('Suspicious content detected');
        }
    }
    return sanitized.trim();
}
function checkRateLimit(identifier) {
    const now = Date.now();
    const record = rateLimitMap.get(identifier);
    if (!record) {
        rateLimitMap.set(identifier, {
            count: 1,
            timestamp: now
        });
        return true;
    }
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(identifier, {
            count: 1,
            timestamp: now
        });
        return true;
    }
    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }
    record.count++;
    return true;
}
async function POST(request) {
    try {
        const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        if (!checkRateLimit(clientIP)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Too many requests. Please try again later.'
            }, {
                status: 429
            });
        }
        const data = await request.json();
        // Honeypot check
        if (data.website) {
            console.log('Bot detected via honeypot');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true
            });
        }
        // Validate required fields
        if (!data.name || !data.email || !data.subject || !data.message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        // Validate email
        if (!validateEmail(data.email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid or disposable email address'
            }, {
                status: 400
            });
        }
        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(data.name),
            email: sanitizeInput(data.email),
            phone: data.phone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$phoneFormatter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPhoneNumber"])(sanitizeInput(data.phone)) : '',
            subject: sanitizeInput(data.subject),
            message: sanitizeInput(data.message)
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
              <p>Received: ${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Kathmandu'
            })} NPT</p>
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].send(emailContent);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Message sent successfully'
        });
    } catch (error) {
        console.error('Contact API Error:', error);
        if (error instanceof Error && error.message === 'Suspicious content detected') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid input detected'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to send message. Please try again.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07672ad3._.js.map