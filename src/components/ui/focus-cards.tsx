"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {Karla, Quicksand} from "next/font/google";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  subsets: ["latin"],
});

const karla = Karla({
  subsets: ["latin"],
});

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    isMobile,
    isTablet,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    isMobile: boolean;
    isTablet: boolean;
  }) => (
    <div
      onMouseEnter={() => !isMobile && !isTablet && setHovered(index)}
      onMouseLeave={() => !isMobile && !isTablet && setHovered(null)}
      onClick={card.onClick} // Ajout de la gestion du clic
      className={cn(
        "relative h-60 w-full overflow-hidden rounded-xl bg-emerald-100 from-black via-blue-950 to-black shadow-xl ring-2 ring-emerald-200 transition-all duration-300 ease-out dark:bg-gradient-to-r dark:ring-white md:h-96",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
        card.onClick && "cursor-pointer", // Ajout du curseur pointeur si onClick est présent
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        width={500}
        height={500}
        className="absolute inset-0 object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
          hovered === index || isMobile || isTablet
            ? "opacity-100"
            : "opacity-0",
        )}
      >
        <div>
          <h1
            className={`${quicksand.className} mb-4 border-b-2 pb-4 text-xl font-bold text-white md:text-4xl`}
          >
            {card.title}
          </h1>
          <p
            className={`${karla.className} text-md mb-4 font-semibold text-white`}
          >
            {card.description}
          </p>
          <span>{card.badge}</span>
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

type Card = {
  id: number
  title: string;
  description: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    // Fonction pour vérifier si l'appareil est un mobile ou une tablette
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1280);
    };

    // Vérifier au montage
    checkDeviceType();

    // Mettre à jour lors du redimensionnement
    window.addEventListener("resize", checkDeviceType);

    // Nettoyage de l'effet
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <div className="md:grid-cols-2 xl:grid-cols-4 mx-auto grid w-full grid-cols-1 gap-10 2xl:w-5/6 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      ))}
    </div>
  );
}
