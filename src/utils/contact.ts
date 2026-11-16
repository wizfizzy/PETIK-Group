export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  subject?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid corporate or personal email address';
  }

  if (data.phone && data.phone.trim().length > 0) {
    const cleanedPhone = data.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      errors.phone = 'Please provide a valid phone number format';
    }
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Please select a primary sector of enquiry';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide project details (minimum 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateEnquiryReference(prefix = 'PTK'): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${dateStr}-${randomSuffix}`;
}
