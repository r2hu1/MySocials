"use client";
import { useTheme } from "next-themes"

export default function DemoImage() {
    const { resolvedTheme, systemTheme } = useTheme();
    let currentTheme = resolvedTheme == "dark" ? '/demo.png' : '/demo-light.png';
    return (
        <img className="rounded-lg" src={currentTheme} alt="demo" />
    )
}