import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <h1 className="text-3xl font-bold"><span className="text-primary">My</span>Socials<span className="text-primary">.</span></h1>
        </Link>
    )
}