"use client";

import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

interface ResponsiveMenuWrapperProps {
  children: ReactNode;
  trigger: ReactNode;
}

export default function ResponsiveMenuWrapper({
  children,
  trigger,
}: ResponsiveMenuWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>{trigger}</SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-slate-200 from-black via-blue-950 to-black dark:bg-gradient-to-r"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
