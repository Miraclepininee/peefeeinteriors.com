import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Info, Eye } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/brandData';

interface FeaturedProjectsProps {
  onOpenLightbox: (project: ProjectItem) => void;
  onViewCollection: (category: string) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenLightbox,
  onViewCollection,
  onViewAllProjects,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'luxury'>('all');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS.slice(0, 6)
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#141312]/10">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141312]">
              Selected Architectural Works
            </h2>
            <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
              Explore bespoke residential suites, commercial environments, and custom TV console installations crafted by PeeFee Interiors.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-[#F4EFEA] border border-[#141312]/8 rounded-none shrink-0 overflow-x-auto max-w-full">
            {(['all', 'residential', 'commercial', 'luxury'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#141312] text-white shadow-sm'
                    : 'text-[#5C554E] hover:text-[#141312] hover:bg-black/5'
                }`}
              >
                {tab === 'all' ? 'All Works' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12 items-stretch">
          {filteredProjects.map((project, idx) => {
            // Asymmetric editorial column spans for luxury monograph feel
            const colSpan =
              idx === 0 ? 'lg:col-span-8' :
              idx === 1 ? 'lg:col-span-4' :
              idx === 2 ? 'lg:col-span-4' :
              idx === 3 ? 'lg:col-span-8' :
              idx === 4 ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => onOpenLightbox(project)}
                className={`${colSpan} group cursor-pointer bg-[#F4EFEA] border border-[#141312]/8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C5A880]/50`}
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/11] md:aspect-auto md:h-72 lg:h-80 overflow-hidden bg-[#141312]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-[#141312]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#141312] text-xs font-semibold uppercase tracking-wider shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                    </span>
                  </div>

                  {/* Authenticity Pill */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    {project.isAuthenticWork ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#141312]/85 backdrop-blur-sm text-[10px] text-white">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#C5A880]" />
                        <span>Verified Project</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#141312]/85 backdrop-blur-sm text-[10px] text-[#D8D1C7]">
                        <Info className="w-2.5 h-2.5 text-amber-400" />
                        <span>Illustrative Preview</span>
                      </span>
                    )}
                  </div>

                  {/* Category Stamp */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-[10px] uppercase tracking-wider text-[#C5A880]">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C8278] font-semibold block mb-1">
                      {project.serviceName} · {project.location}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141312] group-hover:text-[#8C8278] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-2 mt-2">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#141312]/5 flex items-center justify-between text-xs font-semibold text-[#141312] uppercase tracking-wider">
                    <span className="group-hover:text-[#C5A880] transition-colors">Inspect Space</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All & Category Links */}
        <div className="mt-16 pt-8 border-t border-[#141312]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="text-[#8C8278] uppercase tracking-wider font-semibold">Direct Collections:</span>
            <button
              onClick={() => onViewCollection('residential')}
              className="text-[#141312] hover:text-[#C5A880] font-medium underline underline-offset-4"
            >
              Residential Projects →
            </button>
            <span className="text-[#141312]/20">·</span>
            <button
              onClick={() => onViewCollection('commercial')}
              className="text-[#141312] hover:text-[#C5A880] font-medium underline underline-offset-4"
            >
              Commercial Projects →
            </button>
            <span className="text-[#141312]/20">·</span>
            <button
              onClick={() => onViewCollection('luxury')}
              className="text-[#141312] hover:text-[#C5A880] font-medium underline underline-offset-4"
            >
              Luxury Projects →
            </button>
          </div>

          <button
            onClick={onViewAllProjects}
            className="px-6 py-3 bg-[#141312] text-white hover:bg-[#2C2A27] text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
          >
            <span>View Complete Portfolio ({PROJECTS.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
        </div>

      </div>
    </section>
  );
};
