import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoading } from "@clerk/nextjs";
export default function RootLayout({ children }) {
    return (
        <main className="fixed top-0 left-0 right-0 h-full w-full flex justify-center items-center">
            <ClerkLoading>
                <Skeleton className="h-[264px] w-[500px] max-w-[300px]" />
            </ClerkLoading>
            {children}
        </main>
    )
}