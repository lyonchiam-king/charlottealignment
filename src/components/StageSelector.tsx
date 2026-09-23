import React from 'react';
import { STAGE_NOTES } from '../data/studioData';
import { ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

type StageType = 'Prenatal' | 'Postnatal' | 'General';

interface StageSelectorProps {
  activeStage: StageType;
  onSelectStage: (stage: StageType) => void;
  onBookStage: (stage: StageType) => void;
}

export const StageSelector: React.FC<StageSelectorProps> = ({
  activeStage,
  onSelectStage,
  onBookStage,
}) => {
  const currentNote = STAGE_NOTES[activeStage];

  const stages: { type: StageType; label: string; desc: string }[] = [
    { type: 'Prenatal', label: 'Prenatal', desc: 'Expecting mum (Trimesters 1-3)' },
    { type: 'Postnatal', label: 'Postnatal', desc: 'New mum & baby (6+ weeks)' },
    { type: 'General', label: 'General 1:1', desc: 'Alignment & core strength' },
  ];

  return (
    <section id="stage-selector" className="py-12 sm:py-16 bg-[#F9F7F2] border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block mb-2">
            Interactive Safety Filter
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C]">
            Select Your Stage
          </h2>
          <p className="text-sm text-[#6B6B6B] mt-2 max-w-xl mx-auto">
            Choose your current stage below to see tailored classes and safety guidelines for your session.
          </p>
        </div>

        {/* 3 Interactive Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-white border border-[#E5E5E5] rounded-xl shadow-xs mb-6">
          {stages.map((st) => {
            const isActive = activeStage === st.type;
            return (
              <button
                key={st.type}
                onClick={() => onSelectStage(st.type)}
                className={`relative py-3 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all text-center focus-visible:outline-2 focus-visible:outline-[#8DA399] ${
                  isActive
                    ? 'text-[#2C2C2C] bg-[#F9F7F2] border border-[#8DA399]/40 shadow-xs'
                    : 'text-[#6B6B6B] hover:text-[#2C2C2C] hover:bg-[#F9F7F2]/50'
                }`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span className="flex items-center gap-1">
                    {isActive && <Check className="w-3.5 h-3.5 text-[#8DA399]" />}
                    {st.label}
                  </span>
                  <span className="hidden sm:block text-[11px] font-normal text-[#6B6B6B] truncate max-w-full">
                    {st.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Safety Note Box */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-[#E5E5E5] rounded-xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#8DA399]" />
              <h3 className="text-base font-serif font-bold text-[#2C2C2C]">
                {currentNote.title}
              </h3>
              <span className="text-[11px] font-medium bg-[#8DA399]/15 text-[#768C82] px-2.5 py-0.5 rounded-full">
                {currentNote.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
              {currentNote.note}
            </p>
          </div>

          <button
            onClick={() => onBookStage(activeStage)}
            className="inline-flex items-center justify-center gap-2 bg-[#8DA399] hover:bg-[#768C82] text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl transition-all shrink-0 active:scale-98 shadow-xs"
          >
            <span>{currentNote.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
