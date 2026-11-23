import React, { useState } from 'react';
import { ArrowRight, Wifi, Zap, Shield, Sparkles, Coffee, Tv } from 'lucide-react';
import amarisaCourtImg from '../assets/images/amarisa_court_shortlet_1794501668574.jpg';
import { useScrollReveal } from '../utils/useScrollReveal';
import { getRevealClassName } from '../utils/scrollReveal';

interface FeaturedPropertyProps {
  onBookShortlet: () => void;
}

export const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({ onBookShortlet }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const { ref: cardRef, isVisible } = useScrollReveal<HTMLDivElement>();
  const revealClass = getRevealClassName(isVisible);

  const amenities = [
    { icon: <Zap className="w-4 h-4 text-[#a17d2c]" />, label: 'Hybrid Solar & Generator Backup Power' },
    { icon: <Wifi className="w-4 h-4 text-[#a17d2c]" />, label: 'Dedicated Fibre Internet' },
    { icon: <Shield className="w-4 h-4 text-[#a17d2c]" />, label: 'On-Site Security & Access Control' },
    { icon: <Coffee className="w-4 h-4 text-[#a17d2c]" />, label: 'Fully Equipped Modern Kitchen' },
    { icon: <Tv className="w-4 h-4 text-[#a17d2c]" />, label: 'Smart TV & Streaming Ready' },
    { icon: <Sparkles className="w-4 h-4 text-[#a17d2c]" />, label: 'Housekeeping on Request' },
  ];

  return (
    <section id="properties" className="py-24 sm:py-28 bg-[#F8F8F5] border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          data-reveal-card
          className={`transition-[opacity,transform] duration-700 ease-out ${revealClass}`}
        >
          <div className="group bg-[#102B46] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual Column */}
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[500px] overflow-hidden">
                <img
                  src={amarisaCourtImg}
                  alt="Furnished living area and open kitchenette representing Amarisa Court shortlet apartments in Osogbo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#102B46]/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white border border-white/10">
                  Featured Property · Shortlet Living
                </span>
              </div>
              <div className="hidden lg:block absolute bottom-6 left-6">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] font-medium text-white border border-white/15">
                  Illustrative image
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
                  AMARISA COURT
                </span>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
                  Experience a Better Standard of Stay.
                </h2>

                <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal">
                  Amarisa Court provides furnished shortlet apartments in Osogbo for business travellers, visiting teams, and families.
                </p>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-200 transition-transform duration-200 hover:translate-x-1"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowDetailsModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-colors shadow-sm"
                >
                  <span>Explore Amarisa Court</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onBookShortlet}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Enquire Availability</span>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Amarisa Court Detail Modal */}
      {showDetailsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-[#a17d2c] uppercase tracking-wider">
                  Petik Hospitality Portfolio
                </span>
                <h3 className="font-display text-2xl font-bold text-[#102B46]">
                  Amarisa Court Serviced Suites
                </h3>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-slate-400 hover:text-slate-800 p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Amarisa Court is Petik Limited’s serviced shortlet accommodation in Osogbo. Units include hybrid solar and generator backup power, fibre internet, fitted kitchens, and on-site security.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Property Features & Guest Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs text-slate-700 font-medium">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowDetailsModal(false);
                  onBookShortlet();
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59]"
              >
                Request Booking Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
