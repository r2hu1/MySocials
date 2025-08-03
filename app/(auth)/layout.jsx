import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoading } from "@clerk/nextjs";
export default function RootLayout({ children }) {
  return (
    <main className="!bg-red-400 fixed top-0 left-0 right-0 h-full w-full flex justify-center items-center px-6">
      <ClerkLoading>
        <Skeleton className="h-[264px] w-[500px] max-w-[300px]" />
      </ClerkLoading>
      <div>{children}</div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </main>
  );
}
