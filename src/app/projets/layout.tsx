import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Projets",
  description: "Page projets  du Portefolio de Jérémy GULLIET",
};

export default function ProjetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
