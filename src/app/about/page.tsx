/* eslint-disable react/no-unescaped-entities */
"use client";

import Skills from "@/components/skills/Skills";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import BlurIn from "@/components/magicui/blur-in";


export default function About() {
  return (
    <div className="flex flex-col justify-center items-center  gap-20 md:flex-row md:gap-10 lg:gap-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col justify-center items-center gap-20 md:gap-10 md:w-1/2 lg:border-r-2 lg:pr-4 ">
        <BlurIn
          word="Qui suis-je?"
          className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-transparent p-4"
        />
        <p className=" antialiased px-4 lg:ml-10 lg:p-4 text-sm md:text-lg lg:text-xl font-bold text-justify dark:text-white">
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
          <Button asChild className="mt-4">
            <a
              href="/asset/CV Développeur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-slate-500 hover:bg-slate-400 w-52 rounded-xl"
            >
              <p className="mr-2">Télécharger mon CV</p>
              <IoIosDocument />
            </a>
          </Button>
          <Button asChild className="mt-4">
            <Link
              href="/contact"
              rel="noopener noreferrer"
              className="flex bg-slate-500 hover:bg-slate-400 w-52 rounded-xl"
            >
              <p className="mr-2">Contactez-moi</p>
              <IoIosPhonePortrait />
            </Link>
          </Button>
        </div>
      </div>

      <Image
        src="/asset/moi/me.png"
        alt="Photo"
        width={500}
        height={500}
        className="grayscale rounded-xl w-40 md:w-64 lg:w-96 md:mr-10 ring-2 ring-white"
      />
    </div>
  );
}
