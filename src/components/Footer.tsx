import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Instagram, MapPin, Phone, Heart, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] pt-12 pb-24 md:pb-12 px-4 sm:px-6 text-xs text-[#6B6B6B]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#E5E5E5] pb-8">
          
          <div className="space-y-2">
            <a href="#" className="text-xl font-serif font-bold text-[#2C2C2C] tracking-tight block">
              {STUDIO_INFO.name}
            </a>
            <p className="text-xs text-[#6B6B6B] max-w-sm">
              {STUDIO_INFO.subcopy}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F9F7F2] border border-[#E5E5E5] text-[#2C2C2C] hover:text-[#8DA399] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#8DA399]" />
              <span className="font-medium">{STUDIO_INFO.instagramHandle}</span>
            </a>

            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F9F7F2] border border-[#E5E5E5] text-[#2C2C2C] hover:text-[#8DA399] transition-colors font-mono"
            >
              <Phone className="w-4 h-4 text-[#8DA399]" />
              <span className="font-medium">{STUDIO_INFO.phoneFormatted}</span>
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#8DA399]" />
            <span>{STUDIO_INFO.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/api/bookings/export.csv"
              download
              className="inline-flex items-center gap-1.5 hover:text-[#2C2C2C] transition-colors"
              title="Download bookings spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-[#8DA399]" />
              <span>Owner Spreadsheet (.csv)</span>
            </a>

            <span aria-hidden="true">·</span>

            <p className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-[#8DA399] fill-[#8DA399]" />
              <span>for Eccles Mums</span>
            </p>
          </div>
        </div>

        <div className="text-[11px] text-[#6B6B6B]/80 text-center pt-2">
          © {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved. 43 Clifton Rd, Eccles, Manchester M30 9QS, UK.
        </div>

      </div>
    </footer>
  );
};
