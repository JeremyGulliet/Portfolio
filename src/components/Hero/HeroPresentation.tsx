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

export default function HeroPresentation() {
    return (
      <>
        <Card className="basis-1/4 w-full max-w-xl bg-slate-300  dark:bg-gradient-to-t from-black  via-blue-950  to-black border-none px-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center border-b-2 pb-3 border-slate-600 dark:border-white">
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <p className="text-3xl lg:text-4xl pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text  font-bold leading-none tracking-tighter text-slate-600 dark:text-transparent pb-2">
                    Jérémy GULLIET
                  </p>
                  <Link href="/about">
                    <FaArrowUpRightFromSquare className="cursor-pointer size-3 lg:size-4" />
                  </Link>
                </div>
                <p className="text-xl lg:text-3xl pointer-events-none z-10 whitespace-pre-wrap dark:bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:bg-clip-text  leading-none tracking-tighter text-slate-600 dark:text-transparent pb-2">
                  Développeur web et mobile
                </p>
              </div>
            </CardTitle>
            {/* <CardDescription>
              Je suis à la recherche de toutes les opportunitées qui se
              présenteront à moi.
            </CardDescription> */}
          </CardHeader>
          <CardContent className=" text-base lg:text-xl">
            La satisfaction client est ma priorité et je suis prêt à vous
            accompagner dans la construction de tous vos projets.
          </CardContent>
          <CardFooter className="flex flex-col justify-center items-center gap-6 pt-2 lg:pt-2 ">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:pb-3">
              <Button asChild className="lg:mt-4 lg:w-44">
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
              <Button asChild className="lg:mt-4 lg:w-44">
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
            <div className="flex justify-center items-center gap-3 border-t-2 pt-4 border-slate-600 dark:border-white">
              <Link href="https://github.com/JeremyGulliet" target="_blank">
                <FaGithub className=" size-5 md:size-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jérémy-gulliet-1ba063268"
                target="_blank"
              >
                <FaLinkedin className="size-5 md:size-8" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </>
    );
}
