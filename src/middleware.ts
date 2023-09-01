import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
   publicRoutes: [
      "/",
      '/cart',
      "/products/:path*",
      "/female",
      "/male",
      "/kids",
      "/api/webhook/:path*",
      "/studio/:path*",
   ],
});

export const config = {
   matcher: [
      "/api/cart/:path*",
      "/((?!.*\\..*|_next).*)",
      "/",
      "/(api|trpc)(.*)",
   ],
};
