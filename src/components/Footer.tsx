import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FooterInfoTab } from './FooterInfoModal';
import { ChatWidget } from './ChatWidget';
import { DirectContactButtons } from './DirectContactButtons';
import { INSIGHTS_DATA } from '../data/companyData';
import { TRUST_SIGNALS, buildTelHref } from '../utils/trustSignals';

interface FooterProps {
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenProjectsPage: () => void;
  onOpenInfoTab: (tab: FooterInfoTab) => void;
  onOpenInsightArticle: (articleId: string) => void;
  onOpenEnquiry: (prefilledSector?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHomeSection,
  onOpenProjectsPage,
  onOpenInfoTab,
  onOpenInsightArticle,
  onOpenEnquiry,
}) => {
  const telHref = buildTelHref(TRUST_SIGNALS.phoneNumber);

  return (
    <footer className="bg-[#102B46] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-6 lg:mb-4">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#a17d2c] flex items-center justify-center font-bold text-white text-base">
                P
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                PETIK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              An indigenous Nigerian company operating across real estate development, civil construction and project management, facility management, solar energy, downstream fuel logistics, and Amarisa Court shortlets.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">CAC RC Number:</span> {TRUST_SIGNALS.cacRcNumber}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a17d2c]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {[
                { label: 'Home', sectionId: 'hero', href: '/' },
                { label: 'About', sectionId: 'about', href: '/#about' },
                { label: 'Contact', sectionId: 'contact', href: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateHomeSection(item.sectionId);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenProjectsPage();
                  }}
                  className="hover:text-white transition-colors inline-block"
                >
                  Projects
                </a>
              </li>
              {(
                [
                  { label: 'FAQ', tab: 'faq' },
                  { label: 'Privacy Policy', tab: 'privacy' },
                  { label: 'Terms of Service', tab: 'terms' },
                ] as { label: string; tab: FooterInfoTab }[]
              ).map((item) => (
                <li key={item.tab}>
                  <button
                    type="button"
                    onClick={() => onOpenInfoTab(item.tab)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights Blog Headings */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a17d2c]">
              Insights
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {INSIGHTS_DATA.map((article) => (
                <li key={article.id}>
                  <a
                    href="/insights"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInsightArticle(article.id);
                    }}
                    className="hover:text-white transition-colors text-left leading-snug inline-block"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a17d2c]">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2nd Floor, Lagos State Court of Arbitration, 1A Remi Olowude Street, Lekki Phase I, Lagos, Nigeria
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" />
                <a
                  href="mailto:info@petiklimited.com"
                  className="hover:text-white transition-colors"
                >
                  info@petiklimited.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" />
                {telHref ? (
                  <a href={telHref} className="hover:text-white transition-colors">
                    {TRUST_SIGNALS.phoneNumber}
                  </a>
                ) : (
                  <span className="text-xs text-slate-400">{TRUST_SIGNALS.phoneNumber}</span>
                )}
              </div>

              <div className="pt-1">
                <DirectContactButtons compact />
              </div>

              <div className="pt-1 text-xs text-slate-400">
                <span>Regional Footprint: Port Harcourt · Osogbo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Widget Above Divider */}
        <div className="flex justify-end pb-6">
          <ChatWidget onOpenEnquiry={onOpenEnquiry} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-xs text-slate-400">
          © {new Date().getFullYear()} Petik Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
