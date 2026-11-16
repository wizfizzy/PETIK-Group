import React from 'react';
import { Layers, Compass, ShieldCheck, TrendingUp } from 'lucide-react';
import { WHY_PETIK_PRINCIPLES } from '../data/companyData';

export const WhyPetik: React.FC = () => {
  const icons = [
    <Layers key="1" className="w-6 h-6 text-[#a17d2c]" />,
    <Compass key="2" className="w-6 h-6 text-[#a17d2c]" />,
    <ShieldCheck key="3" className="w-6 h-6 text-[#a17d2c]" />,
    <TrendingUp key="4" className="w-6 h-6 text-[#a17d2c]" />,
  ];

  return (
    <section id="approach" className="py-24 sm:py-28 bg-[#102B46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
            THE PETIK APPROACH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Built Around Value, Driven by Possibility.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Four guiding operating principles define how Petik Limited structures partnerships, manages complex civil works, and safeguards long-term asset performance.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_PETIK_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                    {principle.number}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
