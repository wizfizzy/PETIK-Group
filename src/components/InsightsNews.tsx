import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { INSIGHTS_DATA, InsightArticle } from '../data/companyData';
import { ArticleDetailModal } from './ArticleDetailModal';

interface InsightsNewsProps {
  onEnquire: () => void;
  onOpenBlogPage: () => void;
}

export const InsightsNews: React.FC<InsightsNewsProps> = ({ onEnquire, onOpenBlogPage }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Construction Standards', 'Engineering Best Practices', 'Urban Infrastructure'];

  const filteredArticles = (
    filterCategory === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((a) => a.category === filterCategory)
  ).slice(0, 3);

  return (
    <section id="insights" className="py-24 sm:py-28 bg-[#EDEFF1]/30 border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
              FROM OUR INSIGHTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Perspectives That Inform Better Decisions.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Industry analysis, structural quality control standards, and real estate guidance derived from active project delivery in Nigeria.
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#102B46]/80 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-wider text-white">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with bullet separators (anti-slop rule §1.A) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#a17d2c]" />
                      {article.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#a17d2c]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#102B46] mb-3 group-hover:text-[#a17d2c] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B46] group-hover:text-[#a17d2c] transition-colors"
                >
                  <span>
                    Read Article<span className="sr-only">: {article.title}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c] transition-transform group-hover:translate-x-1" />
                </button>

                <span className="text-[11px] text-slate-400">
                  Petik Insights
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Insights CTA */}
        <div className="flex items-center justify-center">
          <a
            href="/insights"
            onClick={(e) => {
              e.preventDefault();
              onOpenBlogPage();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#102B46] bg-white border border-slate-300 hover:border-[#102B46] hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span>Browse All Technical Insights &amp; Archives</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
          </a>
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onEnquire={onEnquire}
      />
    </section>
  );
};
