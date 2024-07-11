import User from "@/models/user";
import { currentUser } from "@clerk/nextjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    let { emailAddresses, imageUrl } = await currentUser();
    let email = emailAddresses[0].emailAddress;
    const { username, bio, youtube, insta, face, github, name } = await request.json();
    try {
        await mongoose.connect(process.env.NEXT_MONGO_URI);
        const findCurrentUser = await User.findOne({ email });
        if (findCurrentUser) {
            const getSimilarUsername = await User.findOne({ username: username });
            if (getSimilarUsername.email != email) {
                return NextResponse.json({ error: "Username is already in use" }, { status: 500 });
            }
            else {
                const findAndUpdateCurrentUser = await User.findOneAndUpdate({ email }, {
                    name: name,
                    username: username,
                    bio: bio,
                    youtube: youtube,
                    instagram: insta,
                    facebook: face,
                    github: github,
                    image: imageUrl
                });
                return NextResponse.json({ "message": "success", name, username, bio, youtube, insta, face, github }, { status: 200 });
            }
        }
        else {
            const getSimilarUsername = await User.findOne({ username: username });
            if (getSimilarUsername.email != email) {
                return NextResponse.json({ error: "Username is already in use" }, { status: 500 });
            }
            else {
                const makeNewUser = await User.create({
                    name: name,
                    username: username,
                    email: email,
                    bio: bio,
                    youtube: youtube,
                    instagram: insta,
                    facebook: face,
                    github: github,
                    image: imageUrl
                });
                return NextResponse.json({ "message": "success", name, username, bio, youtube, insta, face, github }, { status: 200 });
            }
        }
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};