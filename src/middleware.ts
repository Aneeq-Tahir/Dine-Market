import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
   publicRoutes: [
      "/",
      '/cart',
      "/products:path*",
      "/female",
      "/male",
      "/kids",
      "/api/webhook:path*",
      "/studio:path*",
      "/api/cart:path*",
   ],
});

export const config = {
   matcher: [
      "/((?!.*\\..*|_next).*)",
      "/",
      "/(api|trpc)(.*)",
   ],
};
