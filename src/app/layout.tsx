import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Header from "@/components/layout/Header";
import React from "react";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jeremy-gulliet.vercel.app/"),
  title: "Portfolio de Jérémy GULLIET - Accueil",
  description:
    "La satisfaction client est ma priorité et je suis prêt à vous accompagner dans la construction de tous vos projets.",
  authors: [{ name: "Jérémy GULLIET" }],
  keywords: [
    "application",
    "web",
    "nextjs",
    "portfolio",
    "Jérémy GULLIET",
    "Jérémy",
    "Gulliet",
    "projet",
    "développeur",
    "intégrateur",
    "site web",
    "landing page",
    "frontend",
    "backend",
    "fullstack",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "CSS",
    "HTML",
    "UI/UX",
    "responsive design",
    "SEO",
    "accessibilité",
  ],
  openGraph: {
    title: "Portfolio Jérémy GULLIET",
    description: "Portfolio de Jérémy GULLIET",
    url: "https://portfolio-jeremy-gulliet.vercel.app/",
    images: [
      {
        url: "/asset/Projets/Programmer-rafiki.png",
        width: 800,
        height: 600,
        alt: "Hero image of Jérémy GULLIET's portfolio",
      },
    ],
    siteName: "Portfolio Jérémy GULLIET",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Jérémy GULLIET",
    description: "Portfolio de Jérémy GULLIET",
    images: [
      {
        url: "/asset/Projets/Programmer-rafiki.png",
        alt: "Hero image of Jérémy GULLIET's portfolio",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between bg-emerald-50 dark:bg-gradient-to-r dark:from-black  dark:via-blue-950  dark:to-black ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center justify-between w-screen h-screen no-scrollbar">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
