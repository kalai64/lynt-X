"use client";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, Suspense } from "react";
import StoreOrgId from "@/components/StoreOrgId";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import AuthGuard from "@/components/AuthGuard";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      navigate={(to) => routerPush(to)}
      afterSignOutUrl="/sign-in"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard"
    >
      <Providers>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.png" sizes="any" />
          </head>
          <body>
            <AuthGuard>
              <Suspense fallback={<LoadingSpinner/>}>
                <LayoutContent>{children}</LayoutContent>
              </Suspense>
            </AuthGuard>

            <Footer />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}

function LayoutContent({ children }) {
  const pathname = usePathname();
  const router = useRouter();

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

  const isAuthPage = publicRoutes.includes(pathname);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  function routerPush(to) {
    router.push(to);
  }

  return (
    <>
      {isAuthPage ? (
        <div className="min-h-screen flex items-center justify-center">{children}</div>
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen flex-1 p-2 overflow-x-auto transition-all duration-300 ease-in-out">
            <StoreOrgId />
            <Toaster position="top-right" reverseOrder={false} />
            {children}
          </main>
        </>
      )}
      {/* <Footer currentYear={currentYear} /> */}
    </>
  );
}


