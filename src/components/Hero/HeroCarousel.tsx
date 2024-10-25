import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Karla, Quicksand } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import cardsData from "./data.json";

const karla = Karla({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function HeroCarousel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null,
  );

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="max-w-xl"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {cardsData.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="relative border-none bg-emerald-100 dark:bg-gradient-to-t dark:from-black dark:via-blue-950 dark:to-black">
                  <FaArrowUpRightFromSquare
                    className="absolute right-2 top-2 size-3 cursor-pointer transition duration-150 ease-in-out hover:scale-125 lg:right-4 lg:top-3 lg:size-4"
                    aria-label="Voir"
                    onClick={() => {
                      router.push("/projets");
                    }}
                  />
                  <CardContent className="flex aspect-square flex-col items-center justify-around gap-4 p-6">
                    <Image
                      alt="ImageProject"
                      src={card.src}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="cursor-pointer rounded-xl"
                      onClick={() => window.open(card.link, "_blank")}
                    />
                    <div className="flex flex-col items-center justify-center">
                      <h1
                        className={`${quicksand.className} pointer-events-none z-10 whitespace-pre-wrap border-b-2 border-slate-800 from-blue-200 via-blue-400 to-blue-600 p-4 text-center text-3xl font-bold leading-none tracking-tighter text-slate-800 dark:border-white dark:bg-gradient-to-b dark:bg-clip-text dark:text-transparent md:text-5xl lg:text-6xl`}
                      >
                        {card.title}
                      </h1>
                      <span className="pt-4">
                        <div className="flex flex-wrap items-center justify-start gap-2">
                          {card.badges.map((badge, badgeIndex) => (
                            <Badge
                              key={badgeIndex}
                              className={`${karla.className} rounded-xl bg-emerald-300 text-slate-800 dark:bg-blue-500 dark:text-white`}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <div className="absolute left-1/2 flex -translate-x-1/2 transform space-x-2 md:bottom-4">
          {cardsData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              } cursor-pointer`}
              onClick={() => carouselApi?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
