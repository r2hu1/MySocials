import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="fixed top-0 left-0 right-0 h-full w-full flex justify-center items-center">
      <SignUp/>
    </main>
  );
}