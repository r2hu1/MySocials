import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import DemoImage from "./DemoImage";


export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-20 px-5 md:px-20 lg:px-32 grid">
            <div className="border mb-4 w-fit mx-auto p-2 px-4 rounded-full bg-background">
                <p className="text-xs flex items-center justify-center">
                   ✨ Contribute to this project on <a className="hover:text-primary hover:underline flex items-center justify-center gap-1 ml-1" href="https://github.com/r2hu1/mysocials">GitHub <ArrowRight className="h-4 w-4"/></a>
                </p>
            </div>
            <div className="grid place-content-center text-center gap-2">
                <h1 className="text-3xl max-w-md md:max-w-2xl md:text-4xl font-medium">Share your every socials in one single accessable link<span className="text-primary">.</span></h1>
                <p className="text-xs max-w-sm md:max-w-md text-center mx-auto">Simplify and elevate your online presence effortlessly with MySocials, where one link connects to endless opportunities.</p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-7">
                <Button asChild><Link href={!user ? "/sign-in" : "/dashboard/profile"}>Get Started</Link></Button>
                <Button variant="outline" asChild><Link href="/r2hu1">Demo <ArrowRight className="h-4 w-4 -rotate-45 ml-[2px]" /></Link></Button>
            </div>
            <div className="mt-20 bg-secondary p-1 rounded-lg w-fit mx-auto">
                <DemoImage/>
            </div>
        </div>
    )
}
