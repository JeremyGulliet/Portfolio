"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center border-b-2 border-slate-600 dark:border-white pb-4">
      <motion.h1
        ref={ref}
        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-bold dark:font-semibold dark:text-transparent z-[20] dark:bg-clip-text text-slate-600 dark:bg-gradient-to-r from-cyan-500 to-indigo-500 dark:hover:bg-gradient-to-r dark:hover:from-indigo-500 dark:hover:to-cyan-500"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Mes compétences techniques
      </motion.h1>
    </div>
  );
};

export default SkillText;
