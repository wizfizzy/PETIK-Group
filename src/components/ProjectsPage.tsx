import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/companyData';
import { ProjectCard } from './ProjectCard';
import {
  PROJECT_SECTORS,
  filterProjectsBySector,
  findProjectById,
} from '../utils/projects';

interface ProjectsPageProps {
  selectedProjectId: string | null;
  onSelectProject: (projectId: string | null) => void;
  onDiscussSimilarProject: (project: ProjectItem) => void;
  onOpenGeneralEnquiry: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  selectedProjectId,
  onSelectProject,
  onDiscussSimilarProject,
  onOpenGeneralEnquiry,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const activeCaseStudy = findProjectById(selectedProjectId, PROJECTS_DATA);
  const filteredProjects = filterProjectsBySector(PROJECTS_DATA, selectedSector);

  if (activeCaseStudy) {
    const otherProjects = PROJECTS_DATA.filter((p) => p.id !== activeCaseStudy.id);

    return (
      <div className="bg-[#F8F8F5] min-h-screen">
        {/* Case Study Header */}
        <section className="bg-[#102B46] text-white pt-28 sm:pt-32 pb-14 sm:pb-18 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onSelectProject(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#a17d2c]" />
              <span>Back to All Petik Projects</span>
            </a>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a17d2c] mb-3">
                <span>{activeCaseStudy.sector}</span>
                <span className="text-white/30" aria-hidden="true">·</span>
                <span className="text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#a17d2c]" />
                  {activeCaseStudy.location}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
                {activeCaseStudy.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300">
                {activeCaseStudy.yearAndStatus}
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Body */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Lead Image */}
            <figure className="relative rounded-2xl overflow-hidden bg-slate-200 border border-[#EDEFF1] shadow-sm">
              <div className="aspect-[16/8] w-full overflow-hidden">
                <img
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {activeCaseStudy.isIllustrative && (
                <figcaption className="px-5 py-3 bg-white border-t border-[#EDEFF1] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-[#102B46]">Illustrative image</span>
                  <span>{activeCaseStudy.imageAlt}</span>
                </figcaption>
              )}
            </figure>

            {/* 1. Project Facts */}
            <div className="bg-white rounded-2xl border border-[#EDEFF1] shadow-sm p-6 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-2">
                PROJECT RECORD
              </span>
              <h2 className="font-display text-2xl font-bold text-[#102B46] mb-6">
                Project Facts
              </h2>

              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Project Name
                  </dt>
                  <dd className="text-sm font-semibold text-[#102B46]">
                    {activeCaseStudy.name}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Location
                  </dt>
                  <dd className="text-sm font-semibold text-[#102B46]">
                    {activeCaseStudy.location}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sector
                  </dt>
                  <dd className="text-sm font-semibold text-[#102B46]">
                    {activeCaseStudy.sector}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Petik&apos;s Role
                  </dt>
                  <dd className="text-sm font-semibold text-[#102B46]">
                    {activeCaseStudy.role}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1] md:col-span-2">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Scope
                  </dt>
                  <dd className="text-sm text-slate-700 leading-relaxed">
                    {activeCaseStudy.scope}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Year and Status
                  </dt>
                  <dd className="text-sm font-semibold text-[#102B46]">
                    {activeCaseStudy.yearAndStatus}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1]">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Client Name
                  </dt>
                  <dd className="text-sm text-slate-700">
                    {activeCaseStudy.clientName}
                  </dd>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#EDEFF1] md:col-span-2 lg:col-span-4">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Verified Outcome
                  </dt>
                  <dd className="text-sm text-slate-700 leading-relaxed">
                    {activeCaseStudy.verifiedOutcome}
                  </dd>
                </div>
              </dl>
            </div>

            {/* 2. Brief, Challenge, Approach, Outcome */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-[#EDEFF1] shadow-sm p-6 sm:p-8 space-y-3">
                <h2 className="font-display text-xl font-bold text-[#102B46]">
                  Brief
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeCaseStudy.caseStudy.brief}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#EDEFF1] shadow-sm p-6 sm:p-8 space-y-3">
                <h2 className="font-display text-xl font-bold text-[#102B46]">
                  Challenge
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeCaseStudy.caseStudy.challenge}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#EDEFF1] shadow-sm p-6 sm:p-8 space-y-3">
                <h2 className="font-display text-xl font-bold text-[#102B46]">
                  Approach
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeCaseStudy.caseStudy.approach}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#EDEFF1] shadow-sm p-6 sm:p-8 space-y-3">
                <h2 className="font-display text-xl font-bold text-[#102B46]">
                  Outcome
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeCaseStudy.caseStudy.outcome}
                </p>
              </div>
            </div>

            {/* 3. Photo Gallery */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-2">
                  SITE DOCUMENTATION
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46]">
                  Photo Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCaseStudy.caseStudy.gallery.map((item, idx) => (
                  <figure
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {item.isIllustrative && (
                        <div className="absolute bottom-3 left-3">
                          <span className="inline-block px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm text-[11px] font-medium text-white border border-white/15">
                            Illustrative image
                          </span>
                        </div>
                      )}
                    </div>
                    <figcaption className="p-4 text-xs sm:text-sm text-slate-600">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* 4. Discuss a Similar Project CTA */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#102B46] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Planning a {activeCaseStudy.sector} Project?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Speak with our team about scope requirements, site assessments, or pricing for a similar engagement.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onDiscussSimilarProject(activeCaseStudy)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-colors shrink-0"
              >
                <span>Discuss a similar project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Other Projects Quick Switcher */}
            {otherProjects.length > 0 && (
              <div className="pt-4 space-y-6">
                <h3 className="font-display text-xl font-bold text-[#102B46]">
                  More Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {otherProjects.map((proj) => (
                    <ProjectCard
                      key={proj.id}
                      project={proj}
                      onReadCaseStudy={(id) => {
                        onSelectProject(id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8F5] min-h-screen">
      {/* Projects Page Header Banner */}
      <section className="bg-[#102B46] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
              PROJECTS &amp; CASE STUDIES
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Petik Limited Projects.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Project records across real estate, civil construction, renewable energy, and Amarisa Court shortlets. Stock images are labelled Illustrative image and unverified project details are marked with [PLACEHOLDER].
            </p>
          </div>
        </div>
      </section>

      {/* Sector Filter Bar */}
      <section className="bg-white border-b border-[#EDEFF1] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EDEFF1] rounded-xl self-start">
            {PROJECT_SECTORS.map((sector) => (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedSector === sector
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium text-slate-500">
            Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onReadCaseStudy={(id) => {
                  onSelectProject(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#102B46] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                Have a Development or Construction Site in Nigeria?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact our team to discuss site assessments, Bill of Quantities reviews, or project delivery.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenGeneralEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-colors shrink-0"
            >
              <span>Discuss a similar project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
