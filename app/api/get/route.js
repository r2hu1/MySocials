import User from "@/models/user";
import { currentUser } from "@clerk/nextjs/server";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  const { username } = await currentUser();
  try {
    await mongoose.connect(process.env.NEXT_MONGO_URI);
    let data = await User.findOne({ username });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
