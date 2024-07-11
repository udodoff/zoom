import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { sidebarLinks } from './constants';

const protectedRoutes = createRouteMatcher([
    ...sidebarLinks.map((link) => link.route),
    '/meeting(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (protectedRoutes(req)) auth().protect();
});
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
