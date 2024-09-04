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
  title: "Portfolio - Accueil",
  description: "Page accueil du Portfolio de Jérémy GULLIET",
  keywords: "application, web, nextjs, portfolio",
  openGraph: {
    title: "Portfolio Jérémy GULLIET",
    description: "Portfolio de Jérémy GULLIET",
    url: "https://portfolio-jeremy-gulliet.vercel.app/",
    images: "asset/Projets/Programmer-rafiki.png",
    siteName: "Portfolio Jérémy GULLIET",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Jérémy GULLIET",
    description: "Portfolio de Jérémy GULLIET",
    images: "asset/Projets/Programmer-rafiki.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between bg-slate-100 dark:bg-gradient-to-r from-black  via-blue-950  to-black ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center justify-between w-screen h-screen">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
