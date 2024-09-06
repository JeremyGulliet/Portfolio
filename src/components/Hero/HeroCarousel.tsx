import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export default function HeroCarousel() {
  const router = useRouter();

   const plugin = React.useRef(
     Autoplay({ delay: 3000, stopOnInteraction: false })
  );

   type CardType = {
     title: string;
     src: string;
     badge: JSX.Element;
     onClick?: () => void;
   };
  
  const cards: CardType[] = [
    {
      title: "DressCode",
      src: "/asset/Projets/Dresscode2.jpeg",
      badge: (
        <div className="flex flex-wrap justify-start items-center gap-2">
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            React Native / Expo
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            Redux
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            ExpressJS
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            MongoDB
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            Mongoose
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open(
          "https://www.linkedin.com/posts/j%C3%A9r%C3%A9my-gulliet-1ba063268_dresscode-version-2-hello-voici-activity-7206633007917449218-UOHA?utm_source=share&utm_medium=member_desktop",
          "_blank"
        ),
    },
    {
      title: "Jeu du serpent",
      src: "/asset/Projets/Snake.png",
      badge: (
        <div className="flex flex-wrap justify-start items-center gap-2">
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            React
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open("https://snake-sepia-chi.vercel.app", "_blank"),
    },
    {
      title: "Portfolio",
      src: "/asset/Projets/Contact.png",
      badge: (
        <div className="flex flex-wrap justify-start items-center gap-2">
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            React
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            Next JS
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            TypeScript
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            TailwindCSS
          </Badge>
        </div>
      ),
      onClick: () =>
        window.open("https://portfolio-jeremy-gulliet.vercel.app/", "_blank"),
    },
    {
      title: "Section Prix",
      src: "/asset/Projets/Pricing.png",
      badge: (
        <div className="flex flex-wrap justify-start items-center gap-2">
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            React
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            Next JS
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            TypeScript
          </Badge>
          <Badge className="bg-emerald-300 dark:bg-blue-500 text-slate-800 dark:text-white rounded-xl">
            TailwindCSS
          </Badge>
        </div>
      ),
      onClick: () => window.open("https://page-price.vercel.app/", "_blank"),
    },
    {
      title: "Tous mes projets",
      src: "/asset/Projets/allproject.jpg",
      badge: <div></div>,
      onClick: () => {
        router.push("/projets");
      },
    },
  ];

   return (
     <Carousel
       plugins={[plugin.current]}
       className="max-w-xl"
       //  onMouseEnter={plugin.current.stop}
       //  onMouseLeave={plugin.current.reset}
     >
       <CarouselContent>
         {cards.map((card, index) => (
           <CarouselItem key={index}>
             <div className="p-1">
               <Card className="relative bg-emerald-100 dark:bg-gradient-to-t dark:from-black dark:via-blue-950 dark:to-black border-none">
                 <FaArrowUpRightFromSquare
                   className="absolute size-3 lg:size-4 top-2 right-2 lg:top-3 lg:right-4 cursor-pointer transition ease-in-out duration-150 hover:scale-125"
                   onClick={() => {
                     router.push("/projets");
                   }}
                 />
                 <CardContent className="flex flex-col aspect-square items-center justify-around p-6 gap-4">
                   <Image
                     alt="ImageProject"
                     src={card.src}
                     width={800}
                     height={500}
                     className="rounded-xl cursor-pointer"
                     onClick={card.onClick}
                   />
                   <div className="flex flex-col justify-center items-center">
                     <h1 className="pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-slate-800 dark:text-transparent p-4 border-b-2 border-slate-800 dark:border-white">
                       {card.title}
                     </h1>
                     <span className="pt-4">{card.badge}</span>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </CarouselItem>
         ))}
       </CarouselContent>
       {/* <CarouselPrevious />
       <CarouselNext /> */}
     </Carousel>
   );
}
