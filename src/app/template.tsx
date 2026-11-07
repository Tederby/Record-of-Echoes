"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Velvety clockwork damping
      }}
    >
      {children}
    </motion.div>
  );
}
