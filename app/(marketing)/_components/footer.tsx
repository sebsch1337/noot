import { Button } from "@/components/ui/button";

import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 bottom-0 grow-0 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/privacy">Privacy Policy</Link>
        </Button>
        <Button variant="ghost" size="sm">
          <Link href="/terms">Terms & Conditions</Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
