import Link from "next/link";

export default function LinkCard({ title, href, icon, className }) {
  return (
    href && (
      <Link
        href={href}
        target="_blank"
        className={`w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-card border flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black ${className}`}
      >
        <div className="absolute left-5">{icon}</div>
        {title}
      </Link>
    )
  );
}
