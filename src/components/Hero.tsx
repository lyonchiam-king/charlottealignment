import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Instagram, MapPin, Heart } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center bg-[#F9F7F2] overflow-hidden py-12 md:py-20">
      
      {/* Background Image Container with Soft Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_pilates_studio_1790164769391.jpg"
          alt="Bright serene private reformer Pilates studio in Eccles"
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F2] via-[#F9F7F2]/80 to-[#F9F7F2]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Quiet Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E5E5E5] text-xs font-medium text-[#6B6B6B] mb-6 backdrop-blur-sm shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#8DA399]" />
          <span>Eccles, Manchester M30 · Private Reformer Studio</span>
        </div>

        {/* Exact Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C2C2C] leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto text-balance">
          {STUDIO_INFO.headline}
        </h1>

        {/* Exact Subcopy */}
        <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
          {STUDIO_INFO.subcopy}
        </p>

        {/* Primary CTA & Instagram link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto bg-[#8DA399] hover:bg-[#768C82] text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm active:scale-98"
          >
            Book Your Session
          </button>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#2C2C2C] text-sm font-medium px-6 py-3.5 rounded-xl border border-[#E5E5E5] hover:border-[#8DA399] transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#8DA399]" />
            <span>Follow {STUDIO_INFO.instagramHandle}</span>
          </a>
        </div>

        {/* Reassurance Note */}
        <p className="mt-8 text-xs text-[#6B6B6B] flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#8DA399] fill-[#8DA399]" />
          <span>No DMs required — simple 1-click booking or WhatsApp inquiry</span>
        </p>
      </div>
    </section>
  );
};
