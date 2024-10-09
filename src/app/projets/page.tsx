"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { SkillTooltip } from "@/components/skills/SkillTooltip";
import cardsData from "./data.json"; // Importer les données

export default function Projets() {
  const cards = cardsData.map((card) => ({
    ...card,
    badge: (
      <div className="flex flex-wrap items-center justify-start gap-2">
        {card.badges.map((badge, index) => (
          <Badge
            key={index}
            className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white"
          >
            {badge}
          </Badge>
        ))}
      </div>
    ),
    onClick: () => card.link && window.open(card.link, "_blank"),
  }));

  return (
    <main className="mb-10 flex w-screen flex-col items-center justify-center gap-10 px-4">
      <div className="relative flex h-20 w-screen flex-col items-center justify-center md:h-36 2xl:w-5/6">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 from-transparent via-indigo-500 to-transparent blur-sm dark:bg-gradient-to-r" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 from-transparent via-indigo-500 to-transparent dark:bg-gradient-to-r" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 from-transparent via-sky-500 to-transparent blur-sm dark:bg-gradient-to-r" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 from-transparent via-sky-500 to-transparent dark:bg-gradient-to-r" />
        <div className="absolute inset-x-20 bottom-0 h-[2px] w-3/4 from-transparent via-indigo-500 to-transparent blur-sm dark:bg-gradient-to-r" />
        <div className="absolute inset-x-20 bottom-0 h-px w-3/4 from-transparent via-indigo-500 to-transparent dark:bg-gradient-to-r" />
        <div className="absolute inset-x-60 bottom-0 h-[5px] w-1/4 from-transparent via-sky-500 to-transparent blur-sm dark:bg-gradient-to-r" />
        <div className="absolute inset-x-60 bottom-0 h-px w-1/4 from-transparent via-sky-500 to-transparent dark:bg-gradient-to-r" />

        {/* Core component */}
        <h1 className="pointer-events-none z-10 whitespace-pre-wrap p-4 text-center text-3xl font-bold leading-none tracking-tighter text-slate-800 dark:bg-gradient-to-b dark:from-blue-200 dark:via-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent md:text-5xl lg:text-6xl">
          MES PROJETS
        </h1>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute inset-0 h-full w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-inherit [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <FocusCards cards={cards} />
      <SkillTooltip />
    </main>
  );
}
