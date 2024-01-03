"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoading, SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { useTheme } from "next-themes"

export default function Page() {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? dark : null;
  return (
    <main className="fixed top-0 left-0 right-0 h-full w-full flex justify-center items-center">
      <SignIn appearance={{ baseTheme: currentTheme }} />
      <ClerkLoading>
        <Skeleton className="h-[264px] w-[300px]" />
      </ClerkLoading>
    </main>
  );
}