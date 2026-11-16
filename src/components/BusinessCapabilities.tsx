import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';

interface BusinessCapabilitiesProps {
  onOpenService: (service: ServiceItem) => void;
}

export const BusinessCapabilities: React.FC<BusinessCapabilitiesProps> = ({
  onOpenService,
}) => {

  return (
    <section id="services" className="py-24 sm:py-28 bg-[#EDEFF1]/40 border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Expertise That Moves Projects Forward.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering disciplined, value-focused solutions across real estate, infrastructure engineering, clean energy, and corporate services in Nigeria.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with measured overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-mono font-semibold tracking-wider text-white/90">
                      {service.number}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#F8F8F5]/80">
                      {service.sector}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#102B46] mb-3 group-hover:text-[#a17d2c] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B46] group-hover:text-[#a17d2c] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <span className="text-[11px] text-slate-400 font-medium">
                  Verified Division
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
