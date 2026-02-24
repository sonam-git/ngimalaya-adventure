import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid (if API key exists)
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Email provider type
type EmailProvider = 'nodemailer' | 'sendgrid';

// Get the email provider from environment variable (default to nodemailer)
const getEmailProvider = (): EmailProvider => {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase();
  if (provider === 'sendgrid') return 'sendgrid';
  return 'nodemailer'; // Default to nodemailer
};

// Email options interface
export interface EmailOptions {
  to: string;
  from: {
    email: string;
    name: string;
  };
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // For Gmail, use App Password
    },
  });
};

// Send email using Nodemailer
const sendWithNodemailer = async (options: EmailOptions): Promise<void> => {
  const transporter = createTransporter();
  
  await transporter.sendMail({
    from: `"${options.from.name}" <${options.from.email}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
  });
};

// Send email using SendGrid
const sendWithSendGrid = async (options: EmailOptions): Promise<void> => {
  await sgMail.send({
    to: options.to,
    from: options.from,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
  });
};

// Main send email function - automatically uses the configured provider
export const sendEmail = async (options: EmailOptions): Promise<void> => {
  const provider = getEmailProvider();
  
  console.log(`Sending email via ${provider}...`);
  
  try {
    if (provider === 'sendgrid') {
      await sendWithSendGrid(options);
    } else {
      await sendWithNodemailer(options);
    }
    console.log(`Email sent successfully via ${provider}`);
  } catch (error) {
    console.error(`Failed to send email via ${provider}:`, error);
    throw error;
  }
};

// Utility function to verify SMTP connection (useful for testing)
export const verifySmtpConnection = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection verification failed:', error);
    return false;
  }
};
