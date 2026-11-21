import React, { useState } from 'react';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/companyData';

interface FeaturedProjectsProps {
  onDiscussProject: () => void;
  onOpenProjectsPage?: () => void;
  onReadCaseStudy?: (projectId: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onDiscussProject,
  onReadCaseStudy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Real Estate', 'Construction', 'Energy', 'Shortlet'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.sector === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-28 bg-[#F8F8F5] border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
              OUR WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Turning Vision Into Tangible Results.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Showcasing verified developments and engineering advisory engagements across Nigeria, governed by strict quality controls and transparent milestones.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EDEFF1] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 md:grid md:grid-cols-12 md:items-center' : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden bg-slate-100 ${
                  idx === 0 ? 'md:col-span-7 h-72 md:h-full min-h-[320px]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#102B46]/90 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-wider text-white">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Details Container */}
              <div className={`p-6 sm:p-8 flex flex-col justify-between ${idx === 0 ? 'md:col-span-5' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#a17d2c] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#102B46] mb-3 group-hover:text-[#a17d2c] transition-colors leading-snug">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.scope}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {[project.role, project.yearAndStatus].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#a17d2c] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      onReadCaseStudy
                        ? onReadCaseStudy(project.id)
                        : setSelectedProject(project)
                    }
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102B46] hover:text-[#a17d2c] transition-colors"
                  >
                    <span>View Project Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Callout */}
        <div className="mt-14 p-8 rounded-2xl bg-[#102B46] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              Have a Development or Construction Site in Nigeria?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Engage our multidisciplinary project team for feasibility, BOQ audits, and turnkey execution.
            </p>
          </div>

          <button
            type="button"
            onClick={onDiscussProject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-colors shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Project Scope Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-[#a17d2c] uppercase tracking-wider">
                  {selectedProject.sector} · {selectedProject.location}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#102B46]">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedProject.caseStudy.brief}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Project Highlights & Specifications
              </span>
              <ul className="space-y-2">
                {[
                  selectedProject.role,
                  selectedProject.yearAndStatus,
                  selectedProject.verifiedOutcome,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#a17d2c] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onDiscussProject();
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59]"
              >
                Enquire on Similar Works
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
