import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|messages|images|fonts|manifest|serviceworker|favicon.ico|robots.txt).*)",
    "/",
  ],
};
