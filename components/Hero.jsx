import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { StarsIcon } from "lucide-react";
import { CornerRightUp } from "lucide-react";
import { CornerRightDown } from "lucide-react";

export default async function Hero() {
  const user = await currentUser();
  return (
    <div className="py-14 px-6 md:px-20 lg:px-32 grid">
      <div className="border mb-4 w-fit mx-auto py-1.5 px-3 rounded-full bg-background">
        <a
          className="hover:underline"
          href="https://github.com/r2hu1/mysocials"
        >
          <p className="text-xs flex items-center justify-center gap-1">
            <StarsIcon className="h-4 w-4" />
            Contribute to this project on GitHub
            <ArrowRight className="h-4 w-4" />
          </p>
        </a>
      </div>
      <div className="grid place-content-center sm:text-center gap-2">
        <h2 className="text-3xl text-center max-w-md sm:max-w-3xl md:max-w-5xl sm:text-4xl font-medium md:text-6xl text-gray-900 dark:text-gray-50">
          Share your every socials in{" "}
          <span className="animate-text-gradient inline-flex bg-linear-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-size-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            one single accessable link.
          </span>
        </h2>
        <p className="md:text-xl text-base sm:text-lg text-[13.5px] max-w-sm md:max-w-2xl text-center sm:mx-auto text-foreground/70 mt-4">
          Effortlessly simplify and amplify your digital presence with MySocials
          — the smart link that brings all your content, profiles, and
          opportunities together in one beautiful, shareable place.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2.5 mt-10">
        <Button asChild>
          <Link
            href={!user ? "/sign-in" : "/dashboard/manage"}
            className="gap-2"
          >
            Get Started
            <CornerRightDown className="!h-4 !w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="https://mysocialz.vercel.app/r2hu1"
            className="flex items-center gap-1"
          >
            Preview <ArrowRight className="h-4 w-4 -rotate-45" />
          </Link>
        </Button>
      </div>
      <div className="mt-32 w-fit h-fit border-primary/10 border-2 rounded-lg">
        <img
          className="rounded-lg"
          src="/assets/homepage-dark.png"
          alt="Preview"
        />
      </div>
    </div>
  );
}
