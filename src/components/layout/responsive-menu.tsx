import { TiThMenu } from "react-icons/ti";
import { FaHome, FaRegQuestionCircle, FaRegImages } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Karla } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const karla = Karla({
  subsets: ["latin"],
});

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
          aria-label="Menu"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-slate-200 from-black via-blue-950 to-black dark:bg-gradient-to-r"
      >
        <ul
          className={`flex flex-col justify-center gap-4 dark:text-white ${karla.className}`}
        >
          <li className="border-b pb-3">
            <Link href="/" onClick={closeMenu}>
              <div className="flex items-center justify-start gap-3">
                <FaHome />
                <p>Accueil</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/about" onClick={closeMenu}>
              <div className="flex items-center justify-start gap-3">
                <FaRegQuestionCircle />
                <p>A propos</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/projets" onClick={closeMenu}>
              <div className="flex items-center justify-start gap-3">
                <FaRegImages />
                <p>Projets</p>
              </div>
            </Link>
          </li>
          <li className="border-b pb-3">
            <Link href="/contact" onClick={closeMenu}>
              <div className="flex items-center justify-start gap-3">
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
