/**
 * Phone number formatting utilities
 */

/**
 * Format phone number to XXX-XXX-XXXX format
 * Handles various input formats and international numbers
 * 
 * @param phone - Raw phone number input (can include spaces, dashes, parentheses, +)
 * @returns Formatted phone number in XXX-XXX-XXXX format, or original if can't format
 */
export function formatPhoneNumber(phone: string): string {
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

/**
 * Validate if phone number has enough digits
 * @param phone - Phone number to validate
 * @returns true if valid (has at least 10 digits)
 */
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

/**
 * Format phone number for display with country code
 * @param phone - Raw phone number
 * @param countryCode - Country code (default: +1 for US/Canada)
 * @returns Formatted as +1 (XXX) XXX-XXXX
 */
export function formatPhoneWithCountryCode(phone: string, countryCode: string = '+1'): string {
  const formatted = formatPhoneNumber(phone);
  
  if (formatted.match(/^\d{3}-\d{3}-\d{4}$/)) {
    const parts = formatted.split('-');
    return `${countryCode} (${parts[0]}) ${parts[1]}-${parts[2]}`;
  }
  
  return phone;
}
