/* eslint-disable react/no-unescaped-entities */
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function HeroCv() {

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white text-sm  font-normal mb-8">
            Bootcamp à la Capsule pour apprendre les bases de la programmation,
            React et React Native.
          </p>
          <p className="text-neutral-800 dark:text-white text-sm font-normal mb-8">
            Création de l'application mobile DressCode avec React Native.
          </p>
          <p className="text-neutral-800 dark:text-white text-sm font-normal mb-8">
            Perfectionnement en React (NextJS, TailwindCSS et différentes
            librairie) et React Native (Expo).
          </p>
          <p className="text-neutral-800 dark:text-white text-sm font-normal mb-8">
            Je réalise différents challenges pour continuer à apprendre sur des
            plateforme comme Spikes, Frontend Mentor...
          </p>
          <Image
            src="/asset/projets/Programmer-rafiki.png"
            alt="hero template"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full "
          />
        </div>
      ),
    },

    {
      title: "2023 et Avant",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white text-sm font-normal mb-8">
            Après une dizaine d'année dans l'immobilier, j'ai démissioné pour
            pouvoir me consacrer à cette reconversion avant de commencer ma
            formation à la Capsule.
          </p>

          <Image
            src="/asset/projets/house.png"
            alt="hero template"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full"
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
