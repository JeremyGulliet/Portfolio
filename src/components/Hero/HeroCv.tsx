/* eslint-disable react/no-unescaped-entities */
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function HeroCv() {

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-slate-800 dark:text-white">
            Réalisation du site professionnel de Laura Mezzone - Ghostwriter
          </p>
          <p className="mb-8 text-sm font-normal text-slate-800 dark:text-white">
            Réalisation de mon portfolio avec Next.js et Tailwind CSS.
          </p>
          <p className="mb-8 text-sm font-normal text-slate-800 dark:text-white">
            Je réalise différents challenges pour continuer à apprendre sur des
            plateformes comme Spikes, Frontend Mentor...
          </p>
          <p className="mb-8 text-sm font-normal text-slate-800 dark:text-white">
            Création de l'application mobile DressCode avec React Native.
          </p>
          <p className="mb-2 text-sm font-normal text-slate-800 dark:text-white">
            Bootcamp à la Capsule pour apprendre les bases de la programmation,
            React et React Native.
          </p>

          <Image
            src="/asset/Projets/Programmer-rafiki.png"
            alt="hero template"
            width={200}
            height={200}
            className="w-full rounded-lg object-cover"
          />
        </div>
      ),
    },

    {
      title: "2023 et Avant",
      content: (
        <div>
          <p className="mb-2 text-sm font-normal text-slate-800 dark:text-white">
            Après une dizaine d'années dans l'immobilier, j'ai démissioné pour
            pouvoir me consacrer à cette reconversion avant de commencer ma
            formation à La Capsule.
          </p>

          <Image
            src="/asset/Projets/house.png"
            alt="hero template"
            width={200}
            height={200}
            className="w-full rounded-lg object-cover"
          />
        </div>
      ),
    },
  ];
  return (
      <div className="rounded-xl border-none">        
          <Timeline data={data} />      
      </div>
  );
}
