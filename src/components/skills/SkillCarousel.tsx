import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { SKILL, DATABASE_SKILL, BackendSkill } from "@/app/constants";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function SkillCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const AllSkills = [...SKILL, ...BackendSkill, ...DATABASE_SKILL];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {AllSkills.map((skill, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-24">
              <Card className="bg-gradient-to-t from-black  via-blue-950  to-black 0">
                <CardContent className="flex flex-col aspect-square items-center justify-center gap-4 p-6">
                  <Image
                    src={skill.Image}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <span className="text-xs text-justify font-semibold">
                    {skill.skill_name}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
