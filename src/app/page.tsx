"use client";

import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroCv from "@/components/Hero/HeroCv";
import HeroPresentation from "@/components/Hero/HeroPresentation";
import Skills from "@/components/skills/Skills";
import { SkillTooltip } from "@/components/skills/SkillTooltip";
import React from "react";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col lg:grid lg:grid-rows-3 lg:grid-flow-col gap-4 w-full ">
        <div className="md:row-span-3">
          <HeroCv />
        </div>
        <div className="md:col-span-2">
          <HeroPresentation />
        </div>
        <div className="flex flex-col w-96 gap-2 p-4 md:p-0 md:w-full lg:row-span-2 lg:col-span-2">
          <Skills />
          <HeroCarousel />
        </div>
      </div>
      {/* <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full lg:mt-4 lg:rounded-xl">
        <SkillTooltip />
      </div> */}
      {/* <div className="flex flex-col lg:hidden justify-center items-center rounded-xl w-5/6">
        <Skills />
      </div> */}
    </main>
  );
}
