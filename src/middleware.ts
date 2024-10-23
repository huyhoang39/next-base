import { NextRequest, NextResponse } from 'next/server';

import { auth } from './auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/login') {
    const session = await auth();
    const user = session?.user?.email;

    if (user) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|messages|images|fonts|manifest|serviceworker|favicon.ico|robots.txt).*)', '/'],
};
