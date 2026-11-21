import React from 'react';
import { MapPin, ArrowRight, Briefcase, Clock } from 'lucide-react';
import { ProjectItem } from '../data/companyData';

interface ProjectCardProps {
  project: ProjectItem;
  onReadCaseStudy: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onReadCaseStudy,
}) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#EDEFF1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Photo */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          {project.isIllustrative && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-block px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm text-[11px] font-medium text-white border border-white/15">
                Illustrative image
              </span>
            </div>
          )}
        </div>

        {/* Card Metadata: Name, Location, Role, Status */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="font-display text-xl font-bold text-[#102B46] group-hover:text-[#a17d2c] transition-colors leading-snug">
            {project.name}
          </h3>

          <dl className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-slate-700 font-medium">{project.location}</dd>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Briefcase className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="sr-only">Petik's Role</dt>
                <dd>{project.role}</dd>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#a17d2c] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="sr-only">Year and Status</dt>
                <dd className="text-slate-500">{project.yearAndStatus}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* Read the Case Study Action */}
      <div className="px-6 sm:px-7 py-4 border-t border-slate-100 bg-white">
        <a
          href={`/projects/${project.id}`}
          onClick={(e) => {
            e.preventDefault();
            onReadCaseStudy(project.id);
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102B46] hover:text-[#a17d2c] transition-colors group/btn"
        >
          <span>
            Read the case study
            <span className="sr-only"> — {project.name}</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#a17d2c] transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
