"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}