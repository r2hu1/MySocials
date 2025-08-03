import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
<footer className="px-8 md:px-30 lg:px-32 py-10 mt-40 grid gap-4">
  <div className="flex items-left justify-between">

    <div className="flex flex-col items-left">
      <Logo />
      <p className="text-xs mt-1 text-left">
        Built with{" "}
        <a
          href="https://github.com/r2hu1"
          className="hover:text-primary hover:underline"
        >
          r2hu1
        </a> on GitHub
      </p>
      <ul className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
  <li className="hover:underline hover:text-primary">
    <Link href="https://github.com/r2hu1/mysocials">Fix This Web</Link>
  </li>
  <span>|</span>
  <li className="hover:underline hover:text-primary">
    <Link href="https://github.com/r2hu1/mysocials">Report an Issue</Link>
  </li>
</ul>

      <p className="text-xs mt-2 text-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="text-primary hover:underline">
          MySocials.
        </Link>{" "}
        All Rights Reserved.
      </p>
   
    </div>

 
   
      <ModeToggle />

  </div>
</footer>



    )
}