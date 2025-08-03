import Link from "next/link";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Logo from "./Logo";
import { CornerRightDown } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="flex justify-between items-center py-5 px-6 sm:px-8 md:px-20 lg:px-24">
      <div>
        <Logo />
      </div>
      <div className="flex gap-2 items-center">
        <Button asChild size="sm">
          <Link
            href={!user ? "/sign-in" : "/dashboard/manage"}
            className="gap-2"
          >
            {!user ? "Get Started" : "Dashboard"}
            <CornerRightDown className="!h-4 !w-4" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
