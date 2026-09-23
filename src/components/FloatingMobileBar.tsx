import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingMobileBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past ~250px (hero)
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waPreFilledText = encodeURIComponent(
    `Hi Charlotte! I'd like to inquire about private reformer Pilates sessions in Eccles.`
  );
  const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${waPreFilledText}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E5E5] px-4 pt-3 shadow-lg"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            
            {/* Call Studio Button */}
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-[#F9F7F2] hover:bg-[#E5E5E5] text-[#2C2C2C] text-xs font-bold py-3 rounded-xl border border-[#E5E5E5] transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#8DA399]" />
              <span>Call Studio</span>
            </a>

            {/* WhatsApp Chat Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 rounded-xl transition-all shadow-xs active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
