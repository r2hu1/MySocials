import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs";
import Logo from "./Logo";

export default async function Header() {
    const user = await currentUser();
    return (
        <header className="flex justify-between items-center py-[22px] px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex gap-3 items-center">
                <Button asChild><Link href={!user ? "/sign-in" : "/dashboard"}>Login</Link></Button>
                <ModeToggle />
            </div>
        </header>
    )
}