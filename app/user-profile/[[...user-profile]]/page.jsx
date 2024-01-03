"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoading, UserProfile } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { useTheme } from "next-themes"


const UserProfilePage = () => {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? dark : null;
  return (
    <div className="py-10 grid place-content-center">
      <UserProfile path="/user-profile" routing="path" appearance={{ baseTheme: currentTheme }} />
      <ClerkLoading>
        <Skeleton className="h-[550px] w-[400px]" />
      </ClerkLoading>
    </div>
  )
};

export default UserProfilePage;