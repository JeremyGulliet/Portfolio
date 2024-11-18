import { TiThMenu } from "react-icons/ti";
import { FaHome, FaRegQuestionCircle, FaRegImages } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Karla } from "next/font/google";
import Link from "next/link";
import ResponsiveMenuWrapper from "../wrappers/ResponsiveMenuWrapper";

const karla = Karla({
  subsets: ["latin"],
});

export default function ResponsiveMenu() {
  const trigger = <TiThMenu className="h-6 w-6 lg:hidden" aria-label="Menu" />;

  return (
    <ResponsiveMenuWrapper trigger={trigger}>
      <ul
        className={`flex flex-col justify-center gap-4 dark:text-white ${karla.className}`}
      >
        {[
          { href: "/", icon: <FaHome />, label: "Accueil" },
          { href: "/about", icon: <FaRegQuestionCircle />, label: "A propos" },
          { href: "/projets", icon: <FaRegImages />, label: "Projets" },
          { href: "/contact", icon: <GrContact />, label: "Contact" },
        ].map((item) => (
          <li key={item.href} className="border-b pb-3">
            <Link href={item.href}>
              <div className="flex items-center justify-start gap-3">
                {item.icon}
                <p>{item.label}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ResponsiveMenuWrapper>
  );
}
