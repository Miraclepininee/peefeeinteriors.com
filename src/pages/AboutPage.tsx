import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Compass, Hammer, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { ClosingCTA } from '../components/ClosingCTA';

interface AboutPageProps {
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="pt-24 animate-fade-in bg-[#FAF8F5] text-[#141312]">
      
      {/* Editorial Header Section */}
      <section className="py-16 sm:py-24 border-b border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              The PeeFee Interiors Narrative
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141312] leading-[1.08] [text-wrap:balance]">
              Design With Purpose. Built To Inspire.
            </h1>

            <p className="text-lg sm:text-2xl text-[#5C554E] font-light leading-relaxed">
              We are an architectural and interior design studio rooted in Port Harcourt, Nigeria. Our work unites structural clarity, artisanal woodwork, and tailored materiality to elevate how you inhabit your everyday world.
            </p>
          </div>
        </div>
      </section>

      {/* Authentic Walkthrough Video Showcase Section */}
      <section className="py-16 lg:py-20 bg-[#141312] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#C5A880] uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Authentic Video Walkthrough · PeeFee Completed Space</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Spatial Inspection & Craftsmanship Reveal
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right text-xs text-[#A8A29A]">
              Shot on-site in Port Harcourt · Featuring custom fluted TV wall, directional wall sconces, and lowline cabinetry.
            </div>
          </div>

          {/* Video Player Frame */}
          <div className="relative mt-8 max-w-4xl mx-auto aspect-video bg-black border border-white/10 shadow-2xl overflow-hidden group">
            <video
              ref={videoRef}
              src="/assets/aistudio/About_Page_Hero_video_635473bc.mp4"
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-3 bg-white/20 hover:bg-[#C5A880] text-white hover:text-[#141312] rounded-full backdrop-blur-md transition-all focus:outline-none"
                  aria-label={isPlaying ? "Pause walkthrough video" : "Play walkthrough video"}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-xs text-[#D8D1C7] hidden sm:inline">
                  {isPlaying ? "Playing Walkthrough" : "Click Play to Experience"}
                </span>
              </div>

              <div className="px-3 py-1 bg-black/60 border border-white/10 text-[11px] font-mono text-[#C5A880]">
                Ada George Fabrication & Installation
              </div>
            </div>

            {/* Big Initial Play Button if paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#141312]/80 hover:bg-[#C5A880] text-white hover:text-[#141312] flex items-center justify-center border border-white/20 transition-all duration-300 shadow-2xl group/play"
                aria-label="Play video"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Philosophy & Craftsmanship Editorial Sections */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Block 1: Design Philosophy & Spatial Balance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C8278] font-semibold">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-tight">
                Where Aesthetics & Functionality Meet Without Compromise.
              </h2>
              <div className="space-y-4 text-base text-[#4A453E] leading-relaxed font-light">
                <p>
                  A beautifully decorated room is meaningless if it fails to support your actual lifestyle. At PeeFee Interiors, every concept begins with functional spatial planning: how daylight shifts through windows, how furniture encourages conversation, and how clean sightlines create calm.
                </p>
                <p>
                  We resist fleeting design fads in favor of timeless proportions, tactile materials, and architectural integrity that grows more distinguished with time.
                </p>
              </div>
              <div className="pt-2 border-l-2 border-[#C5A880] pl-4">
                <p className="font-serif italic text-lg text-[#141312]">
                  “Every detail has purpose. Every space tells a story.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#F4EFEA] border border-[#141312]/10 overflow-hidden shadow-lg">
                <img
                  src="/assets/aistudio/Interior_services_d0114eeb.webp"
                  alt="Harmonious Living Room with Curved Seating"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Block 2: In-House Fabrication & Material Attention */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[4/3] bg-[#F4EFEA] border border-[#141312]/10 overflow-hidden shadow-lg">
                <img
                  src="/assets/aistudio/Tv_console_services_d32cee67.webp"
                  alt="Precision Joinery & TV Console Construction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C8278] font-semibold">
                In-House Capability
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-tight">
                Attention to Materials, Finishing & True Craftsmanship.
              </h2>
              <div className="space-y-4 text-base text-[#4A453E] leading-relaxed font-light">
                <p>
                  Our distinction lies in our in-house manufacturing capability. Rather than relying on generic imported flat-pack units, our craftsmen at Ada George Road fabricate custom TV entertainment consoles, acoustic fluting, and tailored curved upholstery to exact architectural tolerances.
                </p>
                <p>
                  We hand-select seasoned hardwood, high-density structural foam, premium woven bouclé, and durable laminates engineered to perform reliably in Nigerian humidity.
                </p>
              </div>
              <div className="pt-2 border-l-2 border-[#C5A880] pl-4">
                <p className="font-serif italic text-lg text-[#141312]">
                  “We Build. We Design. We Construct. We Deliver.”
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Verified Locations Spotlight */}
      <section className="py-20 bg-[#F4EFEA] border-y border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 pb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              Our Physical Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141312]">
              Three Dedicated Facilities in Port Harcourt
            </h2>
            <p className="text-sm text-[#5C554E]">
              From concept development and material consultations to custom fabrication, our three dedicated locations ensure complete project control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND.locations.map((loc) => (
              <div
                key={loc.type}
                className="p-8 bg-[#FAF8F5] border border-[#141312]/8 space-y-4 hover:border-[#C5A880] transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-[#141312] text-[#C5A880] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold block">
                    {loc.type}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#141312] mt-1">
                    {loc.label}
                  </h3>
                </div>
                <p className="text-sm font-medium text-[#2C2A27]">
                  {loc.address}
                </p>
                <p className="text-xs text-[#8C8278]">
                  {loc.city}, {loc.state}, {loc.country}
                </p>
                <p className="text-xs text-[#5C554E] pt-2 border-t border-[#141312]/5 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCTA onStartProject={onStartProject} />

    </div>
  );
};
