import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
   publicRoutes: [
      "/",
      "/products:path*",
      "/female",
      "/male",
      "/kids",
      "/api/webhook:path*",
      "/studio:path*",
   ],
});

export const config = {
   matcher: [
      "/((?!.*\\..*|_next).*)",
      "/",
      "/api/cart:path*",
      "/(api|trpc)(.*)",
   ],
};
