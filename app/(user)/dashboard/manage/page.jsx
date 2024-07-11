import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs";
import ManageForm from "../../_components/ManageForm";
import Link from "next/link";
import UserPageLink from "../../_components/UserPageLink";


export async function generateMetadata({ params }) {
    return {
        title: "Manage",
    }
}

export default async function Page() {
    const { imageUrl, firstName } = await currentUser();
    return (
        <div>
            <UserPageLink />
            <div className="py-5 px-6 md:px-20 lg:px-32 mb-16">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-10">
                        <img
                            className="w-20 h-20 rounded-full"
                            src={imageUrl}
                            alt={firstName}
                        />
                        <Label>Profile Image</Label>
                        <p className="text-xs dark:text-gray-400 text-gray-600">to change profile picture <Link href="/user-profile/profile" className="text-primary hover:underline">click here</Link><span className="text-red-600">*</span></p>
                    </div>
                    <ManageForm />
                </div>
            </div>
        </div>
    )
}