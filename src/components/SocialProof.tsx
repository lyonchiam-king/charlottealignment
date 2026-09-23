import React from 'react';
import { STUDIO_INFO, REVIEWS, INSTAGRAM_PHOTOS } from '../data/studioData';
import { motion } from 'motion/react';
import { Star, Instagram, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Proof Badges Strip */}
        <div className="text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block">
            Verified Community Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C]">
            What Local Mums Say
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {STUDIO_INFO.proofs.map((proof) => (
              <span 
                key={proof}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F9F7F2] border border-[#E5E5E5] text-xs font-semibold text-[#2C2C2C]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#8DA399]" />
                <span>{proof}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Client Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="bg-[#F9F7F2] border border-[#E5E5E5] rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#8DA399] transition-all"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#2C2C2C] leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5]/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#2C2C2C] block">{rev.author}</span>
                  <span className="text-[#6B6B6B]">{rev.location}</span>
                </div>
                <span className="text-[10px] font-medium bg-[#8DA399]/15 text-[#768C82] px-2 py-0.5 rounded-md">
                  {rev.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Embed Grid */}
        <div className="pt-10 border-t border-[#E5E5E5]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Instagram className="w-4 h-4 text-[#8DA399]" />
                <h3 className="text-xl font-serif font-bold text-[#2C2C2C]">
                  Live Studio Feed
                </h3>
              </div>
              <p className="text-xs text-[#6B6B6B]">
                Real clients, real babies, real alignment moments at {STUDIO_INFO.instagramHandle}
              </p>
            </div>

            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8DA399] hover:text-[#768C82] bg-[#F9F7F2] border border-[#E5E5E5] hover:border-[#8DA399] px-4 py-2 rounded-lg transition-all shrink-0"
            >
              <span>View {STUDIO_INFO.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 6 Grid items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {INSTAGRAM_PHOTOS.map((photo) => (
              <a
                key={photo.id}
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#F9F7F2] border border-[#E5E5E5] block"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 text-white text-[10px]">
                  <p className="line-clamp-2 leading-tight">{photo.caption}</p>
                  <div className="flex items-center gap-1 mt-1 text-white/90">
                    <Heart className="w-3 h-3 fill-white" />
                    <span>{photo.likes}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
