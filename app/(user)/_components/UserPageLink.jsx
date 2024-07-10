"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserPageLink() {
    const [show, setShow] = useState(false);
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

    return (
        <Link target={username ? "_blank" : ""} href={`/${!username ? "#" : username}`} className="flex items-center justify-between text-sm px-2 h-8 hover:bg-accent rounded hover:text-accent-foreground">Visit <ExternalLink className="h-4 w-4"/></Link>
    )
}