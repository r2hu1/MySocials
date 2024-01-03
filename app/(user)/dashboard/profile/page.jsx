import Footer from "@/components/Footer";
import Header from "../../_components/Header";
import TopNav from "../../_components/TopNav";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs";
import { Label } from "@/components/ui/label";

export default async function Page() {
    const { imageUrl, emailAddresses, firstName, lastName } = await currentUser();
    // console.log(user)
    return (
        <div>
            <Header />
            <TopNav active={["Profile"]} link="" />

            <div className="py-10 px-7 md:px-20 lg:px-32 mb-10">
                <h1 className="text-3xl font-bold">Profile<span className="text-primary">.</span></h1>
                <div className="grid gap-2 place-content-center mt-10">
                    <img
                        className="w-20 h-20 rounded-full"
                        src={imageUrl}
                        alt="Profile image"
                    />
                    <Label>Profile Image</Label>
                </div>
                <div className="grid gap-2 mt-5">
                    <Label htmlFor="firstName" className="mt-3">First Name</Label>
                    <Input id="firstName" value={firstName} readonly />

                    <Label htmlFor="lname" className="mt-3">Last Name</Label>
                    <Input id="lname" value={lastName} readonly />

                    <Label htmlFor="email" className="mt-3">Email</Label>
                    <Input id="email" value={emailAddresses[0].emailAddress} readonly />
                </div>
            </div>
            <Footer />
        </div>
    )
}