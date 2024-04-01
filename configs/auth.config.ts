import type { NextAuthConfig } from 'next-auth';

// /https://nextjs.org/learn/dashboard-app/adding-authentication
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook

//https://authjs.dev/getting-started/providers/credentials-tutorial
// https://authjs.dev/reference/nextjs

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;