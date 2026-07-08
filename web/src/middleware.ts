import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Dashboard: basic access gate until auth is implemented with Figma design
  if (pathname.startsWith("/dashboard")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");

    const accessKey = process.env.DASHBOARD_ACCESS_KEY;
    if (accessKey && process.env.NODE_ENV === "production") {
      const provided =
        request.nextUrl.searchParams.get("key") ||
        request.cookies.get("kansabi_dashboard")?.value;

      if (provided !== accessKey) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      if (request.nextUrl.searchParams.get("key") === accessKey) {
        response.cookies.set("kansabi_dashboard", accessKey, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          path: "/dashboard",
          maxAge: 60 * 60 * 24 * 7,
        });
      }
    }
  }

  // Block common probe paths
  const blocked = ["/wp-admin", "/wp-login.php", "/.env", "/phpmyadmin"];
  if (blocked.some((p) => pathname.startsWith(p))) {
    return new NextResponse(null, { status: 404 });
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/wp-admin/:path*",
    "/wp-login.php",
    "/.env",
    "/phpmyadmin/:path*",
  ],
};
