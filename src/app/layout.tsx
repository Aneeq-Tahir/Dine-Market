import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Provider from "@/components/Provider";
import { ClerkProvider, auth } from "@clerk/nextjs";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Dine Market",
   description: "A Clothing Store",
};

export default function RootLayout({
   children
}: {
   children: React.ReactNode;
}) {
   const {userId} = auth()
   return (
      <ClerkProvider>
         <Provider>
            <html lang="en">
               <body className={`${sora.className} min-h-screen dark:bg-white`}>
                  <Navbar userId={userId as string} />
                  {children}
                  <Footer />
               </body>
            </html>
         </Provider>
      </ClerkProvider>
   );
}
