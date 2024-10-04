/* eslint-disable react/no-unescaped-entities */
"use client";

import Skills from "@/components/skills/Skills";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function About() {
  return (
    <main className="flex flex-col justify-center items-center gap-20 md:flex-row md:gap-10 lg:gap-24 py-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col justify-center items-center gap-14 md:gap-10 md:w-1/2 lg:border-r-2 lg:border-slate-600 dark:border-white lg:pr-4 ">
        <h1 className="pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 dark:bg-clip-text text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-slate-800 dark:text-transparent p-4">
          Qui suis-je?
        </h1>

        <p className=" antialiased px-4 lg:ml-10 lg:p-4 text-md md:text-lg lg:text-xl font-bold text-justify text-slate-800 dark:text-white">
          Je m'appelle Jérémy et après plus de 10 ans dans le monde de
          l'immobilier, j'ai décidé de me reconvertir dans le domaine de la
          tech! Durant ces années, j’ai appris à travailler en équipe, à gérer
          des projets et à être autonome.
          <br /> <br />
          La satisfaction client a toujours été ma priorité.
          <br /> <br />
          Je suis maintenant développeur full stack web et mobile et je suis
          prêt à vous accompagner dans tous vos projets.
        </p>
        {/* Bouton pour ouvrir le CV en PDF */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
          <Button
            asChild
            className=" flex bg-emerald-300 dark:dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl mt-4 w-52 transition ease-in-out duration-150 hover:scale-105 dark:text-white dark:font-normal text-slate-800 font-semibold"
          >
            <Link
              href="/asset/CV Développeur.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mr-2">Mon CV</p>
              <IoIosDocument />
            </Link>
          </Button>
          <Button
            asChild
            className="flex bg-emerald-300 dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl mt-4 transition ease-in-out duration-150 hover:scale-105 dark:text-white dark:font-normal text-slate-800 font-semibold"
          >
            <Link href="/contact" rel="noopener noreferrer">
              <p className="mr-2">Contactez-moi</p>
              <IoIosPhonePortrait />
            </Link>
          </Button>
        </div>
      </div>

      <Image
        src="/asset/Moi/me.png"
        alt="Photo"
        width={300}
        height={300}
        priority={true}
        quality={50}
        className="grayscale rounded-xl  md:mr-10 w-56 md:w-64 lg:w-auto lg:h-auto"
      />
    </main>
  );
}
