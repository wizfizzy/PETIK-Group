export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string | null;
  photoAlt: string;
}

export interface ClientEndorsement {
  organization: string;
  quote?: string;
  author?: string;
}

export interface TrustSignalsConfig {
  cacRcNumber: string;
  phoneNumber: string;
  whatsappNumber: string;
  memberships: string[];
  sameAs: string[];
  leadership: TeamMember[];
  testimonialsOrClients: ClientEndorsement[];
}

export const TRUST_SIGNALS: TrustSignalsConfig = {
  cacRcNumber: '[PLACEHOLDER: Insert CAC RC Number]',
  phoneNumber: '[PLACEHOLDER: Insert Phone Number]',
  whatsappNumber: '[PLACEHOLDER: Insert WhatsApp Number]',
  memberships: [],
  sameAs: ['[PLACEHOLDER: Insert Official LinkedIn or Social URL]'],
  leadership: [
    {
      id: 'datimi-thomas',
      name: 'Datimi Thomas',
      title: '[PLACEHOLDER: Insert Title]',
      bio: '[PLACEHOLDER: Insert Short Bio]',
      photo: null,
      photoAlt: 'Portrait placeholder for Datimi Thomas',
    },
    {
      id: 'leader-2',
      name: '[PLACEHOLDER: Insert Leader Name]',
      title: '[PLACEHOLDER: Insert Title]',
      bio: '[PLACEHOLDER: Insert Short Bio]',
      photo: null,
      photoAlt: 'Portrait placeholder for company leadership member',
    },
    {
      id: 'leader-3',
      name: '[PLACEHOLDER: Insert Leader Name]',
      title: '[PLACEHOLDER: Insert Title]',
      bio: '[PLACEHOLDER: Insert Short Bio]',
      photo: null,
      photoAlt: 'Portrait placeholder for company leadership member',
    },
  ],
  testimonialsOrClients: [],
};

export function isPlaceholderValue(value: string | null | undefined): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return trimmed.length === 0 || trimmed.includes('[PLACEHOLDER');
}

export function normalizeDigitsForHref(rawPhone: string): string {
  const cleaned = rawPhone.replace(/[^\d+]/g, '');
  if (!cleaned) return '';
  return cleaned;
}

export function buildTelHref(rawPhone: string | null | undefined): string | null {
  if (isPlaceholderValue(rawPhone)) return null;
  const normalized = normalizeDigitsForHref(rawPhone!);
  const digitCount = normalized.replace(/\D/g, '').length;
  if (digitCount < 7) return null;
  return `tel:${normalized}`;
}

export function buildWhatsAppHref(rawPhone: string | null | undefined): string | null {
  if (isPlaceholderValue(rawPhone)) return null;
  const digitsOnly = rawPhone!.replace(/\D/g, '');
  if (digitsOnly.length < 7) return null;
  return `https://wa.me/${digitsOnly}`;
}
