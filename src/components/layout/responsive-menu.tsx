import { TiThMenu } from "react-icons/ti";
import { FaHome, FaRegQuestionCircle, FaRegImages } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function ResponsiveMenu() {
  // État pour gérer la visibilité du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <TiThMenu
          className="h-6 w-6 md:hidden"
          onClick={() => setIsOpen(true)} // Ouvrir le menu
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-slate-200 dark:bg-gradient-to-r from-black  via-blue-950  to-black "
      >
        <ul className="flex flex-col justify-center gap-4 dark:text-white">
          <li className="border-b pb-3">
            <Link href="/" onClick={closeMenu}>
              <div className="flex justify-start items-center gap-3">
                <FaHome />
                <p>Accueil</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/about" onClick={closeMenu}>
              <div className="flex justify-start items-center gap-3">
                <FaRegQuestionCircle />
                <p>A propos</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/projets" onClick={closeMenu}>
              <div className="flex justify-start items-center gap-3">
                <FaRegImages />
                <p>Projets</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/contact" onClick={closeMenu}>
              <div className="flex justify-start items-center gap-3">
                <GrContact />
                <p>Contact</p>
              </div>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
