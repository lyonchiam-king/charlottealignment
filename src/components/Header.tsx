import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, Menu, X, Instagram } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-serif font-bold text-[#2C2C2C] tracking-tight hover:text-[#8DA399] transition-colors shrink-0"
        >
          {STUDIO_INFO.name}
        </a>

        {/* Zone 2: Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B6B6B]">
          <a href="#stage-selector" className="hover:text-[#2C2C2C] transition-colors py-1">Classes & Safety</a>
          <a href="#services" className="hover:text-[#2C2C2C] transition-colors py-1">Offerings</a>
          <a href="#about" className="hover:text-[#2C2C2C] transition-colors py-1">About Charlotte</a>
          <a href="#timeline" className="hover:text-[#2C2C2C] transition-colors py-1">Motherhood Journey</a>
          <a href="#contact" className="hover:text-[#2C2C2C] transition-colors py-1">Studio & Map</a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C2C2C] bg-white border border-[#E5E5E5] px-3 py-2 rounded-lg hover:border-[#8DA399] transition-all shrink-0"
            title="Call Charlotte directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#8DA399]" />
            <span>{STUDIO_INFO.phoneFormatted}</span>
          </a>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center p-2 text-[#6B6B6B] hover:text-[#8DA399] transition-colors shrink-0"
            aria-label="Instagram profile"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            onClick={onBookClick}
            className="bg-[#8DA399] hover:bg-[#768C82] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all active:scale-98 shadow-sm shrink-0"
          >
            Book Session
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C2C2C] hover:text-[#8DA399] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E5E5] px-4 py-5 space-y-4 text-sm font-medium animate-fadeIn">
          <a
            href="#stage-selector"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2C2C2C] hover:text-[#8DA399] py-1"
          >
            Classes & Safety
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2C2C2C] hover:text-[#8DA399] py-1"
          >
            Offerings
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2C2C2C] hover:text-[#8DA399] py-1"
          >
            About Charlotte
          </a>
          <a
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2C2C2C] hover:text-[#8DA399] py-1"
          >
            Motherhood Journey
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2C2C2C] hover:text-[#8DA399] py-1"
          >
            Studio & Map
          </a>
          <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between">
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C2C2C]"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DA399]" />
              <span>{STUDIO_INFO.phoneFormatted}</span>
            </a>
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8DA399] font-medium"
            >
              {STUDIO_INFO.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
