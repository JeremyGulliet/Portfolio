"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface AboutAnimationWrapperProps {
  children: ReactNode;
}

export default function AboutAnimationWrapper({
  children,
}: AboutAnimationWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col items-center justify-center gap-20 py-10 md:flex-row md:gap-10 lg:gap-24"
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
