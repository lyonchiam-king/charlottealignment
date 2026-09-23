import React from 'react';
import { ServiceCard } from '../data/studioData';
import { X, CheckCircle, Clock, Shield, Sparkles, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceModalProps {
  service: ServiceCard | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E5E5E5] shadow-xl overflow-hidden z-10 my-8"
        >
          {/* Image Banner */}
          <div className="relative h-48 sm:h-56 w-full bg-[#F9F7F2]">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C2C2C] transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md text-white inline-block mb-1">
                {service.subtitle}
              </span>
              <h2 className="text-2xl font-serif font-bold drop-shadow-xs">
                {service.name}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-5 text-[#2C2C2C] max-h-[60vh] overflow-y-auto">
            
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              {service.fullDetail.description}
            </p>

            {/* Key Meta Details */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#E5E5E5] text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8DA399]" />
                <div>
                  <span className="text-[#6B6B6B] block">Duration</span>
                  <span className="font-semibold">{service.fullDetail.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8DA399]" />
                <div>
                  <span className="text-[#6B6B6B] block">Investment</span>
                  <span className="font-semibold tabular-nums">{service.fullDetail.price}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                What's Included
              </h3>
              <ul className="space-y-2">
                {service.fullDetail.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C2C2C]">
                    <CheckCircle className="w-4 h-4 text-[#8DA399] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Note */}
            <div className="p-3.5 bg-[#F9F7F2] rounded-xl border border-[#E5E5E5] text-xs space-y-1">
              <span className="font-semibold text-[#8DA399] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Safety & Guidance</span>
              </span>
              <p className="text-[#6B6B6B] leading-relaxed">
                {service.fullDetail.safetyNote}
              </p>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 bg-[#F9F7F2] border-t border-[#E5E5E5] flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-xs text-[#6B6B6B] hover:text-[#2C2C2C] font-medium px-3 py-2"
            >
              Back
            </button>

            <button
              onClick={() => {
                onBookService(service.name);
                onClose();
              }}
              className="inline-flex items-center gap-2 bg-[#8DA399] hover:bg-[#768C82] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-xs active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {service.name}</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
