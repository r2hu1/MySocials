"use client";
import { useTheme } from "next-themes"

export default function DemoImage() {
    const { resolvedTheme } = useTheme();
    let currentTheme = resolvedTheme == "dark" ? '/demo.png' : '/demo-light.png';
    return (
        <img className="rounded-md" src={currentTheme} alt="demo" />
    )
}