import React from 'react';
import { ArrowUpRight, Sparkles, Layers, Compass, Hammer } from 'lucide-react';
import { BRAND } from '../data/brandData';

interface BrandIntroProps {
  onLearnMore: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Kicker & Statement (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              The PeeFee Philosophy
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141312] leading-[1.15] [text-wrap:balance]">
              We don't just decorate rooms—<br className="hidden sm:inline" />
              <span className="text-[#8C8278] italic font-normal">we transform living experiences.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#4A453E] leading-relaxed font-light">
              <p>
                At <strong className="font-semibold text-[#141312]">PeeFee Interiors</strong>, we believe every space holds a distinct narrative waiting to be articulated. Grounded in Port Harcourt and crafting for discerning clients, our studio bridges the gap between architectural ambition and tactile reality.
              </p>
              <p className="text-sm sm:text-base text-[#5C554E]">
                Whether conceptualizing modern private residences, executing bespoke TV consoles, or detailing complete corporate environments, we treat material selection, natural light, and structural flow as unified elements of living well.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#C5A880] transition-colors group"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Brand Pillar Cards (Cols 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="p-6 bg-[#F4EFEA] border border-[#141312]/5 space-y-2">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#141312]">Purposeful Craft</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#141312]">
                “Every detail has purpose.”
              </h3>
              <p className="text-xs text-[#5C554E] leading-relaxed">
                From custom fluted millwork to concealed acoustic integration, every line is drawn with intent.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEA] border border-[#141312]/5 space-y-2">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <Layers className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#141312]">Collaborative Vision</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#141312]">
                “You imagine it. We create it.”
              </h3>
              <p className="text-xs text-[#5C554E] leading-relaxed">
                We synthesize your lifestyle aspirations into buildable, timeless spaces tailored to you.
              </p>
            </div>

            <div className="p-6 bg-[#141312] text-[#FAF8F5] space-y-2">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <Hammer className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C5A880]">Complete Delivery</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                “We Build. We Design. We Construct. We Deliver.”
              </h3>
              <p className="text-xs text-[#B8B0A6] leading-relaxed">
                End-to-end accountability backed by our in-house Ada George fabrication workshop.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
