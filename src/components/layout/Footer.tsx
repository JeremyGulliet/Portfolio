/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Karla } from "next/font/google";
import Link from "next/link";

const karla = Karla({
  subsets: ["latin"],
});

export default function Footer() {
  

  return (
    <footer className="flex flex-col items-center justify-center gap-3 py-6">
      <div className="flex items-center justify-center gap-3 pb-2">
        <Link
          href="https://github.com/JeremyGulliet"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub className="size-5 transition duration-150 ease-in-out hover:scale-105 md:size-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jérémy-gulliet"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="size-5 transition duration-150 ease-in-out hover:scale-105 md:size-8" />
        </Link>
      </div>
      <div className="border-t-2 border-emerald-300 pt-2 dark:border-t dark:border-white">
        <p
          className={`${karla.className} text-bold text-slate-800 dark:text-white`}
        >
          © {new Date().getFullYear()} Jérémy's Portfolio
        </p>
      </div>
    </footer>
  );
}
