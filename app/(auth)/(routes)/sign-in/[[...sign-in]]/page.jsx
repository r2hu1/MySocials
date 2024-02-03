"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { useTheme } from "next-themes"

export default function Page() {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? dark : null;
  return (
    <SignIn appearance={{ baseTheme: currentTheme }} />
  );
}