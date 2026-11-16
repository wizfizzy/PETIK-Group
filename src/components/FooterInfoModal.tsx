import React, { useEffect, useState } from 'react';
import { X, HelpCircle, ShieldCheck, FileText, ChevronDown, ArrowRight } from 'lucide-react';

export type FooterInfoTab = 'faq' | 'privacy' | 'terms';

interface FooterInfoModalProps {
  activeTab: FooterInfoTab | null;
  onSelectTab: (tab: FooterInfoTab) => void;
  onClose: () => void;
  onEnquire: (subject?: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What core sectors does Petik Limited operate across?',
    answer:
      'Petik Limited operates across real estate development and advisory, turnkey civil construction and project management, facility and property management, renewable solar energy engineering, oil and gas downstream logistics, and serviced shortlet accommodation including Amarisa Court.',
  },
  {
    question: 'Where are Petik Limited’s offices and active operations located?',
    answer:
      'Our corporate headquarters is situated at the 2nd Floor, Lagos State Court of Arbitration, 1A Remi Olowude Street, Lekki Phase I, Lagos, with regional project coordination across Port Harcourt (Rivers State) and Osogbo (Osun State).',
  },
  {
    question: 'How does Petik ensure quality control and transparency on construction projects?',
    answer:
      'Projects are governed by detailed Bills of Quantities (BOQ), certified material testing before placement, stage-by-stage structural inspections, and milestone-based progress reporting for both local and diaspora clients.',
  },
  {
    question: 'Can corporate clients or investors book shortlet stays at Amarisa Court?',
    answer:
      'Yes. Amarisa Court provides serviced suites with round-the-clock power backup, dedicated security, and modern furnishings tailored for corporate executives, visiting teams, and family stays. Availability enquiries can be submitted directly through our consultation desk.',
  },
  {
    question: 'How do I initiate a project feasibility review or service consultation?',
    answer:
      'Select your sector of interest in the Contact Us consultation form or email info@petiklimited.com with your site location, approximate scope, and preferred timeline. All preliminary project submissions are treated confidentially.',
  },
];

export const FooterInfoModal: React.FC<FooterInfoModalProps> = ({
  activeTab,
  onSelectTab,
  onClose,
  onEnquire,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeTab) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab, onClose]);

  if (!activeTab) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="footer-info-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Tab Switcher */}
        <div className="bg-[#102B46] text-white px-6 sm:px-8 pt-6 pb-5 shrink-0">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-1">
                CORPORATE INFORMATION &amp; GOVERNANCE
              </span>
              <h2 id="footer-info-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeTab === 'faq' && 'Frequently Asked Questions'}
                {activeTab === 'privacy' && 'Privacy Policy'}
                {activeTab === 'terms' && 'Terms of Service'}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Information dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectTab('faq')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'faq'
                  ? 'bg-[#a17d2c] text-white shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('privacy')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-[#a17d2c] text-white shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('terms')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'bg-[#a17d2c] text-white shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#F8F8F5] space-y-4">
          {activeTab === 'faq' && (
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={item.question}
                    className="rounded-xl bg-white border border-[#EDEFF1] overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-display text-sm sm:text-base font-bold text-[#102B46]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#a17d2c] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EDEFF1] shadow-sm text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  1. Information Collected Through Enquiries
                </h3>
                <p>
                  When prospective clients, investors, or shortlet guests submit a project consultation request, we collect only the contact details (name, email address, optional phone number) and project scope information voluntarily provided for responding to the enquiry.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  2. Purpose &amp; Confidentiality
                </h3>
                <p>
                  Submitted details are used solely to evaluate project feasibility, coordinate engineering or real estate advisory discussions, or respond to Amarisa Court accommodation enquiries. Petik Limited does not sell or distribute client contact details to third-party marketing entities.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  3. Data Retention &amp; Contact Rights
                </h3>
                <p>
                  Enquiry records are retained only as long as necessary for active client correspondence or statutory compliance in Nigeria. To request updates or deletion of submitted contact information, please reach our corporate desk at{' '}
                  <a
                    href="mailto:info@petiklimited.com"
                    className="text-[#102B46] font-semibold underline decoration-[#a17d2c]/60 hover:text-[#a17d2c]"
                  >
                    info@petiklimited.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EDEFF1] shadow-sm text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  1. Informational Purpose
                </h3>
                <p>
                  Content presented across this corporate homepage concept—including service capability descriptions, regional focus areas, and technical insights—is provided for general corporate overview and preliminary consultation purposes.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  2. Formal Project &amp; Commercial Agreements
                </h3>
                <p>
                  All construction deliverables, real estate advisory mandates, renewable energy installations, downstream logistics contracts, and Amarisa Court bookings are governed strictly by formally executed written agreements, approved Bills of Quantities (BOQ), and applicable Nigerian regulatory terms.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-1.5">
                  3. Intellectual Property
                </h3>
                <p>
                  Corporate names, service descriptions, editorial insights, and visual materials remain the property of their respective owners and may not be reproduced commercially without prior written consent.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:px-8 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close Window
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquire();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-colors"
          >
            <span>Contact Corporate Desk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
          </button>
        </div>
      </div>
    </div>
  );
};
