"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
});

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string; // Nom de la compétence
  className?: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
  className,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  // Transformer et animer les rotations et translations
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={`relative ${className}`} // Pour positionner correctement le popover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* L'image */}
      <Image
        src={src}
        width={width}
        height={height}
        alt={skill_name}
        className="w-auto h-auto transition-transform duration-500 group-hover:scale-105"
        onMouseMove={handleMouseMove}
      />

      {/* Popover animée */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              // transition: {
              //   type: "spring",
              //   stiffness: 260,
              //   damping: 10,
              // },
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            style={{
              // translateX: translateX,
                // rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className={`absolute -inset-4 ring-2 flex items-center justify-center px-6 py-2 rounded-xl bg-emerald-300 dark:bg-gradient-to-r dark:from-black dark:via-blue-950 dark:to-black ${karla.className}`}
              >
            <div className="font-bold text-slate-800 dark:text-white text-xs ">
              {skill_name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillDataProvider;
