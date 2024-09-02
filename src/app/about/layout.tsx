import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio - A propos",
  description: "Page à propos du Portefolio de Jérémy GULLIET",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <div>
        {children}
    </div>;
}
