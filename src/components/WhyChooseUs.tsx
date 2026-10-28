import React from 'react';
import { Compass, Hammer, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/brandData';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#141312] text-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero with Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/assets/aistudio/Why_choose_us_section_full_image_0bc0bf13.jpg"
                alt="PeeFee Interiors In-House Curved Sofa and Architectural Wall Feature"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent" />
              
              {/* Overlay Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141312]/85 backdrop-blur-md border border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                  Authentic Studio Execution
                </span>
                <p className="font-serif text-lg text-white font-medium">
                  Custom curved bouclé seating and architectural cascading acoustic timber wall.
                </p>
                <p className="text-[11px] text-[#A8A29A] mt-1">
                  Fabricated & delivered by PeeFee Interiors, Port Harcourt.
                </p>
              </div>
            </div>

            {/* Decorative Gold Corner Marker */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C5A880]/60 pointer-events-none" />
          </div>

          {/* Right Column: Brand Values & In-House Facilities */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Why PeeFee Interiors
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Crafted With Purpose. Built To Endure.
              </h2>
              <p className="text-base text-[#D8D1C7] font-light leading-relaxed">
                We believe interior and architectural design should never feel like an afterthought. Our unified team handles every phase from spatial concept to direct workshop fabrication.
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Intentional Architectural Flow</h3>
                  <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mt-1">
                    Every partition, furniture orientation, and lighting line is designed around how you naturally move and experience your home or commercial office.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Direct Ada George Fabrication Hub</h3>
                  <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mt-1">
                    Unlike agencies that outsource blindly, we operate a dedicated production workshop on Ada George Road, Port Harcourt, supervising every cut of wood and upholstery stitch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Tailored Material Selection</h3>
                  <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mt-1">
                    We select performance bouclé, Italian leathers, natural veneers, and architectural hardware tested specifically for durability in Nigeria's climate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Port Harcourt Rooted, Nationwide Scope</h3>
                  <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mt-1">
                    From our design studio at Chu-Ngewe Street to our Trans Amadi showroom, we provide prompt on-site oversight across Port Harcourt and accept select projects nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C5A880] text-[#141312] hover:bg-white hover:text-[#141312] transition-colors text-xs font-semibold uppercase tracking-wider font-sans shadow-lg group"
              >
                <span>Discuss Your Project With Our Team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
