import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroCorporateImg from '../assets/images/hero_corporate_architecture_1794501667645.jpg';

interface HeroProps {
  onExploreCapabilities: () => void;
  onStartConversation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCapabilities, onStartConversation }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#102B46]">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCorporateImg}
          alt="Modern corporate real estate development and architectural landscape in Nigeria"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Controlled gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46]/95 via-[#102B46]/75 to-[#102B46]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-transparent to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow / Region Indicator */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-300">
            <span className="w-6 h-[2px] bg-[#a17d2c]" />
            <span>Petik Limited · Corporate Overview</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Building Value. <br />
            <span className="text-[#a17d2c]">Creating Possibilities.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal mb-10 max-w-2xl">
            Petik Limited handles land and property development, civil construction and project supervision, building facility management, commercial solar installations, downstream petroleum logistics, and Amarisa Court shortlet apartments in Nigeria.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onExploreCapabilities}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStartConversation}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Start a Conversation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Credibility & Navigation Bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#102B46]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Sectors:</span>
              <span>Real Estate Development</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Civil Construction & PM</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Renewable Energy</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Downstream Logistics</span>
            </div>

            {/* Scroll Indicator */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to company introduction"
            >
              <span>Scroll to discover</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
