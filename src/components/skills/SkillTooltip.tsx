"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import SkillText from "./SkillText";


export function SkillTooltip() {

    const AllSkills1 = [
      {
        id: 1,
        name: "HTML 5",
        image: "/asset/Logo/HTML5.png",
      },
      {
        id: 2,
        name: "CSS 3",
        image: "/asset/Logo/CSS3.png",
      },
      {
        id: 3,
        name: "Java Script",
        image: "/asset/Logo/js.png",
      },
      {
        id: 4,
        name: "React",
        image: "/asset/Logo/react.png",
      },
      {
        id: 5,
        name: "Type Script",
        image: "/asset/Logo/ts.png",
      },

      {
        id: 6,
        name: "Tailwind CSS",
        image: "/asset/Logo/tailwind.png",
      },

      {
        id: 7,
        name: "ReactNative",
        image: "/asset/Logo/react-native.png",
      },

      {
        id: 8,
        name: "Express JS",
        image: "/asset/Logo/express.png",
      },
      

    {
      id: 9,
      name: "Node JS",
      image: "/asset/Logo/node-js.png",
    },
    {
      id: 10,
      name: "Next JS",
      image: "/asset/Logo/Next.png",
    },
    {
      id: 11,
      name: "Vite JS",
      image: "/asset/Logo/Vite.js.png",
    },
    {
      id: 12,
      name: "Expo",
      image: "/asset/Logo/expo-a.png",
    },

    {
      id: 13,
      name: "Postgre SQL",
      image: "/asset/Logo/postgresql.png",
    },
    {
      id: 14,
      name: "MongoDB",
      image: "/asset/Logo/MongoDB.png",
    },
    {
      id: 15,
      name: "Prisma",
      image: "/asset/Logo/prisma.webp",
    },
    {
      id: 16,
      name: "Mongoose",
      image: "/asset/Logo/Mongoose.js.png",
    },
  ];
   

  return (
    <div className="hidden md:flex items-center mjustify-center pt-10 px-6 border-t-2 border-slate-800 dark:border-white">
          <AnimatedTooltip items={AllSkills1} />     
    </div>
  );
}