import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Info, Eye, Filter } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/brandData';
import { ClosingCTA } from '../components/ClosingCTA';

interface ProjectsPageProps {
  onOpenLightbox: (project: ProjectItem) => void;
  onSelectCollection: (category: string) => void;
  onStartProject: () => void;
  initialFilter?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenLightbox,
  onSelectCollection,
  onStartProject,
  initialFilter = 'all',
}) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'luxury'>(
    (initialFilter as any) || 'all'
  );

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="pt-24 animate-fade-in bg-[#FAF8F5] text-[#141312]">
      
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 border-b border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
                Architecture & Interiors Archive
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141312]">
                Selected Works
              </h1>
              <p className="text-base text-[#5C554E] font-light leading-relaxed">
                A curated survey of residential sanctuaries, executive commercial installations, and custom TV console engineering executed with architectural discipline.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1.5 bg-[#F4EFEA] border border-[#141312]/8 shrink-0 overflow-x-auto max-w-full">
              {(['all', 'residential', 'commercial', 'luxury'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                    filter === tab
                      ? 'bg-[#141312] text-white shadow-sm'
                      : 'text-[#5C554E] hover:text-[#141312] hover:bg-black/5'
                  }`}
                >
                  {tab === 'all' ? `All Works (${PROJECTS.length})` : `${tab} (${PROJECTS.filter(p => p.category === tab).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenLightbox(project)}
                className="group cursor-pointer bg-[#F4EFEA] border border-[#141312]/8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#C5A880]"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#141312]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-[#141312]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#141312] text-xs font-semibold uppercase tracking-wider shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open Full Spec</span>
                    </span>
                  </div>

                  {/* Verified or Illustrative Pill */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    {project.isAuthenticWork ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#141312]/85 backdrop-blur-sm text-[10px] text-white">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#C5A880]" />
                        <span>Verified Project</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#141312]/85 backdrop-blur-sm text-[10px] text-[#D8D1C7]">
                        <Info className="w-2.5 h-2.5 text-amber-400" />
                        <span>Illustrative</span>
                      </span>
                    )}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-[10px] uppercase tracking-wider text-[#C5A880]">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#8C8278] uppercase tracking-wider font-semibold mb-1">
                      <span>{project.serviceName}</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141312] group-hover:text-[#8C8278] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-2 mt-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  {project.highlights && (
                    <div className="pt-3 border-t border-[#141312]/5 text-[11px] text-[#8C8278] line-clamp-1">
                      {project.highlights.slice(0, 2).join(' · ')}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#141312] uppercase tracking-wider">
                    <span className="group-hover:text-[#C5A880] transition-colors">Examine Craft</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Category Collections Navigation Banner */}
          <div className="mt-20 p-8 sm:p-12 bg-[#F4EFEA] border border-[#141312]/8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A880]">Collection 01</span>
                <h4 className="font-serif text-2xl font-bold text-[#141312]">Residential Projects</h4>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  Private residences, luxury apartments, and living room media wall transformations in Port Harcourt.
                </p>
                <button
                  onClick={() => onSelectCollection('residential')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#C5A880] pt-2"
                >
                  <span>Explore Residential</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A880]">Collection 02</span>
                <h4 className="font-serif text-2xl font-bold text-[#141312]">Commercial Projects</h4>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  Executive boardrooms, boutique offices, reception spaces, and corporate environments.
                </p>
                <button
                  onClick={() => onSelectCollection('commercial')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#C5A880] pt-2"
                >
                  <span>Explore Commercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A880]">Collection 03</span>
                <h4 className="font-serif text-2xl font-bold text-[#141312]">Luxury Projects</h4>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  Curved architectural lounges, bespoke travertine dining spaces, and master suites.
                </p>
                <button
                  onClick={() => onSelectCollection('luxury')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#C5A880] pt-2"
                >
                  <span>Explore Luxury</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCTA onStartProject={onStartProject} />

    </div>
  );
};
