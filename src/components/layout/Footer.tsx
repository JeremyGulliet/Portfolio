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
    <footer className="flex flex-col justify-center items-center py-6 gap-3">
      <div className="flex justify-center items-center gap-3 pb-2">
        <Link href="https://github.com/JeremyGulliet" target="_blank">
          <FaGithub className=" size-5 md:size-8 transition ease-in-out duration-150 hover:scale-105" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jérémy-gulliet"
          target="_blank"
        >
          <FaLinkedin className="size-5 md:size-8 transition ease-in-out duration-150 hover:scale-105" />
        </Link>
      </div>
      <div className="dark:border-t  dark:border-white pt-2 border-emerald-300 border-t-2">
        <p className={`${karla.className} dark:text-white text-slate-800 text-bold`}>
          © {new Date().getFullYear()} Jérémy's Portfolio
        </p>
      </div>
    </footer>
  );
}
