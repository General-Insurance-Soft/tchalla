import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('authToken'); // Check if auth token exists

  if (!token) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

export const config = {
  matcher: ['/page/:path*'], // Protect specific routes
};
