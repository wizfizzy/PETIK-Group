import React, { useState } from 'react';
import { Play } from 'lucide-react';

const CORPORATE_VIDEO_THUMBNAIL =
  'https://petiklimited.com/wp-content/uploads/2026/07/Petik33.jpeg';
const CORPORATE_VIDEO_EMBED_URL =
  'https://www.youtube.com/embed/wplZ503yHUA?si=CYXvrI3TJX1eoE03&autoplay=1&rel=0';

export const OurTeam: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="team" className="pt-8 sm:pt-10 pb-20 sm:pb-24 bg-white border-b border-[#EDEFF1] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#102B46] tracking-tight leading-snug uppercase [text-wrap:balance]">
              Bring us your challenges, we&rsquo;ll reimagine your future.
            </h2>

            <div className="w-14 h-0.5 bg-[#a17d2c] my-5" aria-hidden="true" />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                PETIK is creating a new model for a new age, we&rsquo;re an indigenous firm. We combine creative capabilities with deep industry knowledge and experience across four major industries: Construction, Real Estate, Renewable Energy, and Oil &amp; Gas.
              </p>
              <p>
                That means clients can bring us their biggest challenges, knowing we have what it takes to exceed their expectations.
              </p>
              <p>
                We&rsquo;re transforming today&rsquo;s customer journey across key industries. Built upon the strengths and resources of the group, PETIK was born out of years of investment in emerging technologies, creative and affordable customer solutions. We power our engagement process with clients at every point of the journey, in a way that no other firm can.
              </p>
            </div>
          </div>

          {/* Right Column: Corporate Video / Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-md bg-[#102B46]">
              {isPlayingVideo ? (
                <iframe
                  src={CORPORATE_VIDEO_EMBED_URL}
                  title="Petik Limited Corporate Overview"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label="Play Petik Limited corporate video"
                  className="group relative block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a17d2c]"
                >
                  <img
                    src={CORPORATE_VIDEO_THUMBNAIL}
                    alt="Petik Limited structural steel fabrication and welding operations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/85 bg-black/25 backdrop-blur-xs group-hover:bg-[#a17d2c]/90 group-hover:border-[#a17d2c] flex items-center justify-center text-white transition-all duration-200 shadow-lg"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5 transition-transform group-hover:scale-110" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
