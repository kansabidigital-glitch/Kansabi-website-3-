import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Dashboard: keep it out of every index. Authentication itself is enforced
  // server-side in (dashboard)/layout.tsx via the Payload session — no shared
  // access key lives here anymore.
  if (pathname.startsWith("/dashboard")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
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
