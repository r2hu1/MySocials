"use client"

import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Facebook, Github, Instagram, Share, Share2, Youtube } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function UserSocials({ userDataName }) {

    const [loding, setLoding] = useState(true);
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');
    const [youtube, setYoutube] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!bio && !insta && !face && !github && !youtube) {
            let username = userDataName;
            fetch("/api/page/get", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "username": username }),
            })
                .then(res => res.json())
                .then(data => {
                    setLoding(false);
                    if (data.data !== null) {
                        setImage(data.data.image);
                        setName(data.data.name);
                        setBio(data.data.bio);
                        setInsta(data.data.instagram);
                        setFace(data.data.facebook);
                        setGithub(data.data.github);
                        setYoutube(data.data.youtube);
                    }
                    else {
                        setError(true);
                    }
                });
        }
    });

    return (
        <div className="px-2 md:px-20 lg:px-32 py-20 grid place-content-center">
            {/*<div className=" w-12 h-12 rounded-full flex items-center justify-center fixed top-5 left-5 md:top-10 md:left-32 cursor-pointer">
                <ModeToggle/>
            </div>*/}
            <div onClick={() => { navigator.share({ url: location.href, title: name, text: name }) }} className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center fixed top-5 right-5 md:top-10 md:right-32 cursor-pointer hover:scale-95 transition backdrop-blur-3xl">
                <Share2 className="w-5 h-5" />
            </div>
            <div className="grid place-content-center mb-5 mt-14">
                {!image && (
                    <Skeleton className="h-24 w-24 rounded-full" />
                )}
                {image && (
                    <img src={image} alt={name} className="w-24 h-24 rounded-full bg-background" />
                )}
            </div>
            <div className="grid place-content-center mb-14 text-center gap-1 px-2">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-sm max-w-[320px]">{bio}</p>
                {loding && (
                    <Skeleton className="h-8 w-40 mx-auto" />
                )}
                {loding && (
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                )}
            </div>
            {loding && (
                <div className="grid gap-3 max-w-[600px]">
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                </div>
            )}
            {!loding && (
                <div className="grid gap-3 grid-cols-1 max-w-[600px]">
                    {!youtube ? null : (
                        <Link className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative" target="_blank" href={youtube}><Youtube className="absolute left-6 h-5 w-5" /> My YouTube</Link>
                    )}
                    {!insta ? null : (
                        <Link className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative" target="_blank" href={insta}><Instagram className="absolute left-6 h-5 w-5" /> My Instagram</Link>
                    )}
                    {!face ? null : (
                        <Link className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative" target="_blank" href={face}><Facebook className="absolute left-6 h-5 w-5" /> My Facebook</Link>
                    )}
                    {!github ? null : (
                        <Link className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative" target="_blank" href={github}><Github className="absolute left-6 h-5 w-5" /> My Github</Link>
                    )}
                </div>
            )}
            {error && (
                <div className="-mt-20 mb-20 grid place-content-center">
                    <h1 className="font-bold text-center text-3xl">Error Something Went <br /> Wrong<span className="text-primary">.</span></h1>
                    <p className="text-center text-sm">user not found, check the username <br /> and try again.</p>
                    <Button href="/" className="mt-5 w-full max-w-sm mx-auto">Back</Button>
                </div>
            )}
            <div className="mt-40 grid place-content-center text-center -mb-10">
                <Logo />
                <p className="text-xs">Made with ❤️ by <a href="https://github.com/r2hu1">r2hu1</a></p>
            </div>
        </div>
    )
}
