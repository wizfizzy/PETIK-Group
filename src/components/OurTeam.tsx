import React from 'react';
import { User } from 'lucide-react';
import { TRUST_SIGNALS } from '../utils/trustSignals';

export const OurTeam: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-28 bg-white border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
            OUR TEAM
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Leadership &amp; Management.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Petik Limited leadership profiles. Unsupplied titles, short biographies, and team portraits are marked with [PLACEHOLDER].
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_SIGNALS.leadership.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl overflow-hidden border border-[#EDEFF1] bg-[#F8F8F5] shadow-sm flex flex-col"
            >
              {/* Photo Slot */}
              <div className="aspect-[4/3] bg-[#102B46]/5 border-b border-[#EDEFF1] flex flex-col items-center justify-center p-6 text-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.photoAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <div className="w-16 h-16 rounded-full bg-white border border-[#EDEFF1] flex items-center justify-center">
                      <User className="w-7 h-7 text-[#102B46]/50" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      [PLACEHOLDER: Insert Portrait Photo]
                    </span>
                  </div>
                )}
              </div>

              {/* Member Details */}
              <div className="p-6 sm:p-7 space-y-2 flex-1 flex flex-col">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#102B46]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#a17d2c]">
                  {member.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Optional Memberships / Endorsements — rendered ONLY when real items exist */}
        {TRUST_SIGNALS.memberships.length > 0 && (
          <div className="mt-14 pt-10 border-t border-[#EDEFF1]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] mb-4">
              Professional Memberships &amp; Accreditations
            </h3>
            <ul className="flex flex-wrap gap-3">
              {TRUST_SIGNALS.memberships.map((item) => (
                <li
                  key={item}
                  className="px-3.5 py-2 rounded-lg bg-[#F8F8F5] border border-[#EDEFF1] text-xs font-medium text-[#102B46]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {TRUST_SIGNALS.testimonialsOrClients.length > 0 && (
          <div className="mt-12 pt-10 border-t border-[#EDEFF1]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] mb-4">
              Permitted Client References
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRUST_SIGNALS.testimonialsOrClients.map((entry, idx) => (
                <blockquote
                  key={idx}
                  className="p-6 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1] text-sm text-slate-700"
                >
                  {entry.quote && <p className="mb-2">&ldquo;{entry.quote}&rdquo;</p>}
                  <footer className="text-xs font-semibold text-[#102B46]">
                    {entry.author ? `${entry.author} · ${entry.organization}` : entry.organization}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
