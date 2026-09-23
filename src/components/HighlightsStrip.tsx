import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Baby, ShieldCheck, Home } from 'lucide-react';

export const HighlightsStrip: React.FC = () => {
  const icons = [
    <Baby className="w-4 h-4 text-[#8DA399]" key="baby" />,
    <ShieldCheck className="w-4 h-4 text-[#8DA399]" key="shield" />,
    <Home className="w-4 h-4 text-[#8DA399]" key="home" />
  ];

  return (
    <section className="bg-white border-y border-[#E5E5E5] py-4 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-4 sm:gap-8">
        {STUDIO_INFO.highlights.map((badge, idx) => (
          <div key={badge} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#2C2C2C]">
            <span className="p-1.5 rounded-lg bg-[#F9F7F2] border border-[#E5E5E5]">
              {icons[idx]}
            </span>
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
