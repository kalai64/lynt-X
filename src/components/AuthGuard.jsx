"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const publicRoutes = [
  "/sign-in",
  "/sign-up",
  "/sign-in/factor-one",
  "/sign-up/continue",
  "/sso-callback",
  "/verify",
  "/reset-password",
  "/reset-password/confirm",
];

export default function AuthGuard({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoaded && !isSignedIn && !publicRoutes.includes(pathname)) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, pathname, router]);

  return children;
}
