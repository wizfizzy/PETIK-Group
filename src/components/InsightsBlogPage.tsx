import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, ChevronUp, Clock, Search } from 'lucide-react';
import { INSIGHTS_DATA } from '../data/companyData';

interface InsightsBlogPageProps {
  onEnquire: () => void;
  focusedArticleId?: string | null;
  onSelectFocusedArticle?: (articleId: string | null) => void;
}

export const InsightsBlogPage: React.FC<InsightsBlogPageProps> = ({
  onEnquire,
  focusedArticleId,
  onSelectFocusedArticle,
}) => {
  const [internalExpandedId, setInternalExpandedId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const expandedArticleId =
    focusedArticleId !== undefined ? focusedArticleId : internalExpandedId;

  const setExpandedArticleId = (articleId: string | null) => {
    if (onSelectFocusedArticle) {
      onSelectFocusedArticle(articleId);
    } else {
      setInternalExpandedId(articleId);
    }
  };

  useEffect(() => {
    if (focusedArticleId) {
      setCategoryFilter('All');
      setSearchQuery('');
    }
  }, [focusedArticleId]);

  const categories = [
    'All',
    'Construction Standards',
    'Engineering Best Practices',
    'Urban Infrastructure',
  ];

  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory =
      categoryFilter === 'All' || article.category === categoryFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      query.length === 0 ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const featuredArticle =
    (expandedArticleId
      ? filteredArticles.find((article) => article.id === expandedArticleId)
      : null) ??
    filteredArticles[0] ??
    null;

  const isFeaturedExpanded =
    Boolean(featuredArticle && expandedArticleId === featuredArticle.id);

  const handleOpenInlineArticle = (articleId: string) => {
    setExpandedArticleId(articleId);
    const readerEl = document.getElementById('featured-insight-reader');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#F8F8F5] min-h-screen">
      {/* Blog Page Header Banner */}
      <section className="bg-[#102B46] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
              PETIK INSIGHTS &amp; EDITORIAL BLOG
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Perspectives That Inform Better Decisions.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Practical articles on construction quality control, property development advisory, diaspora building transparency, and resilient Nigerian infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-[#EDEFF1] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EDEFF1] rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  categoryFilter === cat
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights articles..."
              aria-label="Search insights articles"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46]"
            />
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredArticles.length === 0 ? (
            <div className="p-12 rounded-2xl bg-white border border-[#EDEFF1] text-center space-y-4">
              <h2 className="font-display text-xl font-bold text-[#102B46]">
                No matching insights found
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                No articles matched your current category or search terms. Reset filters to view all published editorials.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Lead Article / Inline Article Reader */}
              {featuredArticle && (
                <article
                  id="featured-insight-reader"
                  className="scroll-mt-24 bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    <div className="lg:col-span-6 relative min-h-[280px] bg-slate-100">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <span className="font-semibold text-[#a17d2c] uppercase tracking-wider">
                            {featuredArticle.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{featuredArticle.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{featuredArticle.readTime}</span>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] leading-tight mb-4 [text-wrap:balance]">
                          {featuredArticle.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                          {featuredArticle.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedArticleId(
                              isFeaturedExpanded ? null : featuredArticle.id
                            )
                          }
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-colors"
                        >
                          <span>
                            {isFeaturedExpanded ? 'Collapse Article' : 'Read Full Article'}
                          </span>
                          {isFeaturedExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-[#a17d2c]" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
                          )}
                        </button>

                        <span className="text-xs text-slate-400 font-medium">
                          {isFeaturedExpanded ? 'Full Editorial View' : 'Featured Editorial'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Inline Article Body (No Popup) */}
                  {isFeaturedExpanded && (
                    <div className="border-t border-[#EDEFF1] px-8 sm:px-10 py-8 sm:py-10 bg-white space-y-6">
                      <div className="max-w-4xl space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                        {featuredArticle.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="max-w-4xl p-6 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B46] mb-3">
                          Key Engineering &amp; Management Takeaways
                        </h3>
                        <ul className="space-y-2.5">
                          {featuredArticle.keyTakeaways.map((takeaway, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 max-w-4xl">
                        <button
                          type="button"
                          onClick={onEnquire}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-colors"
                        >
                          <span>Consult Our Team</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setExpandedArticleId(null)}
                          className="text-xs font-semibold text-slate-500 hover:text-[#102B46] transition-colors"
                        >
                          Show Summary Only
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              )}

              {/* All Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    id={`insight-article-${article.id}`}
                    className={`group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                      expandedArticleId === article.id
                        ? 'border-[#a17d2c] ring-1 ring-[#a17d2c]/30'
                        : 'border-[#EDEFF1]'
                    }`}
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2.5 py-1 rounded bg-[#102B46]/85 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-wider text-white">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
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

                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleOpenInlineArticle(article.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#102B46] group-hover:text-[#a17d2c] transition-colors"
                      >
                        <span>
                          {expandedArticleId === article.id ? 'Reading Above' : 'Read Article'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c] transition-transform group-hover:translate-x-1" />
                      </button>

                      <span className="text-[11px] text-slate-400">Petik Insights</span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
