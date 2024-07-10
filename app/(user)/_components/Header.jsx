import { ClerkLoading, SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Skeleton } from "@/components/ui/skeleton"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Pen, UserRound } from 'lucide-react';
import Link from "next/link";
import UserPageLink from "./UserPageLink";

export default async function Header() {
    return (
        <header className="flex justify-between items-center py-[22px] px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex gap-2 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-secondary/60 hover:bg-secondary/80 cursor-pointer px-2 py-1 rounded-full">
                            <Menu className="h-4 w-4" />
                            <UserButton afterSignOutUrl="/" />
                            <ClerkLoading className="flex gap-3 items-center">
                                <Skeleton className="w-8 h-8 rounded-full" />
                            </ClerkLoading>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-12 mt-1">
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/profile" className="flex items-center justify-between">Profile <UserRound className="h-4 w-4" /></Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/manage" className="flex items-center justify-between">Manage <Pen className="h-4 w-4" /></Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <UserPageLink />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
