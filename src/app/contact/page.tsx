"use client"

/* eslint-disable react/no-unescaped-entities */
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegCopy, FaCheck, FaEnvelope } from "react-icons/fa";
import { Karla, Quicksand } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const karla = Karla({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function Contact() {

  const [copied, setCopied] = useState(false);
  
  // Fonction pour copier l'adresse e-mail dans le presse-papiers
  const copyEmailToClipboard = () => {
    const email = "jrmy.gulliet@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie: ", err);
      });
  };

  return (
    <AnimatePresence mode="wait">
    <motion.div className="flex flex-col justify-center items-center md:flex-row  lg:gap-32"
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col md:w-2/5 gap-10 rounded-xl p-8 mx-4 md:mx-0">
        <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-slate-800 dark:text-white text-justify`}>
          CONTACTEZ-MOI
        </h1>
        <p className={`${karla.className} text-md md:text-lg font-bold text-slate-800 dark:text-white text-justify`}>
          Je suis disponible pour toutes les opportunités qui se présenteront à
          moi. Je peux travailler seul ou en équipe. <br /> <br />
          Vous pouvez me contacter par email ou via LinkedIn.
        </p>
        <div className="flex flex-col gap-4">
          {/* Bouton pour copier l'adresse e-mail */}
            <Button
            className={`${karla.className} dark:text-white dark:font-normal text-slate-800 font-semibold bg-emerald-300  dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl cursor-pointer transition ease-in-out duration-150 hover:scale-105`}
            onClick={copyEmailToClipboard}
            >
            {copied ? (
              <>
              <FaCheck className="mr-2" />
              <p>Copiée !</p>
              </>
            ) : (
              <>
              <p className="mr-2">jrmy.gulliet@gmail.com</p>
              <FaRegCopy />
              </>
            )}
            </Button>

          {/* Bouton pour ouvrir l'e-mail */}
            <Button
            asChild
            className={`${karla.className} flex dark:text-white dark:font-normal text-slate-800 font-semibold bg-emerald-300 dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl transition ease-in-out duration-150 hover:scale-105`}
            >
            <Link href="mailto:jrmy.gulliet@gmail.com">
              <p className="mr-2">Envoyer un email </p>
              <FaEnvelope />
            </Link>
            </Button>
        </div>
      </div>
      <Image
        alt="logo"
        src="/asset/Contact/contact.png"
        width={400}
        height={400}
        className="w-auto h-auto"
      />
      </motion.div>
      </AnimatePresence>
  );
}
