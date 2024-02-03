import { ClerkLoading, SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Skeleton } from "@/components/ui/skeleton"


export default async function Header() {
    return (
        <header className="flex justify-between items-center py-[22px] px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex gap-2 items-center">
                <UserButton afterSignOutUrl="/" />
                <ClerkLoading className="flex gap-3 items-center">
                    <Skeleton className="w-10 h-10 rounded-full" />
                </ClerkLoading>
            </div>
        </header>
    )
}