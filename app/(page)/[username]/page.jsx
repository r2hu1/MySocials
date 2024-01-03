"use client"

import Logo from "@/components/Logo";
import { Share, Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function Page({ params }) {

    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');
    const [youtube, setYoutube] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (!username && !bio && !insta && !face && !github && !youtube) {
            fetch("/api/get")
                .then(res => res.json())
                .then(data => {
                    if (data.data !== null) {
                        setName(data.data.name);
                        setUsername(data.data.username);
                        setBio(data.data.bio);
                        setInsta(data.data.instagram);
                        setFace(data.data.facebook);
                        setGithub(data.data.github);
                        setYoutube(data.data.youtube);
                        setImage(data.data.image);
                    }
                });
        }
    });

    return (
        <div className="px-7 md:px-20 lg:px-32 py-20 grid place-content-center">
            <div onClick={() => { navigator.share({ url: location.href, title: name, text: bio }) }} className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center fixed top-8 right-10 md:right-32 cursor-pointer hover:opacity-80 backdrop-blur-3xl">
                <Share2 className="w-6 h-6" />
            </div>
            <div className="grid place-content-center mb-5 mt-5">
                <img src={image} alt="profile" className="w-24 h-24 rounded-full" />
            </div>
            <div className="grid place-content-center mb-14 text-center gap-2">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-sm">{bio}</p>
            </div>
            <div className="grid gap-3 max-w-[600px]">
                <Link className="transition h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95" target="_blank" href={youtube}>My YouTube</Link>
                <Link className="transition h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95" target="_blank" href={insta}>My Instagram</Link>
                <Link className="transition h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95" target="_blank" href={face}>My Facebook</Link>
                <Link className="transition h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95" target="_blank" href={github}>My Github</Link>
            </div>
            <div className="mt-32 grid place-content-center text-center">
                <Logo />
                <p className="text-sm">Made with ❤️ by <a href="https://github.com/r2hu1">r2hu1</a></p>
            </div>
        </div>
    )
}