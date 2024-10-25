import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";
import { Karla, Quicksand } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
});

export function HeroButtonMobile() {
    
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-6 md:hidden">
        <Button
          asChild
          className="w-52 bg-emerald-300 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-xl"
        >
          <Link
            href="/asset/CV Développeur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white dark:font-normal text-slate-800 font-semibold flex transition ease-in-out duration-150 hover:scale-105 "
          >
            <p className={`${karla.className} mr-2 text-lg`}>Mon CV</p>
            <IoIosDocument />
          </Link>
        </Button>
        <Button
          asChild
          className="w-52 bg-emerald-300 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-xl"
        >
          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="dark:text-white dark:font-normal text-slate-800 font-semibold flex transition ease-in-out duration-150 hover:scale-105 "
          >
            <p className={`${karla.className} mr-2 text-lg`}>Contactez-moi</p>
            <IoIosPhonePortrait />
          </Link>
        </Button>
      </div>
    );
}