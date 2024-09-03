import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroButtonMobile() {
    
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-6 md:hidden">
        <Button asChild className="w-52">
          <a
            href="/asset/CV Développeur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-slate-400 dark:dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl"
          >
            <p className="mr-2">Mon CV</p>
            <IoIosDocument />
          </a>
        </Button>
        <Button asChild className="w-52">
          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="flex bg-slate-400 dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-52 rounded-xl"
          >
            <p className="mr-2">Contactez-moi</p>
            <IoIosPhonePortrait />
          </Link>
        </Button>
      </div>
    );
}