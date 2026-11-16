import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-[#F8F8F5] border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-200">
                <img
                  src="/src/assets/images/intro_construction_supervision_1794501668713.jpg"
                  alt="Petik engineering and project management team conducting on-site structural inspection"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Operational Focus Badge */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#EDEFF1] shadow-sm">
                <div className="text-xs font-semibold text-[#102B46] uppercase tracking-wider mb-1">
                  Active Regional Focus
                </div>
                <div className="text-sm text-slate-600 flex items-center gap-2">
                  <span>Headquartered in Lekki, Lagos</span>
                  <span className="text-slate-300">·</span>
                  <span>Port Harcourt</span>
                  <span className="text-slate-300">·</span>
                  <span>Osogbo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
                WHO WE ARE
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-6 [text-wrap:balance]">
                Creating Value Across Industries.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                Petik Limited brings together expertise across real estate, construction, project management, renewable energy, and related business sectors. Our approach is built around delivering practical solutions, developing opportunities, and creating lasting value.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Operating across key commercial and emerging markets in Nigeria, our multidisciplinary structure enables clients to navigate property developments, civil construction works, facility operations, and energy transitions with clear oversight and accountable execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#102B46]">Disciplined Execution</h4>
                    <p className="text-xs text-slate-600">Transparent BOQ management and certified material verification.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#102B46]">Cross-Sector Synergies</h4>
                    <p className="text-xs text-slate-600">Unifying property development, engineering, and sustainable energy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
