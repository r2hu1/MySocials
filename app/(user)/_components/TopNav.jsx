"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav({ active = [], showBack = false, link }) {
    const [show, setShow] = useState(true);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!username) {
            fetch("/api/get")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.data !== null) {
                        setUsername(data.data.username);
                        setShow(true);
                    }
                    else {
                        setShow(true);
                    }
                });
        }
    });

    const activeClass = "bg-primary text-white";
    const primaryClass = "h-10 px-4 rounded-full bg-secondary hover:bg-primary hover:text-white transition flex items-center justify-center text-sm"
    return (
        <div className="md:px-20 lg:px-32 py-3 px-6">
            {show ? (
                <div className="flex gap-2 items-center">
                    <Link href="/dashboard/profile" className={cn(primaryClass, active.includes("Profile") && activeClass)}>Profile</Link>
                    <Link href="/dashboard/manage" className={cn(primaryClass, active.includes("Edit") && activeClass)}>{!username ? "Publish Your Page" : "Manage Page"}</Link>
                    {username && (
                        <Link target={username ? "_blank" : ""} href={`/${!username ? "username" : username}`} className={cn(primaryClass, active.includes("Visit") && activeClass)}>View</Link>
                    )}
                </div>
            ) : (
                <div className="flex gap-2 items-center">
                    <Skeleton className="w-[75px] h-10 rounded-full" />
                    <Skeleton className="w-32 h-10 rounded-full" />
                    <Skeleton className="w-[68px] h-10 rounded-full" />
                </div>
            )}
        </div>
    )
}