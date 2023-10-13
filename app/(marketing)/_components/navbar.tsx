"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

import Logo from "./logo";

import { ModeToggle } from "@/components/mode-toggle";

const NavBar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn("sticky bg-background dark:bg-[#1f1f1f] top-0 flex items-center w-full p-6 grow-0", scrolled && "border-b shadow-sm")}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
