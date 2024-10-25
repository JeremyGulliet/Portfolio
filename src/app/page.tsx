"use client";

import { HeroButtonMobile } from "@/components/Hero/HeroButtonMobile";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroCv from "@/components/Hero/HeroCv";
import HeroPresentation from "@/components/Hero/HeroPresentation";
import Skills from "@/components/skills/Skills";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:w-auto lg:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mt-2 flex w-80 flex-col justify-start gap-3 md:w-auto lg:mt-0">
          <HeroPresentation />
          <HeroCarousel />
          <Skills />
        </div>
        <div className="flex">
          <HeroCv />
        </div>
        <HeroButtonMobile />
      </motion.main>
    </AnimatePresence>
  );
}
