"use client";

import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroCv from "@/components/Hero/HeroCv";
import HeroPresentation from "@/components/Hero/HeroPresentation";
import { SkillTooltip } from "@/components/skills/SkillTooltip";
import React from "react";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <HeroCv />
        </div>
        <div className="col-span-2">
          <HeroPresentation />
        </div>
        <div className="row-span-2 col-span-2">
          <HeroCarousel/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-4 rounded-xl">
        <SkillTooltip />
      </div>
    </div>
  );
}
