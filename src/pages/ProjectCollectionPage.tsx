import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Info, Eye } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/brandData';
import { ClosingCTA } from '../components/ClosingCTA';

interface ProjectCollectionPageProps {
  category: 'residential' | 'commercial' | 'luxury';
  onBackToAll: () => void;
  onOpenLightbox: (project: ProjectItem) => void;
  onStartProject: () => void;
}

export const ProjectCollectionPage: React.FC<ProjectCollectionPageProps> = ({
  category,
  onBackToAll,
  onOpenLightbox,
  onStartProject,
}) => {
  const collectionData = {
    residential: {
      title: "Residential Projects Collection",
      subtitle: "Sanctuaries Crafted for Everyday Elegance",
      description: "From custom media wall installations and private master suites to whole-residence spatial planning. Explore how PeeFee Interiors transforms living spaces across Port Harcourt and Nigeria.",
      kicker: "Living Rooms · TV Consoles · Private Residences"
    },
    commercial: {
      title: "Commercial Projects Collection",
      subtitle: "Executive Environments Engineered for Prestige",
      description: "Corporate boardrooms, luxury boutique offices, acoustic meeting suites, and client reception areas. We construct environments that elevate your brand authority and productivity.",
      kicker: "Boardrooms · Corporate Lounges · Acoustic Paneling"
    },
    luxury: {
      title: "Luxury Projects Collection",
      subtitle: "Bespoke Materiality & Architectural Grandeur",
      description: "Sculptural curved lounges, natural travertine dining suites, custom fluted timber ceilings, and master architectural concepts built to the highest aesthetic standards.",
      kicker: "Curved Seating · Travertine · Master Blueprints"
    }
  }[category];

  const categoryProjects = PROJECTS.filter((p) => p.category === category);

  return (
    <div className="pt-24 animate-fade-in bg-[#FAF8F5] text-[#141312]">
      
      {/* Header with Navigation Back to All */}
      <section className="py-16 sm:py-24 border-b border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={onBackToAll}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C8278] hover:text-[#141312] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects Archive</span>
          </button>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              {collectionData.kicker}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141312]">
              {collectionData.title}
            </h1>
            <p className="font-serif italic text-xl text-[#8C8278]">
              {collectionData.subtitle}
            </p>
            <p className="text-base text-[#5C554E] font-light leading-relaxed">
              {collectionData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects in this Collection */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenLightbox(project)}
                className="group cursor-pointer bg-[#F4EFEA] border border-[#141312]/8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#C5A880]"
              >
                {/* Media */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#141312]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-[#141312]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#141312] text-xs font-semibold uppercase tracking-wider shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Project</span>
                    </span>
                  </div>

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
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C8278] font-semibold block mb-1">
                      {project.serviceName} · {project.location}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141312] group-hover:text-[#8C8278] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-3 mt-2">
                      {project.description}
                    </p>
                  </div>

                  {project.highlights && (
                    <div className="pt-3 border-t border-[#141312]/5 text-xs text-[#8C8278] space-y-1">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#141312] uppercase tracking-wider">
                    <span className="group-hover:text-[#C5A880] transition-colors">View Specifications</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Enquire for this Collection */}
          <div className="mt-16 p-8 bg-[#141312] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2C2A27]">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-white">
                Planning a {category} space?
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A29A]">
                We consult directly on layout, millwork, and full architectural coordination.
              </p>
            </div>
            <button
              onClick={onStartProject}
              className="px-6 py-3.5 bg-[#FAF8F5] text-[#141312] hover:bg-[#C5A880] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider shrink-0"
            >
              Start {category} Project Enquiry
            </button>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCTA onStartProject={onStartProject} />

    </div>
  );
};
