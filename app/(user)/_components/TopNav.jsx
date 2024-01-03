import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TopNav({ active = [], showBack = false,link }) {
    const activeClass = "bg-primary text-white";
    const primaryClass = "h-10 px-4 rounded-full bg-secondary hover:bg-primary hover:text-white transition flex items-center justify-center text-sm"
    return (
        <div className="md:px-20 lg:px-32 py-3 px-6">
            <div className="flex gap-4 items-center">
                <Link href="/dashboard" className={cn(primaryClass, active.includes("Dashboard") && activeClass)}>Dashboard</Link>
                <Link href="/dashboard/profile" className={cn(primaryClass, active.includes("Profile") && activeClass)}>Profile</Link>
                <Link href="/dashboard" className={cn(primaryClass, active.includes("Edit") && activeClass)}>Manage</Link>
                <Link href={link} className={cn(primaryClass, active.includes("Visit") && activeClass)}>View</Link>
            </div>
        </div>
    )
}