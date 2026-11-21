import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import {
  TRUST_SIGNALS,
  buildTelHref,
  buildWhatsAppHref,
} from '../utils/trustSignals';

interface DirectContactButtonsProps {
  compact?: boolean;
}

export const DirectContactButtons: React.FC<DirectContactButtonsProps> = ({
  compact = false,
}) => {
  const telHref = buildTelHref(TRUST_SIGNALS.phoneNumber);
  const waHref = buildWhatsAppHref(TRUST_SIGNALS.whatsappNumber);

  if (!telHref && !waHref) {
    return null;
  }

  const buttonSizeClass = compact
    ? 'px-3 py-2 text-xs'
    : 'px-4 py-2.5 text-xs';

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {telHref && (
        <a
          href={telHref}
          className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-[#a17d2c] hover:bg-[#8f6e24] text-white transition-colors shadow-sm ${buttonSizeClass}`}
        >
          <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Call Office</span>
        </a>
      )}

      {waHref && (
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors shadow-sm ${buttonSizeClass}`}
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      )}
    </div>
  );
};
