"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProjectsAnimationWrapperProps {
  children: ReactNode;
  onClick: (title: string) => void;
}

export default function ProjectsAnimationWrapper({
  children,
  onClick,
}: ProjectsAnimationWrapperProps) {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/projets/${title}`);
    onClick(title);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="mb-10 flex w-screen flex-col items-center justify-center gap-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
