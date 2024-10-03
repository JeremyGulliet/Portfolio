"use client"

import { FocusCards } from "@/components/ui/focus-cards";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { SkillTooltip } from "@/components/skills/SkillTooltip";

export default function Projets() {
  const cards = [
    {
      title: "DressCode",
      description:
        "Application mobile qui permet d'avoir son dressing à portée de main et de générer des tenues aléatoirement.",
      src: "/asset/Projets/dressing.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React Native / Expo
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Redux
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            ExpressJS
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            MongoDB
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Mongoose
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open(
          "https://www.linkedin.com/posts/j%C3%A9r%C3%A9my-gulliet-1ba063268_dresscode-version-2-hello-voici-activity-7206633007917449218-UOHA?utm_source=share&utm_medium=member_desktop",
          "_blank",
        ),
    },
    {
      title: "Jeu du serpent",
      description: "Le jeu qui nous a accompagné sur nos Nokia 3310.",
      src: "/asset/Projets/Dragon-rafiki.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open("https://snake-sepia-chi.vercel.app", "_blank"),
    },
    {
      title: "Portfolio",
      description: "Premier projet web en solo",
      src: "/asset/Projets/Portfolio-rafiki.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Next JS
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TypeScript
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TailwindCSS
          </Badge>
        </div>
      ),
    },
    {
      title: "Section Prix",
      description:
        "Réalisation d'une section prix avec conversion de la devise",
      src: "/asset/Projets/Pricing plans-rafiki.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Next JS
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TypeScript
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TailwindCSS
          </Badge>
        </div>
      ),
      onClick: () => window.open("https://page-price.vercel.app/", "_blank"),
    },
    {
      title: "Landing Page",
      description: "Réalisation d'une landing page pour une entreprise fictive",
      src: "/asset/Projets/Landing page-rafiki.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Next JS
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TypeScript
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TailwindCSS
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open("https://landing-page-spikes.vercel.app/", "_blank"),
    },
    {
      title: "Page Produit",
      description: "Réalisation d'une page produit pour une entreprise fictive",
      src: "/asset/Projets/Product presentation-rafiki.png",
      badge: (
        <div className="flex flex-wrap items-center justify-start gap-2">
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            React
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            Next JS
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TypeScript
          </Badge>
          <Badge className="rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white">
            TailwindCSS
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open("https://page-produit-spikes.vercel.app/", "_blank"),
    },
  ];
 
  return (
    <main className=" flex flex-col justify-center items-center w-screen gap-10 px-4 mb-10">
      <div className=" w-screen h-20 md:w-3/6 md:h-36 relative flex flex-col justify-center items-center">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 dark:bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 dark:bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 dark:bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 dark:bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <div className="absolute inset-x-20 bottom-0 dark:bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 bottom-0 dark:bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 bottom-0 dark:bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 bottom-0 dark:bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <h1 className="pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b dark:from-blue-200 dark:via-blue-400 dark:to-blue-600 dark:bg-clip-text text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-slate-800 dark:text-transparent p-4">
          MES PROJETS
        </h1>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full absolute inset-0"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-inherit rounded-xl [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <FocusCards cards={cards} />
      <SkillTooltip />
    </main>
  );
    
}
