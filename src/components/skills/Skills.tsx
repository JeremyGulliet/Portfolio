import { SKILL, DATABASE_SKILL, BackendSkill } from "@/app/constants";
import React, { useState, useEffect } from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    const checkTheme = () => {
      const isLight = !document.documentElement.classList.contains("dark");
      setIsLightMode(isLight);
    };

    checkScreenSize();
    checkTheme();

    window.addEventListener("resize", checkScreenSize);
    const themeChangeObserver = new MutationObserver(checkTheme);
    themeChangeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      themeChangeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className="basis-1/4 flex flex-col items-center justify-center overflow-hidden  p-6 rounded-xl bg-emerald-100 dark:bg-gradient-to-t dark:from-black dark:via-blue-950 dark:to-black"
    >
      <SkillText />

      <div className="grid grid-cols-7 mt-6 gap-3 sm:gap-5 md:gap-8">
        {SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            skill_name={image.skill_name} index={0}          />
        ))}
      </div>

      <div className="grid grid-cols-5 mt-4 gap-3 sm:gap-5 md:gap-8">
        {BackendSkill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            skill_name={image.skill_name} index={0}          />
        ))}
      </div>

      <div className="grid grid-cols-4 mt-4 gap-3 sm:gap-5 md:gap-8">
        {DATABASE_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            skill_name={image.skill_name} index={0}          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
