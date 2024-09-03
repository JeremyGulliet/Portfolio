"use client"

/* eslint-disable react/no-unescaped-entities */
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegCopy, FaCheck, FaEnvelope } from "react-icons/fa";

import React, { useState } from "react";

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
    <main className="flex flex-col justify-center items-center md:flex-row  lg:gap-32">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col md:w-2/5 gap-10 bg-slate-300 dark:bg-inherit rounded-xl p-8 mx-4 md:mx-0">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-justify">
          CONTACTEZ-MOI
        </h1>
        <p className="text-md md:text-lg font-bold dark:text-white text-justify">
          Je suis à la recherche de toutes les opportunitées qui se présenteront
          à moi. Je peux travailler seul ou en équipe. <br /> <br />
          Vous pouvez me contacter par email ou via LinkedIn.
        </p>
        <div className="flex flex-col gap-4">
          {/* Bouton pour copier l'adresse e-mail */}
          <Button
            className="bg-slate-400 dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl cursor-copy"
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
            className="flex bg-slate-400 dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl"
          >
            <a href="mailto:jrmy.gulliet@gmail.com">
              <p className="mr-2">Envoyer un email </p>
              <FaEnvelope />
            </a>
          </Button>
        </div>
      </div>
      <Image
        alt="logo"
        src="/asset/Contact/contact.png"
        width={500}
        height={500}
        className="w-auto h-auto"
      />
    </main>
  );
}
