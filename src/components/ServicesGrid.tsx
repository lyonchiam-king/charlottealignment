import React, { useState } from 'react';
import { SERVICES, ServiceCard } from '../data/studioData';
import { ServiceModal } from './ServiceModal';
import { motion } from 'motion/react';
import { Info, Calendar } from 'lucide-react';

interface ServicesGridProps {
  activeStage: 'Prenatal' | 'Postnatal' | 'General';
  onBookService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  activeStage,
  onBookService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  // Filter services based on activeStage, maintaining order
  const filteredServices = SERVICES.filter((s) => s.stages.includes(activeStage));

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block mb-2">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C]">
              Private Reformer Offerings
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-xs">
            Filtered for <span className="font-semibold text-[#2C2C2C]">{activeStage}</span>. Tap any card for complete session details.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group bg-[#F9F7F2] border border-[#E5E5E5] rounded-xl overflow-hidden hover:border-[#8DA399] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Area */}
                <div 
                  onClick={() => setSelectedService(service)}
                  className="relative h-48 w-full overflow-hidden bg-white cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  
                  {/* Info Badge Overlay */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#2C2C2C] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                    <Info className="w-3 h-3 text-[#8DA399]" />
                    <span>View Details</span>
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-serif font-bold text-[#2C2C2C]">
                      {service.name}
                    </h3>
                  </div>

                  {/* Clean unboxed tags with separator */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8DA399]">
                    <span>{service.tags[0]}</span>
                    <span aria-hidden="true" className="text-[#6B6B6B] font-normal">·</span>
                    <span>{service.tags[1]}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {service.benefits}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-[#E5E5E5]/60 mt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors"
                >
                  More Info
                </button>

                <button
                  onClick={() => onBookService(service.name)}
                  className="inline-flex items-center gap-1.5 bg-[#8DA399] hover:bg-[#768C82] text-white text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-xs active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Session</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Shared Element Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={onBookService}
      />
    </section>
  );
};
