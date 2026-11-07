"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-[#C5A059] bg-[#141311] text-[#C5A059] transition-all duration-500 hover:bg-[#25221E] hover:border-[#C5A059] focus:outline-none active:scale-95"
          aria-label="Ascend to top of dossier"
          title="Return to top"
        >
          {/* Inner inset border */}
          <div className="absolute inset-0.5 border border-[#C5A059]/30 transition-colors group-hover:border-[#C5A059]/70" />
          
          {/* Corner diamond anchor */}
          <div className="absolute -top-1 -left-1 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />
          <div className="absolute -bottom-1 -right-1 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />

          <span className="relative font-serif text-sm font-bold transition-transform duration-500 group-hover:-translate-y-0.5">
            ▲
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
