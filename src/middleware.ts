import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const cookieToken = request.cookies.has("@motors-shop:token");

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (cookieToken) return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/register")) {
    if (cookieToken) return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/login", "/register"]
};
