"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LoaderIcon } from "lucide-react"
import { useState } from "react"

export default function ManageForm() {
    const [isEdit, setIsEdit] = useState(true);
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');

    const [isPublished, setIsPublished] = useState(false);

    const handlePublishEvent = async (e) => {
        setIsPublished(true);
        e.preventDefault();
        setIsEdit(true);
        console.log(username, bio, insta, face, github);
        setIsPublished(false);
    };

    return (
        <form className="grid gap-2 mt-5 lg:px-40" method="post" onSubmit={handlePublishEvent}>
            <Label htmlFor="username" className="mt-2">Username</Label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} disabled={isEdit} id="image" type="text" placeholder="Unique username" />

            <Label htmlFor="bio" className="mt-2">Bio</Label>
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} disabled={isEdit} id="bio" placeholder="Tell others about yourself"></Textarea>

            <Label htmlFor="insta" className="mt-8">Instagram</Label>
            <Input value={insta} onChange={(e) => setInsta(e.target.value)} disabled={isEdit} id="insta" type="text" placeholder="https://instagram.com/username" />

            <Label htmlFor="face" className="mt-2">Facebook</Label>
            <Input value={face} onChange={(e) => setFace(e.target.value)} disabled={isEdit} id="face" type="text" placeholder="https://facebook.com/username" />

            <Label htmlFor="github" className="mt-2">Github</Label>
            <Input value={github} onChange={(e) => setGithub(e.target.value)} disabled={isEdit} id="github" type="text" placeholder="https://github.com/username" />

            <div className="flex gap-2 mt-8">
                <Button type="button" className="w-full" variant="outline" onClick={() => setIsEdit(!isEdit)}>{isEdit ? "Edit" : "Cancel"}</Button>
                <Button className="w-full" type="submit">{ isPublished ? (<LoaderIcon className="w-4 h-4 animate-spin"/>) : "Publish"}</Button>
            </div>
        </form>
    )
}