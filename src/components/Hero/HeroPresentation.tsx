import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { IoIosDocument, IoIosPhonePortrait } from "react-icons/io";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Karla, Quicksand } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function HeroPresentation() {
    return (
      <>
        <Card className="basis-1/4 w-full max-w-xl bg-emerald-100  dark:bg-gradient-to-t dark:from-black dark:via-blue-950 dark:to-black border-none px-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center border-b-2 pb-3 border-slate-800 dark:border-white">
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    <p className={`${quicksand.className} text-3xl lg:text-4xl pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text font-bold leading-none tracking-tighter text-slate-800 dark:text-transparent pb-2`}>
                    Jérémy GULLIET
                    </p>
                  <Link href="/about">
                    <FaArrowUpRightFromSquare className="cursor-pointer size-3 lg:size-4 transition ease-in-out duration-150 hover:scale-125" aria-label="Voir" />
                  </Link>
                </div>
                <p className={`${quicksand.className} text-xl lg:text-3xl pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text leading-none tracking-tighter text-slate-800 dark:text-transparent pb-2`}>
                  Développeur web et mobile
                </p>
              </div>
            </CardTitle>
            {/* <CardDescription>
              Je suis à la recherche de toutes les opportunitées qui se
              présenteront à moi.
            </CardDescription> */}
          </CardHeader>
            <CardContent className={`${karla.className} text-base lg:text-xl dark:text-white text-slate-800`}>
            La satisfaction client est ma priorité et je suis prêt à vous
            accompagner dans la construction de tous vos projets.
            </CardContent>
          <CardFooter className="flex flex-col justify-center items-center gap-6 pt-2 lg:pt-2 ">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:pb-3">
              <Button
                asChild
                className="lg:mt-4 lg:w-44 dark:text-white dark:font-normal text-slate-800 font-semibold flex transition ease-in-out duration-150 hover:scale-105 bg-emerald-300 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-xl"
              >
                <Link
                  href="/asset/CV Développeur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <p className={`${karla.className} mr-2 text-lg`}>Mon CV</p>
                  <IoIosDocument />
                </Link>
              </Button>
              <Button
                asChild
                className="lg:mt-4 lg:w-44 dark:text-white dark:font-normal text-slate-800 font-semibold flex transition ease-in-out duration-150 hover:scale-105 bg-emerald-300 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-xl"
              >
                <Link
                  href="/contact"
                  rel="noopener noreferrer"
                >
                    <p className={`${karla.className} mr-2 text-lg`}>Contactez-moi</p>
                  <IoIosPhonePortrait />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center items-center gap-3 border-t-2 pt-4 border-slate-800 dark:border-white">
              <Link href="https://github.com/JeremyGulliet" target="_blank" aria-label="Github">
                <FaGithub className=" size-5 md:size-8 transition ease-in-out duration-150 hover:scale-105" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jérémy-gulliet"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="size-5 md:size-8 transition ease-in-out duration-150 hover:scale-105" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </>
    );
}
