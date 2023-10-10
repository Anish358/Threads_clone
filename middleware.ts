// this is route protection provided by clerk

import { authMiddleware } from "@clerk/nextjs";

// This middleware protects all routes including api/trpc routes

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook/clerk"],
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
