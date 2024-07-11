"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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
        <div className="px-6 sm:mx-auto sm:w-fit">
            {!username ? (
                <Alert className="sm:max-w-lg">
                    <AlertTitle className="text-base"><span>✨</span> Heads up <span>✨</span></AlertTitle>
                    <AlertDescription className="text-sm text-gray-600 dark:text-gray-400">
                        Scroll down to publish your page to get your personalized page link!
                    </AlertDescription>
                </Alert>
            ) : (
                <div>
                  <Alert className="sm:max-w-lg">
                    <AlertTitle className="text-base"><span>✨</span> Your page is ready <span>✨</span></AlertTitle>
                    <AlertDescription className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        <Link target="_blank" href={`https://${location.host}/${username}`}>https://{location.host}/{username}</Link>
                    </AlertDescription>
                </Alert>  
                </div>
            )}
        </div>
    );
}