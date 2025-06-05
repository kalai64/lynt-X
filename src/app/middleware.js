import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/complete-profile"],

  async afterAuth(auth, req) {
    const { userId, sessionClaims } = auth;
    const organization = sessionClaims?.publicMetadata?.organization;
    const url = req.nextUrl.clone();

    if (userId && (url.pathname === "/sign-in" || url.pathname === "/sign-up")) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    const isProtectedRoute = !["/", "/sign-in", "/sign-up", "/complete-profile"].includes(url.pathname);

    // if (userId && isProtectedRoute) {
    //   try {
    //     const roleResponse = await fetch(`${req.nextUrl.origin}/api/user-role`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ userId }),
    //     });

    //     const { role } = await roleResponse.json();

    //     if (role === "user" && !organization) {
    //       if (url.pathname !== "/complete-profile") {
    //         url.pathname = "/complete-profile";
    //         return NextResponse.redirect(url);
    //       }
    //     }
    //   } catch (error) {
    //     console.error("Middleware Role Fetch Error:", error);
    //   }
    // }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
