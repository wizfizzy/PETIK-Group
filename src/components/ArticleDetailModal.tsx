import React, { useEffect } from 'react';
import { X, Calendar, Clock, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';
import { InsightArticle } from '../data/companyData';

interface ArticleDetailModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onEnquire: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onEnquire,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Article Header Image */}
        <div className="relative h-56 sm:h-64 bg-slate-900 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-[#102B46]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 text-xs text-[#a17d2c] font-semibold uppercase tracking-wider mb-2">
              <span>{article.category}</span>
              <span className="text-white/40" aria-hidden="true">·</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="text-white/40" aria-hidden="true">·</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 border-l-2 border-[#a17d2c] text-sm text-slate-700 italic leading-relaxed">
            "{article.excerpt}"
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {(article.content ?? []).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {(article.keyTakeaways?.length ?? 0) > 0 && (
            <div className="p-5 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B46] mb-3">
                Key Engineering & Management Takeaways
              </h4>
              <ul className="space-y-2">
                {(article.keyTakeaways ?? []).map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-white transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-colors"
            >
              <span>Consult Our Team</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
