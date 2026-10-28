import React from 'react';
import { PROCESS_STAGES } from '../data/brandData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#141312] border-t border-[#141312]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
            Our Working Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141312]">
            From Vision to Handover
          </h2>
          <p className="text-base text-[#5C554E] leading-relaxed">
            A structured, collaborative design and construction sequence that ensures transparency, craft precision, and timely delivery at every milestone.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="relative p-6 sm:p-8 bg-[#F4EFEA] border border-[#141312]/8 flex flex-col justify-between space-y-6 group hover:border-[#C5A880] transition-colors"
            >
              <div className="space-y-4">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A880] block">
                  {stage.number}.
                </span>
                
                <h3 className="font-serif text-2xl font-bold text-[#141312] leading-tight">
                  {stage.title}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C8278]">
                  {stage.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#141312]/5 text-[11px] font-mono text-[#8C8278]">
                Stage {stage.number} · Collaborative Review
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#8C8278] italic">
          *Suggested project workflow — tailored to your specific architectural scope, site conditions, and fabrication requirements.
        </div>

      </div>
    </section>
  );
};
