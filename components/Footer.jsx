import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="px-6 h-32 flex items-center justify-center sm:px-10 md:px-30 text-center sm:text-left">
      <p className="text-sm text-foreground/80 sm:text-base">
        Built by{" "}
        <a
          className="text-foreground underline"
          href="https://github.com/r2hu1"
        >
          r2hu1
        </a>
        . Source code available on{" "}
        <a
          className="text-foreground underline"
          href="https://github.com/r2hu1/MySocials"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
