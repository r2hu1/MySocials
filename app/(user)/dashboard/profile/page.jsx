import TopNav from "../../_components/TopNav";
import { Input } from "@/components/ui/input";
import { ClerkLoaded, ClerkLoading, currentUser } from "@clerk/nextjs";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({ params }) {
    return {
        title: "Profile",
    }
}

export default async function Page() {
    const { imageUrl, emailAddresses, firstName, lastName } = await currentUser();

    return (
        <div>
            <TopNav active={["Profile"]} link="" />

            <div className="py-10 px-7 md:px-20 lg:px-32 mb-14">
                <ClerkLoaded>
                    <div className="flex flex-col items-center justify-center gap-2 mt-10">
                        <img
                            className="w-20 h-20 rounded-full"
                            src={imageUrl}
                            alt="Profile image"
                        />
                        <Label>Profile Image</Label>
                    </div>
                </ClerkLoaded>
                <ClerkLoaded>
                    <div className="grid gap-2 mt-5 lg:px-40">
                        <Label htmlFor="firstName" className="mt-3">First Name</Label>
                        <Input disabled id="firstName" value={firstName} readonly />

                        <Label htmlFor="lname" className="mt-3">Last Name</Label>
                        <Input disabled id="lname" value={lastName || "Update Lastname From Google Account"} readonly />

                        <Label htmlFor="email" className="mt-3">Email</Label>
                        <Input disabled id="email" value={emailAddresses[0].emailAddress} readonly />
                    </div>
                    <div className="mt-5 grid gap-2 lg:px-40">
                        <Button asChild><Link href="/user-profile">Edit</Link></Button>
                        <p className="text-xs text-center">To edit your profile visit <Link href="/user-profile/profile" className="text-primary hover:underline">User Profile</Link><span className="text-red-600"> *</span></p>
                    </div>
                </ClerkLoaded>

                <ClerkLoading>
                    <div className="flex flex-col items-center justify-center gap-2 mt-10">
                        <Skeleton className="h-20 w-20 rounded-full" />
                        <Skeleton className="h-5 w-24" />
                    </div>

                    <div className="grid gap-2 mt-5">
                        <Skeleton className="h-5 w-24 mt-3" />
                        <Skeleton className="h-10 w-full" />

                        <Skeleton className="h-5 w-24 mt-3" />
                        <Skeleton className="h-10 w-full" />

                        <Skeleton className="h-5 w-24 mt-3" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="mt-5 grid gap-2 lg:px-40">
                        <Skeleton className="h-10 w-full mt-3" />
                        <Skeleton className="h-4 mx-auto w-full max-w-[250px]" />
                    </div>
                </ClerkLoading>
            </div>
        </div>
    )
}