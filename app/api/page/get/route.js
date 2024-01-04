import User from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    let { username } = await request.json();
    try {
        await mongoose.connect(process.env.NEXT_MONGO_URI);
        let data = await User.findOne({ username });
        return NextResponse.json({ data }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}