import React from 'react';
import { ClipboardCheck, Layers } from 'lucide-react';
import introConstructionImg from '../assets/images/intro_construction_supervision_1794501668713.jpg';
import { useScrollReveal } from '../utils/useScrollReveal';
import { getCardRevealDelayMs, getRevealClassName } from '../utils/scrollReveal';

export const CompanyIntro: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const revealClass = getRevealClassName(isVisible);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-20 sm:pt-24 pb-8 sm:pb-10 bg-white border-b border-[#EDEFF1] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Site Supervision Image & Operating Footprint */}
          <div className="lg:col-span-6 space-y-6">
            <div
              data-reveal-card
              className={`group relative rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-md hover:shadow-xl aspect-[4/3] bg-[#102B46] transition-[opacity,transform,box-shadow] duration-700 ease-out ${revealClass}`}
            >
              <img
                src={introConstructionImg}
                alt="Petik engineering and project management team conducting on-site structural inspection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div
              data-reveal-card
              style={{ transitionDelay: `${getCardRevealDelayMs(1)}ms` }}
              className={`transition-[opacity,transform] duration-700 ease-out ${revealClass}`}
            >
              <div className="rounded-xl border border-[#EDEFF1] bg-[#F8F8F5] px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#a17d2c]/40">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#102B46] mb-1">
                  Office &amp; Operating Locations
                </div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-slate-600">
                  <span>Headquartered in Lekki, Lagos</span>
                  <span aria-hidden="true" className="text-[#a17d2c]">·</span>
                  <span>Port Harcourt</span>
                  <span aria-hidden="true" className="text-[#a17d2c]">·</span>
                  <span>Osogbo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Identity & Delivery Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#a17d2c]">
              <span className="w-6 h-[2px] bg-[#a17d2c]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Creating Value Across Industries.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Petik Limited operates across real estate development and advisory, civil construction and project management, facility management, solar energy systems, oil and gas downstream logistics, and Amarisa Court shortlet accommodation.
              </p>
              <p>
                With our head office in Lekki, Lagos and operations in Port Harcourt and Osogbo, we coordinate site planning, building construction, facility upkeep, and backup solar installations under one team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                data-reveal-card
                style={{ transitionDelay: `${getCardRevealDelayMs(1)}ms` }}
                className={`transition-[opacity,transform] duration-700 ease-out ${revealClass}`}
              >
                <div className="group h-full rounded-xl border border-[#EDEFF1] bg-[#F8F8F5] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#a17d2c]/40">
                  <div className="w-9 h-9 rounded-lg bg-[#102B46] text-[#a17d2c] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#a17d2c] group-hover:text-white group-hover:scale-105">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#102B46] mb-1.5 group-hover:text-[#a17d2c] transition-colors">
                    Project Controls &amp; Site Supervision
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Line-item Bill of Quantities (BOQ) tracking and third-party concrete and steel testing.
                  </p>
                </div>
              </div>

              <div
                data-reveal-card
                style={{ transitionDelay: `${getCardRevealDelayMs(2)}ms` }}
                className={`transition-[opacity,transform] duration-700 ease-out ${revealClass}`}
              >
                <div className="group h-full rounded-xl border border-[#EDEFF1] bg-[#F8F8F5] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#a17d2c]/40">
                  <div className="w-9 h-9 rounded-lg bg-[#102B46] text-[#a17d2c] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#a17d2c] group-hover:text-white group-hover:scale-105">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#102B46] mb-1.5 group-hover:text-[#a17d2c] transition-colors">
                    Integrated Project Delivery
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coordinating land due diligence, building works, property maintenance, and solar power in one firm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
