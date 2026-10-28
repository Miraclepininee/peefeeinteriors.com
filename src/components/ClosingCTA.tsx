import React from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { BRAND } from '../data/brandData';

interface ClosingCTAProps {
  onStartProject: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onStartProject }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#141312] text-white overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Interior_services_d0114eeb.webp"
          alt="PeeFee Interiors Living Suite"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-[#141312]/85 to-[#141312]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
          Begin Your Transformation
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
          Let’s Create Something Beautiful.
        </h2>

        <p className="text-base sm:text-xl text-[#D8D1C7] font-light max-w-2xl mx-auto leading-relaxed">
          Have a space in mind? Tell us what you envision, and let’s discuss how to bring it to life.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#141312] bg-[#FAF8F5] hover:bg-[#C5A880] hover:text-white transition-all duration-300 shadow-xl group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#D8D1C7] hover:text-white border border-white/15 hover:border-white/30 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{BRAND.phoneDisplay}</span>
          </a>
        </div>

        {/* Locations quick reminder */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8C8278]">
          <span>Office: 175 Chu-Ngewe St</span>
          <span aria-hidden="true">·</span>
          <span>Store: Trans Amadi</span>
          <span aria-hidden="true">·</span>
          <span>Workshop: Ada George Rd</span>
        </div>

      </div>
    </section>
  );
};
