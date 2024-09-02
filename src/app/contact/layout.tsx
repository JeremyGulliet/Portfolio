import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description: "Page contact du Portefolio de Jérémy GULLIET",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
