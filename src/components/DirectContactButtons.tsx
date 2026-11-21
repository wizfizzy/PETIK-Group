import React, { useState } from 'react';
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
  const [notice, setNotice] = useState<string | null>(null);
  const telHref = buildTelHref(TRUST_SIGNALS.phoneNumber);
  const waHref = buildWhatsAppHref(TRUST_SIGNALS.whatsappNumber);

  const buttonSizeClass = compact
    ? 'px-3 py-2 text-xs'
    : 'px-4 py-2.5 text-xs';

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2.5">
        {telHref ? (
          <a
            href={telHref}
            className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-[#a17d2c] hover:bg-[#8f6e24] text-white transition-colors shadow-sm ${buttonSizeClass}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Call Office</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() =>
              setNotice('Add phone number in TRUST_SIGNALS to activate Click-to-Call.')
            }
            aria-label="Call Office (phone number placeholder pending)"
            className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-colors ${buttonSizeClass}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#a17d2c] shrink-0" aria-hidden="true" />
            <span>Call Office</span>
          </button>
        )}

        {waHref ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors shadow-sm ${buttonSizeClass}`}
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() =>
              setNotice('Add WhatsApp number in TRUST_SIGNALS to activate WhatsApp link.')
            }
            aria-label="WhatsApp (WhatsApp number placeholder pending)"
            className={`inline-flex items-center gap-2 rounded-lg font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-colors ${buttonSizeClass}`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </button>
        )}
      </div>

      {notice && (
        <p className="text-[11px] text-amber-200/90 leading-snug" role="status">
          {notice}
        </p>
      )}
    </div>
  );
};
