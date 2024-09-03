import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function HeroCv() {

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Bootcamp à la Capsule pour apprendre les bases de la programmation,
            React et React Native.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Création de l'application mobile DressCode avec React Native.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Perfectionnement en React (NextJS, TailwindCSS et différentes
            librairie) et React Native (Expo).
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Je réalise différents challenges pour continuer à apprendre sur des plateforme comme Spikes, Frontend Mentor...
          </p>
          <Image
            src="/asset/dressing.png"
            alt="hero template"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            J'ai décidé de me lancer dans cette reconversion. J'ai donc pris les
            choses en main afin de pouvoir atteindre cet objectif.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            J'ai démissioner pour pouvoir consacrer du temps à l'apprentissage
            des bases de la programmation, le temps de commencer ma formation à
            la Capsule.
          </p>
          <Image
            src="/asset/dressing.png"
            alt="hero template"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Avant",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Une expérience d'une dizaine d'année dans l'immobilier. J'ai appris
            à gérer des porte-feuilles immobilier, à gérer diverses projets seul
            et en équipe, à manager et former des collaborateurs.
          </p>
          {/* <Image
            src="/asset/dressing.png"
            alt="cards template"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      ),
    },
  ];
  return (
      <div className="w-full h-full rounded-xl border-none">        
          <Timeline data={data} />      
      </div>
  );
}
