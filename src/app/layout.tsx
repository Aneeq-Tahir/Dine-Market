import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Dine Market",
   description: "A Clothing Store",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${sora.className} min-h-screen dark:bg-white`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
