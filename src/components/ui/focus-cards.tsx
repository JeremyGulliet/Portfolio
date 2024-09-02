"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";


export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    isMobile,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    isMobile: boolean;
  }) => (
    <div
      onMouseEnter={() => !isMobile && setHovered(index)}
      onMouseLeave={() => !isMobile && setHovered(null)}
      onClick={card.onClick} // Ajout de la gestion du clic
      className={cn(
        "rounded-xl relative shadow-xl bg-gray-200 dark:bg-gradient-to-r from-black  via-blue-950  to-black overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ring-2 ring-slate-500 dark:ring-white",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        card.onClick && "cursor-pointer" // Ajout du curseur pointeur si onClick est présent
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index || isMobile ? "opacity-100" : "opacity-0"
        )}
      >
        <div>
          <h1 className="mb-4 text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </h1>
          <p className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-4">
            {card.description}
          </p>
          <span>{card.badge}</span>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  description: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Fonction pour vérifier si l'appareil est un mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Vérifier au montage
    checkIfMobile();

    // Mettre à jour lors du redimensionnement
    window.addEventListener("resize", checkIfMobile);

    // Nettoyage de l'effet
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
