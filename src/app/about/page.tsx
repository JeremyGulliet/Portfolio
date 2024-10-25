/* eslint-disable react/no-unescaped-entities */
"use client";

import Skills from "@/components/skills/Skills";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import { Karla, Quicksand} from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const karla = Karla({
  subsets: ["latin"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
});


export default function About() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col items-center justify-center gap-20 py-10 md:flex-row md:gap-10 lg:gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="flex flex-col items-center justify-center gap-14 dark:border-white md:w-1/2 md:gap-10 lg:border-r-2 lg:border-slate-600 lg:pr-4">
          <h1 className={`${quicksand.className} pointer-events-none z-10 whitespace-pre-wrap from-blue-300 via-blue-500 to-blue-800 p-4 text-center text-3xl font-bold leading-none tracking-tighter text-slate-800 dark:bg-gradient-to-b dark:bg-clip-text dark:text-transparent md:text-5xl lg:text-6xl`}>
            Qui suis-je?
          </h1>

          <p className={`${karla.className} text-md px-4 text-justify font-bold text-slate-800 antialiased dark:text-white md:text-lg lg:ml-10 lg:p-4 lg:text-xl`}>
            Je m'appelle Jérémy et après plus de 10 ans dans le monde de
            l'immobilier, j'ai décidé de me reconvertir dans le domaine de la
            tech! Durant ces années, j’ai appris à travailler en équipe, à gérer
            des projets et à être autonome.
            <br /> <br />
            Je suis un développeur soucieux de la satisfaction de ces clients.
            Je suis disponible et réactif durant toute la collaboration.
            <br />
            Je suis spécialisé dans la création de site vitrine et de landing
            page mais je peux également réaliser des applications web avec
            React(Next JS) et mobiles avec React Native (Expo).
            <br /> <br />
            Je ne fais pas que de l’intégration à partir d'une maquette. <br />
            Je peux travailler sur un projet en partant de 0. Je peux vous aider
            a réaliser le design (UI/UX) de votre projet.
            <br /> <br />
            Je suis également apte à travailler en équipe car je suis formé à la
            méthode AGILE (SCRUM).
          </p>
          {/* Bouton pour ouvrir le CV en PDF */}
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-10">
            <Button
              asChild
              className="mt-4 flex w-52 rounded-xl bg-emerald-300 from-blue-500 via-blue-600 to-blue-700 font-semibold text-slate-800 transition duration-150 ease-in-out hover:scale-105 dark:dark:bg-gradient-to-r dark:font-normal dark:text-white"
            >
              <Link
                href="/asset/CV Développeur.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={`${karla.className} mr-2`}>Mon CV</p>
                <IoIosDocument />
              </Link>
            </Button>
            <Button
              asChild
              className="mt-4 flex w-52 rounded-xl bg-emerald-300 from-blue-500 via-blue-600 to-blue-700 font-semibold text-slate-800 transition duration-150 ease-in-out hover:scale-105 dark:bg-gradient-to-r dark:font-normal dark:text-white"
            >
              <Link href="/contact" rel="noopener noreferrer">
                <p className={`${karla.className} mr-2`}>Contactez-moi</p>
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
          className="w-56 rounded-xl grayscale md:mr-10 md:w-64 lg:h-auto lg:w-auto"
        />
      </motion.div>
    </AnimatePresence>
  );
}
