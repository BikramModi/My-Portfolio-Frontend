import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const cookie = request.headers.get("cookie") ?? "";

  const accessToken = request.cookies.get("accessToken")?.value;

  console.log("========== MIDDLEWARE ==========");
  console.log("Path:", pathname);
  console.log("Cookie Header:", cookie);
  console.log("Access Token:", accessToken);
  console.log("================================");

  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/about",
    "/projects",
    "/contact",
  ];

  const isPublic = publicRoutes.includes(pathname);

  // No access token
  if (!accessToken) {
    console.log("❌ No access token found in middleware");

    if (isPublic) {
      console.log("➡️ Public route, allowing request");
      return NextResponse.next();
    }

    console.log("➡️ Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("✅ Access token exists, fetching current user...");

  // Fetch current user
  const user = await getCurrentUser(cookie);

  console.log("Current User:", user);

  if (!user) {
    console.log("❌ getCurrentUser() returned null");

    if (pathname === "/login" || pathname === "/register") {
      console.log("➡️ Staying on auth page");
      return NextResponse.next();
    }

    console.log("➡️ Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("✅ Authenticated User:", user);

  // Prevent logged-in users from visiting auth pages
  if (pathname === "/login" || pathname === "/register") {
    console.log("User trying to access auth page");

    if (user.role === "admin") {
      console.log("➡️ Redirecting admin to /admin/dashboard");
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    console.log("➡️ Redirecting user to /dashboard");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Admin routes
  if (pathname.startsWith("/admin")) {
    console.log("Admin route requested");

    if (user.role !== "admin") {
      console.log("❌ Non-admin accessing admin route");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // User routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/profile")) {
    console.log("User route requested");

    if (user.role !== "user") {
      console.log("❌ Admin accessing user route");
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  console.log("✅ Middleware passed");
  console.log("================================");

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};