"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import ResponsiveMenu from "./responsive-menu";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  const linkStyle = (path: string) =>
    `flex justify-center items-center w-40 py-3 ${
      pathname === path
        ? "bg-emerald-300 dark:bg-blue-400 rounded-3xl w-40 py-3 mx-1 text-slate-800 dark:text-white"
        : "transition ease-in-out delay-150 hover:scale-90 hover:bg-emerald-400 opacity-60 dark:hover:bg-blue-400 rounded-3xl w-40 py-3 mx-1"
    }`;

  return (
    <header className="flex w-screen items-center justify-between py-6 font-bold dark:text-white">
      {/* Menu réactif visible seulement sur les écrans inférieurs à md */}
      <div className="ml-4 md:hidden">
        <ResponsiveMenu />
      </div>

      <Image
        alt="logo"
        src="/asset/Logo/Trif.png"
        width={80}
        height={80}
        priority={true}
        className="hidden h-auto w-auto cursor-pointer md:ml-20 md:inline"
        onClick={handleClick}
      />

      {/* Navigation visible seulement sur les écrans md et plus */}
      <nav className="hidden rounded-full border-2 border-emerald-300 py-1 dark:border-2 dark:border-white dark:shadow-lg dark:shadow-indigo-300/50 md:inline md:w-96 lg:inline lg:w-1/3">
        <ul className="flex items-center justify-center gap-2">
          <li className={linkStyle("/")}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={linkStyle("/about")}>
            <Link href="/about">À propos</Link>
          </li>
          <li className={linkStyle("/projets")}>
            <Link href="/projets">Projets</Link>
          </li>
          <li className={linkStyle("/contact")}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="mr-6 md:mr-20">
        <ModeToggle />
      </div>
    </header>
  );
}
