"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveNavigationWrapperProps {
  path: string;
  children: ReactNode;
}

export default function ActiveNavigationWrapper({
  path,
  children,
}: ActiveNavigationWrapperProps) {
  const pathname = usePathname();

  const linkStyle = `flex justify-center items-center text-sm lg:text-base xl:text-xl w-40 py-3 ${
    pathname === path
      ? "bg-emerald-300 dark:bg-blue-400 rounded-3xl w-40 py-3 mx-1 text-slate-800 dark:text-white"
      : "transition ease-in-out delay-150 hover:scale-90 hover:bg-emerald-400 opacity-60 dark:hover:bg-blue-400 rounded-3xl w-40 py-3 mx-1"
  }`;

  return <div className={linkStyle}>{children}</div>;
}
