import TopNav from "../../_components/TopNav";
import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs";
import ManageForm from "../../_components/ManageForm";
import Link from "next/link";

export async function generateMetadata({ params }) {
    return {
        title: "Manage",
    }
}

export default async function Page() {
    const { imageUrl, emailAddresses, firstName, lastName } = await currentUser();
    return (
        <div>
            <TopNav active={["Edit"]} link="" />
            <div className="py-10 px-7 md:px-20 lg:px-32 mb-14">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-10">
                        <img
                            className="w-20 h-20 rounded-full"
                            src={imageUrl}
                            alt="Profile image"
                        />
                        <Label>Profile Image</Label>
                        <p className="text-xs">In order to edit profile image visit <Link href="/user-profile/profile" className="text-primary hover:underline">Manage</Link><span className="text-red-600"> *</span></p>
                    </div>
                    <ManageForm/>
                </div>
            </div>
        </div>
    )
}