"use client";

import { HeroButtonMobile } from "@/components/Hero/HeroButtonMobile";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroCv from "@/components/Hero/HeroCv";
import HeroPresentation from "@/components/Hero/HeroPresentation";
import Skills from "@/components/skills/Skills";
import React from "react";



export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center lg:flex-row md:w-auto gap-4 px-4 py-6">
      <div className="flex flex-col justify-start w-80 md:w-auto mt-2 lg:mt-0 gap-3 ">
        <HeroPresentation />
        <HeroCarousel />
        <Skills />
      </div>
      <div className="flex">
        <HeroCv />
      </div>
      <HeroButtonMobile />
    </main>
  );
}
