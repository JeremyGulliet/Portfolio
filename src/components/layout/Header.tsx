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
      router.push('/');
    };
  

  const linkStyle = (path: string) =>
    `flex justify-center items-center w-40 py-3 ${
      pathname === path
        ? "bg-emerald-300 dark:bg-blue-400 rounded-3xl w-40 py-3 mx-1 text-slate-800 dark:text-white"
        : "transition ease-in-out delay-150 hover:scale-90 hover:bg-emerald-400 opacity-60 dark:hover:bg-blue-400 rounded-3xl w-40 py-3 mx-1"
    }`;

  return (
    <header className="flex justify-between items-center py-6 w-screen font-bold dark:text-white ">
      {/* Menu réactif visible seulement sur les écrans inférieurs à md */}
      <div className="md:hidden ml-4">
        <ResponsiveMenu />
      </div>
      
          <Image
            alt="logo"
            src="/asset/Logo/Trif.png"
            width={80}
            height={80}
            priority={true}
        className="hidden md:inline md:ml-20 w-auto h-auto cursor-pointer"
        onClick={handleClick}
          />
     
      {/* Navigation visible seulement sur les écrans md et plus */}
      <nav className="border-2 border-emerald-300 dark:shadow-lg dark:shadow-indigo-300/50 dark:border-2 dark:border-white rounded-full py-1 hidden md:inline md:w-96 lg:inline lg:w-1/3">
        <ul className="flex justify-center items-center gap-2">
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
