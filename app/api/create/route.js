import User from "@/models/user";
import { currentUser } from "@clerk/nextjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    await mongoose.connect(process.env.NEXT_MONGO_URI);

    const { emailAddresses, imageUrl } = await currentUser();
    const email = emailAddresses[0].emailAddress;

    const {
        name, username, bio, youtube, insta, face, twitter, linkedin, snapchat, github,
        threads, reddit, stackoverflow, leetcode, codeforces, hackerrank, codechef, geeksForGeeks,
        twitch, soundcloud, spotify, applemusic, discord, telegram, whatsapp, skype, amazon, shopify,
        kofi, buyMeACoffee, patreon, website, blog, email: emailField, phone, accessKey
    } = await request.json();


    try {
        const findCurrentUser = await User.findOne({ email: email });

        const getSimilarUsername = await User.findOne({ username: username });
        if (getSimilarUsername && getSimilarUsername.email !== email) {
            console.log(getSimilarUsername.email);
            return NextResponse.json({ error: "Username is already in use" }, { status: 500 });
        }

        if (findCurrentUser) {
            await User.findOneAndUpdate(
                { email: email },
                {
                    name: name,
                    username: username,
                    bio: bio,
                    youtube: youtube,
                    instagram: insta,
                    facebook: face,
                    twitter: twitter,
                    linkedin: linkedin,
                    snapchat: snapchat,
                    github: github,
                    threads: threads,
                    reddit: reddit,
                    stackoverflow: stackoverflow,
                    leetcode: leetcode,
                    codeforces: codeforces,
                    hackerrank: hackerrank,
                    codechef: codechef,
                    geeksForGeeks: geeksForGeeks,
                    twitch: twitch,
                    soundcloud: soundcloud,
                    spotify: spotify,
                    applemusic: applemusic,
                    discord: discord,
                    telegram: telegram,
                    whatsapp: whatsapp,
                    skype: skype,
                    amazon: amazon,
                    shopify: shopify,
                    kofi: kofi,
                    buyMeACoffee: buyMeACoffee,
                    patreon: patreon,
                    website: website,
                    blog: blog,
                    email: emailField,
                    phone: phone,
                    image: imageUrl,
                    accessKey
                }
            );
            return NextResponse.json({ message: "success", name, username, bio, youtube, insta, face, twitter, linkedin, snapchat, github, threads, reddit, stackoverflow, leetcode, codeforces, hackerrank, codechef, geeksForGeeks, twitch, soundcloud, spotify, applemusic, discord, telegram, whatsapp, skype, amazon, shopify, kofi, buyMeACoffee, patreon, website, blog, email, phone, accessKey }, { status: 200 });
        } else {
            await User.create({
                name: name,
                username: username,
                bio: bio,
                youtube: youtube,
                instagram: insta,
                facebook: face,
                twitter: twitter,
                linkedin: linkedin,
                snapchat: snapchat,
                github: github,
                threads: threads,
                reddit: reddit,
                stackoverflow: stackoverflow,
                leetcode: leetcode,
                codeforces: codeforces,
                hackerrank: hackerrank,
                codechef: codechef,
                geeksForGeeks: geeksForGeeks,
                twitch: twitch,
                soundcloud: soundcloud,
                spotify: spotify,
                applemusic: applemusic,
                discord: discord,
                telegram: telegram,
                whatsapp: whatsapp,
                skype: skype,
                amazon: amazon,
                shopify: shopify,
                kofi: kofi,
                buyMeACoffee: buyMeACoffee,
                patreon: patreon,
                website: website,
                blog: blog,
                email: emailField,
                phone: phone,
                image: imageUrl,
                accessKey,
            });
            return NextResponse.json({ message: "success", name, username, bio, youtube, insta, face, twitter, linkedin, snapchat, github, threads, reddit, stackoverflow, leetcode, codeforces, hackerrank, codechef, geeksForGeeks, twitch, soundcloud, spotify, applemusic, discord, telegram, whatsapp, skype, amazon, shopify, kofi, buyMeACoffee, patreon, website, blog, email: emailField, phone, accessKey }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
