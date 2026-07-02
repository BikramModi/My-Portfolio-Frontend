import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const cookie = request.headers.get('cookie') ?? '';

  const accessToken = request.cookies.get('accessToken')?.value;

  const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/about',
    '/projects',
    '/contact',
  ];

  const isPublic = publicRoutes.includes(pathname);

  // No access token
  if (!accessToken) {
    if (isPublic) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Fetch current user
  const user = await getCurrentUser(cookie);

  if (!user) {
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Prevent logged-in users from visiting auth pages
  if (pathname === '/login' || pathname === '/register') {
    if (user.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Admin routes
  if (pathname.startsWith('/admin')) {
    if (user.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // User routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    if (user.role !== 'user') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
