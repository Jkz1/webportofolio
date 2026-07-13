"use client"; // Required in Next.js App Router for Framer Motion

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts hidden and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
      viewport={{ once: true, amount: 0.5 }} // Triggers when 20% of it is in view, only once
      transition={{ duration: 1, ease: "easeOut" }} // Smooth 0.6s animation
    >
      {children}
    </motion.div>
  );
}