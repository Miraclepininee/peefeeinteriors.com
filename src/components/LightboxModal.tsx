import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Info, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/brandData';

interface LightboxModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onEnquire: (serviceId: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onEnquire,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigateProject(1);
      if (e.key === 'ArrowLeft') navigateProject(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, allProjects]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);

  const navigateProject = (direction: number) => {
    const nextIndex = (currentIndex + direction + allProjects.length) % allProjects.length;
    onSelectProject(allProjects[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#141312] border border-white/10 rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors border border-white/10"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Side */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full max-h-[75vh] object-contain transition-transform duration-300"
          />

          {/* Navigation Arrows */}
          {allProjects.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateProject(-1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all border border-white/15 focus:outline-none"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateProject(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all border border-white/15 focus:outline-none"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Index Counter */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-[11px] font-mono text-[#D8D1C7] border border-white/10">
            {currentIndex + 1} / {allProjects.length}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-[#1A1918] text-[#FAF8F5] border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
          <div className="space-y-4">
            {/* Category & Status Badges */}
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                {project.categoryLabel} · {project.serviceName}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold tracking-tight text-white leading-snug">
              {project.title}
            </h3>

            {/* Authenticity notice badge */}
            {project.isAuthenticWork ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified PeeFee Interiors Project</span>
              </div>
            ) : (
              <div className="flex items-start gap-1.5 px-2.5 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                <span>{project.illustrativeNotice || "Illustrative visualization for portfolio preview"}</span>
              </div>
            )}

            <p className="text-sm text-[#B8B0A6] leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#8C8278] font-semibold mb-2">
                  Key Specifications
                </h4>
                <ul className="space-y-1.5 text-xs text-[#D8D1C7]">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Materials */}
            {project.materials && (
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#8C8278] font-semibold mb-1.5">
                  Featured Materials
                </h4>
                <p className="text-xs text-[#C5A880] italic">
                  {project.materials.join(' · ')}
                </p>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onEnquire(project.serviceId);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF8F5] text-[#141312] hover:bg-[#C5A880] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              <span>Enquire About Similar Space</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
