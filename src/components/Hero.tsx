import React from 'react';
import { ArrowUpRight, Play, Compass, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/brandData';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onWatchVideo,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#141312]">
      {/* Background Hero Image with Subtle Editorial Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Why_choose_us_section_full_image_0bc0bf13.jpg"
          alt="PeeFee Interiors Bespoke Curved Architectural Space"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Editorial double gradient scrim for pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-[#141312]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#141312]/20 to-[#141312]/80" />
      </div>

      {/* Top Subtle Tagline */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium border-b border-[#C5A880]/30 pb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Architectural Studio · Port Harcourt, Nigeria</span>
        </div>
      </div>

      {/* Main Center Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            Spaces That Reflect Your Vision.
          </h1>

          <p className="text-base sm:text-xl text-[#E5DFC5] font-light leading-relaxed max-w-2xl">
            Thoughtfully designed interiors, striking exteriors and beautifully crafted spaces, tailored to the way you live, work and experience the world.
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#141312] bg-[#FAF8F5] hover:bg-[#C5A880] hover:text-white transition-all duration-300 shadow-lg group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#141312] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <span>Explore Our Work</span>
            </button>

            {/* Walkthrough Video Trigger */}
            <button
              onClick={onWatchVideo}
              className="inline-flex items-center gap-2.5 px-4 py-3 text-xs font-medium text-[#C5A880] hover:text-white transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-[#C5A880]/40 group-hover:bg-[#C5A880] group-hover:text-[#141312] transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span>Watch Studio Walkthrough</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/15 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#D8D1C7]">
          <div>
            <p className="text-[#8C8278] uppercase tracking-wider text-[11px] font-medium">Philosophy</p>
            <p className="font-serif italic text-sm sm:text-base text-white mt-0.5">“You imagine it. We create it.”</p>
          </div>
          <div>
            <p className="text-[#8C8278] uppercase tracking-wider text-[11px] font-medium">Headquarters</p>
            <p className="font-medium text-white mt-0.5">175 Chu-Ngewe St, Port Harcourt</p>
          </div>
          <div>
            <p className="text-[#8C8278] uppercase tracking-wider text-[11px] font-medium">Fabrication Hub</p>
            <p className="font-medium text-white mt-0.5">Ada George Production Facility</p>
          </div>
          <div>
            <p className="text-[#8C8278] uppercase tracking-wider text-[11px] font-medium">Discipline</p>
            <p className="font-medium text-[#C5A880] mt-0.5">We Build · Design · Construct · Deliver</p>
          </div>
        </div>
      </div>
    </section>
  );
};
