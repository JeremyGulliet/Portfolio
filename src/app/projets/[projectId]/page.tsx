import { Button } from "@/components/ui/button";
import cardsData from "../data.json";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Karla, Quicksand } from "next/font/google";
import React from "react";

const karla = Karla({
  subsets: ["latin"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
});


export default function Project({ params }: { params: { projectId: string } }) {
  const { projectId } = params;

  // Décoder projectId pour gérer les espaces et autres caractères spéciaux
  const decodedProjectId = decodeURIComponent(projectId);

  const project = cardsData.find((card) => card.title === decodedProjectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`mt-4 flex flex-col ${karla.className}`}>
      {/* Ecran mobile et lg */}
      <div className="flex flex-col items-center justify-center gap-6 p-4 xl:hidden">
        <div className="flex w-5/6 flex-col gap-8 lg:w-full">
          <Link href="/projets">
            <div className="flex items-center gap-2 hover:underline dark:text-white">
              <IoArrowBackCircleOutline size={24} />
              <p>Retour aux projets</p>
            </div>
          </Link>
          <div className="">
            <Image
              src={project.srcprojet}
              alt={project.title}
              width={800}
              height={200}
              className="rounded-2xl"
            />
          </div>
          <h1
            className={`text-4xl font-bold text-slate-800 dark:text-white ${quicksand.className}`}
          >
            {project.title}
          </h1>
          <p className="text-lg whitespace-pre-line text-justify text-slate-600 dark:text-slate-300">
            {project.descriptionproject}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge, index) => (
              <span
                key={index}
                className="rounded-2xl bg-emerald-300 px-3 py-1 text-sm text-slate-800 dark:bg-blue-500 dark:text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        {project.link && (
          <div className="mt-12 flex items-center justify-center">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button className="h-16 w-64 cursor-pointer rounded-2xl bg-emerald-300 from-blue-500 via-blue-600 to-blue-700 text-xl font-bold text-slate-800 transition duration-150 ease-in-out hover:scale-105 dark:bg-gradient-to-r dark:text-white">
                Voir le résultat
              </Button>
            </Link>
          </div>
        )}
      </div>
      {/* Ecran xl et supérieur */}
      <div className="hidden items-center justify-center gap-6 p-4 xl:mx-6 xl:flex xl:flex-row xl:gap-16 2xl:mx-0">
        <div className="flex w-1/3 flex-col gap-8">
          <Link href="/projets">
            <div className="flex items-center gap-2 hover:underline dark:text-white">
              <IoArrowBackCircleOutline size={24} />
              <p>Retour aux projets</p>
            </div>
          </Link>
          <h1
            className={`text-6xl font-bold text-slate-800 dark:text-white ${quicksand.className}`}
          >
            {project.title}
          </h1>
          <p className="text-lg whitespace-pre-line text-justify text-slate-600 dark:text-slate-300">
            {project.descriptionproject}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge, index) => (
              <span
                key={index}
                className="rounded-2xl bg-emerald-300 px-3 py-1 text-sm text-slate-800 dark:bg-blue-500 dark:text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src={project.srcprojet}
            alt={project.title}
            width={800}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div>
        {project.link && (
          <div className="mt-12 hidden items-center justify-center xl:flex">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button className="h-16 w-64  cursor-pointer rounded-2xl bg-emerald-300 from-blue-500 via-blue-600 to-blue-700 text-2xl font-bold text-slate-800 transition duration-150 ease-in-out hover:scale-105 dark:bg-gradient-to-r dark:text-white">
                Voir le résultat
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
