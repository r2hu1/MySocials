import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import DemoImage from "./DemoImage";


export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-14 px-5 md:px-20 lg:px-32 grid">
            <div className="border mb-4 w-fit mx-auto p-2 px-4 rounded-full bg-background">
                <p className="text-xs flex items-center justify-center">
                    ✨ Contribute to this project on <a className="hover:text-primary hover:underline flex items-center justify-center gap-1 ml-1" href="https://github.com/r2hu1/mysocials">GitHub <ArrowRight className="h-4 w-4" /></a>
                </p>
            </div>
            <div className="grid place-content-center text-center gap-2">
                <h2 class="text-3xl max-w-md sm:max-w-3xl sm:text-4xl font-medium text-gray-900 dark:text-gray-50">Share your every socials in <span class="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">one single accessable link</span></h2>
                <p className="md:text-sm text-xs max-w-sm md:max-w-md text-center mx-auto dark:text-gray-400 text-gray-600">Simplify and elevate your online presence effortlessly with MySocials, where one link connects to endless opportunities.</p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-7">
                <Button asChild variant="pulseBtn"><Link href={!user ? "/sign-in" : "/dashboard/profile"}>Get Started</Link></Button>
                <Button variant="secondary" asChild><Link href="/r2hu1" className="flex items-center gap-1">Demo <ArrowRight className="h-4 w-4 -rotate-45" /></Link></Button>
            </div>
            <div className="mt-20 bg-secondary p-1 rounded-lg w-fit mx-auto">
                <DemoImage />
            </div>
        </div>
    )
}
