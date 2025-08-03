import User from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request) {
  const { username, name, bio } = await request.json();

  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;

  try {
    await mongoose.connect(process.env.NEXT_MONGO_URI);

    let data = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          username,
          name,
          bio,
          email,
        },
      },
      { upsert: true, new: true },
    );

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
