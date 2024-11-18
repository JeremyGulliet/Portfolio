import { HeroButtonMobile } from "@/components/Hero/HeroButtonMobile";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroCv from "@/components/Hero/HeroCv";
import HeroPresentation from "@/components/Hero/HeroPresentation";
import Skills from "@/components/skills/Skills";
import AnimationWrapper from "@/components/wrappers/AnimationWrapper";

export default function Home() {
  return (
    <AnimationWrapper>
      <main className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:w-auto lg:flex-row">
        <div className="mt-2 flex w-80 flex-col justify-start gap-3 md:w-auto lg:mt-0">
          <HeroPresentation />
          <HeroCarousel />
          <Skills />
        </div>
        <div className="flex">
          <HeroCv />
        </div>
        <HeroButtonMobile />
      </main>
    </AnimationWrapper>
  );
}
