import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LinkIcon({ href, icon }) {
  return (
    href && (
      <Button
        asChild
        size="icon"
        variant="outline"
        className="h-8 w-8 hover:bg-primary hover:text-primary-foreground rounded-md"
      >
        <Link href={href} target="_blank">
          {icon}
        </Link>
      </Button>
    )
  );
}
