import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "971569296653",
  defaultMessage = "Hi Abdul Raoof, I'm reaching out from your portfolio and would like to connect!",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt popup on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/90 backdrop-blur-md border border-[#25D366]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-white pointer-events-none select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-tight">
                Chat on WhatsApp
              </p>
              <p className="text-[10px] text-white/50 font-medium">
                UAE (+971 56 929 6653)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Abdul Raoof on WhatsApp (UAE: +971 56 929 6653)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-black"
      >
        {/* Subtle pulsating radar wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-60" />

        {/* Outer subtle glow ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#25D366]/40 to-emerald-400/40 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

        {/* WhatsApp Icon */}
        <div className="relative z-10 text-white drop-shadow-md">
          <WhatsAppIcon size={28} />
        </div>
      </motion.a>
    </div>
  );
};
