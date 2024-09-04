"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Obtenez le thème actuel

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-xl bg-slate-300 dark:text-white dark:bg-black "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer mb-1  hover:bg-slate-400 hover:dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl ${
            theme === "light" ? "bg-slate-400 dark:bg-blue-700" : ""
          }`}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer mb-1 hover:bg-slate-400 hover:dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl ${
            theme === "dark" ? "bg-slate-400 dark:bg-blue-700" : ""
          }`}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer hover:bg-slate-400 hover:dark:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl ${
            theme === "system" ? "bg-slate-400 dark:bg-blue-700" : ""
          }`}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
