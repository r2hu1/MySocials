"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

export default function ManageForm() {
    const { toast } = useToast();

    const [isEdit, setIsEdit] = useState(true);
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');
    const [youtube, setYoutube] = useState('');
    const [name, setName] = useState('');
    const [loding, setLoding] = useState(true);

    const [isPublished, setIsPublished] = useState(false);

    const handlePublishEvent = async (e) => {
        setIsPublished(true);
        e.preventDefault();
        if (username.length < 5) {
            toast({
                title: "Username length is less than 5, please make it longer!"
            });
            setIsPublished(false);
            return;
        }
        await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, bio, insta, face, github, youtube, name }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    toast({
                        title: "Username is already in use"
                    })
                }
                else {
                    toast({
                        title: "Successfully published your profile",
                    });
                }
            });

        setIsPublished(false);
    };

    useEffect(() => {
        if (!username && !bio && !insta && !face && !github && !youtube) {
            fetch("/api/get")
                .then(res => res.json())
                .then(data => {
                    setLoding(false);
                    if (data.data !== null) {
                        setName(data.data.name);
                        setUsername(data.data.username);
                        setBio(data.data.bio);
                        setInsta(data.data.instagram);
                        setFace(data.data.facebook);
                        setGithub(data.data.github);
                        setYoutube(data.data.youtube);
                    }
                });
        }
    })

    return (
        <form className="grid gap-2 mt-5 lg:px-40" method="post" onSubmit={handlePublishEvent}>
            {!loding && (
                <div className="grid gap-2 mt-5">
                    <Label htmlFor="username" className="mt-2">Username</Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} disabled={isEdit} id="image" type="text" placeholder="Unique username" />

                    <Label htmlFor="name" className="mt-2">Full Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} disabled={isEdit} id="name" type="text" placeholder="John Doe" />

                    <Label htmlFor="bio" className="mt-2">Bio</Label>
                    <Textarea value={bio} onChange={(e) => setBio(e.target.value)} disabled={isEdit} id="bio" placeholder="Tell others about yourself"></Textarea>

                    <Label htmlFor="youtube" className="mt-8">YouTube</Label>
                    <Input value={youtube} onChange={(e) => setYoutube(e.target.value)} disabled={isEdit} id="youtube" type="url" placeholder="https://youtube.com/channel" />

                    <Label htmlFor="insta" className="mt-2">Instagram</Label>
                    <Input value={insta} onChange={(e) => setInsta(e.target.value)} disabled={isEdit} id="insta" type="url" placeholder="https://instagram.com/username" />

                    <Label htmlFor="face" className="mt-2">Facebook</Label>
                    <Input value={face} onChange={(e) => setFace(e.target.value)} disabled={isEdit} id="face" type="url" placeholder="https://facebook.com/username" />

                    <Label htmlFor="github" className="mt-2">Github</Label>
                    <Input value={github} onChange={(e) => setGithub(e.target.value)} disabled={isEdit} id="github" type="url" placeholder="https://github.com/username" />


                    <div className="flex gap-2 mt-8">
                        <Button type="button" className="w-full max-w-[100px]" variant="outline" onClick={() => setIsEdit(!isEdit)}>{isEdit ? "Edit" : "Cancel"}</Button>
                        <Button className="w-full" type="submit">{isPublished ? (<LoaderIcon className="w-4 h-4 animate-spin" />) : "Publish"}</Button>
                    </div>
                </div>
            )}

            {loding && (
                <div className="grid gap-2 mt-5">
                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-20 w-full mb-8" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <div className="flex gap-2 mt-8">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            )}
        </form>
    )
}
