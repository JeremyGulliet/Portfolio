/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full max-w-2xl bg-gradient-to-b from-emerald-100 via-emerald-200 to-emerald-300 lg:bg-gradient-to-r lg:from-emerald-100 lg:via-emerald-200 lg:to-emerald-300 dark:bg-gradient-to-t dark:from-black dark:via-blue-950 dark:to-black font-sans md:px-10 rounded-xl"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-slate-800 font-bold max-w-4xl pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text leading-none tracking-tighter dark:text-transparent border-b-2 border-slate-800 dark:border-white pb-4">
          Mon parcours professionnel.
        </h2>
        <p className="text-slate-800 dark:text-white text-sm md:text-base max-w-sm">
          Il y a 1 an, après plus de 10 ans dans le domaine de l'immobilier,
          j'ai décidé de me reconvertir pour devenir développeur web et
          mobile.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-emerald-300 dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-emerald-400 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-semibold text-slate-800 dark:text-white ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-semibold text-slate-800 dark:text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
