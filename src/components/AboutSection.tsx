import React from 'react';
import { STUDIO_INFO, MOTHERHOOD_TIMELINE } from '../data/studioData';
import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F9F7F2] border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Two Column Layout: Charlotte Photo & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Charlotte Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm bg-white aspect-3/4">
              <img
                src="/src/assets/images/charlotte_portrait_1790164785775.jpg"
                alt="Charlotte - Reformer Pilates Instructor in Eccles"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white border border-[#E5E5E5] p-3 rounded-xl shadow-md flex items-center gap-2 max-w-[200px]">
              <ShieldCheck className="w-5 h-5 text-[#8DA399] shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="font-bold block text-[#2C2C2C]">Charlotte InAlignment</span>
                <span className="text-[#6B6B6B]">Maternal Alignment Specialist</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-7 space-y-5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block">
              About Your Instructor
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C] leading-snug">
              Welcome to Charlotte InAlignment
            </h2>

            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              I founded Charlotte InAlignment in Eccles to create the private sanctuary I wished existed — a place where body alignment comes first, every movement is guided with safety and care, and new mums never have to worry about childcare or gym intimidation.
            </p>

            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Having worked extensively with prenatal and postnatal bodies, I know how vital gentle, precise reformer movement is for your changing anatomy. Whether you are navigating pregnancy lower back tightness, recovering deep core stability post-birth, or simply seeking 1-on-1 reformer focus, our Eccles studio is built for you.
            </p>

            {/* Proof checklist */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#2C2C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#8DA399]" />
                <span>Babies are always welcome right beside your reformer</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#2C2C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#8DA399]" />
                <span>Diastasis recti screening & pelvic floor safety included</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#2C2C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#8DA399]" />
                <span>100% private Eccles studio — no crowded public classes</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-[#8DA399] hover:bg-[#768C82] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-xl transition-all shadow-xs active:scale-98"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Book Private Session</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* SIGNATURE MOMENT: Vertical Motherhood Timeline */}
        <div id="timeline" className="pt-8 border-t border-[#E5E5E5]">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block mb-2">
              Long-Term Maternal Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C]">
              Your Motherhood Movement Journey
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-2 max-w-xl mx-auto">
              How Charlotte supports your body through conception, pregnancy, postnatal recovery, and long-term strength.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-12">
            
            {/* Animated vertical sage line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-0.5 bg-[#8DA399] origin-top"
            />

            {MOTHERHOOD_TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative bg-white border border-[#E5E5E5] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#8DA399] transition-all"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[1.85rem] sm:-left-[2.75rem] top-6 w-5 h-5 rounded-full bg-[#8DA399] border-4 border-[#F9F7F2] shadow-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-serif font-bold text-[#2C2C2C]">
                    {item.phase}
                  </h3>
                  <span className="text-xs font-semibold text-[#8DA399] bg-[#8DA399]/15 px-3 py-1 rounded-full w-fit">
                    {item.timing}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-[#2C2C2C] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#8DA399]" />
                    <span>Recommended: {item.recommendation}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {item.focus}
                  </p>
                  <p className="text-xs text-[#6B6B6B] italic pt-1 border-t border-[#E5E5E5]/50">
                    {item.details}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
