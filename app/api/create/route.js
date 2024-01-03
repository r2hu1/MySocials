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

        if (!username) {
            return NextResponse.json({ error: "Please provide a username" }, { status: 400 });
        }

        if (await User.findOne({ username })) {
            let userData = await User.findOne({ username });
            if (userData.email != email) {
                return NextResponse.json({ error: "Username already exists" }, { status: 400 });
            }
            let data1 = await User.findOneAndUpdate({ username }, { "name": name, "email": email, "username": username, "bio": bio, "youtube": youtube, "instagram": insta, "facebook": face, "github": github, "image": imageUrl });
            return NextResponse.json({ "message": "success", data1 }, { status: 200 });
        }

        const newUser = await User.create({ "name": name, "email": email, "username": username, "bio": bio, "youtube": youtube, "instagram": insta, "facebook": face, "github": github, "image": imageUrl });
        return NextResponse.json({ "message": "success", name, username, bio, youtube, insta, face, github }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};