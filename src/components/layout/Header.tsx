import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Karla } from "next/font/google";
import ResponsiveMenu from "./responsive-menu";
import Image from "next/image";
import ActiveNavigationWrapper from "../wrappers/ActiveNavigationWrapper";

const karla = Karla({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header
      className={`flex w-screen items-center justify-between py-6 font-bold dark:text-white ${karla.className}`}
    >
      <div className="ml-4 lg:hidden">
        <ResponsiveMenu />
      </div>

      <Image
        alt="logo"
        src="/asset/Logo/Trif.png"
        width={50}
        height={50}
        priority={true}
        className="hidden h-auto w-auto cursor-pointer lg:ml-20 lg:inline"
      />

      <nav className="hidden rounded-full border-2 border-emerald-300 py-1 dark:border-2 dark:border-white dark:shadow-lg dark:shadow-indigo-300/50 lg:inline lg:w-8/12 xl:w-6/12">
        <ul className="flex items-center justify-center xl:gap-2">
          {[
            { path: "/", label: "Accueil" },
            { path: "/about", label: "À propos" },
            { path: "/projets", label: "Projets" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.path}>
              <ActiveNavigationWrapper path={item.path}>
                <Link href={item.path}>{item.label}</Link>
              </ActiveNavigationWrapper>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mr-6 md:mr-20">
        <ModeToggle />
      </div>
    </header>
  );
}
