import Footer from "@/components/Footer";
import Header from "../../_components/Header";
import TopNav from "../../_components/TopNav";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ManageForm from "../../_components/ManageForm";

export default async function Page() {
    const { imageUrl, emailAddresses, firstName, lastName } = await currentUser();
    return (
        <div>
            <Header />
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
                        <p className="text-xs">In order to edit profile image visit <a href="/dashoard/manage" className="text-primary hover:underline">Manage</a><span className="text-red-600"> *</span></p>
                    </div>
                    <ManageForm/>
                </div>
            </div>
            <Footer />
        </div>
    )
}