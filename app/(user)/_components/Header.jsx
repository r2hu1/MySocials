import Link from "next/link";
import { ClerkLoading, SignOutButton, UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Skeleton } from "@/components/ui/skeleton"


export default async function Header() {
    const user = await currentUser();
    return (
        <header className="flex justify-between items-center py-[22px] px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex gap-3 items-center">
                <Button size="icon" asChild><UserButton/></Button>
                <SignOutButton><Button>Logout</Button></SignOutButton>
                <ClerkLoading className="flex gap-3 items-center">
                    <Skeleton className="w-10 h-10 rounded-full"/>
                    <Skeleton className="w-20 h-10"/>
                </ClerkLoading>
            </div>
        </header>
    )
}