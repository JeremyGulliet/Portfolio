"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `flex justify-center items-center w-40 py-3 ${
      pathname === path
        ? "bg-neutral-500 rounded-3xl w-40 py-3 mx-1"
        : "hover:bg-neutral-500 opacity-50 rounded-3xl w-40 py-3 mx-1"
    }`;

  return (
    <div className="flex justify-between items-center py-6">
      <div>IMAGE</div>
      <nav className="border-2 rounded-full py-1 w-1/3">
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
      <div className="mr-10">
        <ModeToggle />
      </div>
    </div>
  );
}
