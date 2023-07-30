import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="flex flex-col-reverse lg:flex-row max-w-[80.5rem] gap-16 justify-between md:mx-auto p-10">
         <div className="flex flex-col gap-6">
            <Link href={"/"}>
               <Image src={"/logo.webp"} width={150} height={100} alt="logo" />
            </Link>
            <p className="sm:w-80">
               Small, artisan label that offers a thoughtfully curated
               collection of high quality everyday essentials made.
            </p>
            <div className="flex gap-4 flex-wrap">
               <Link href={"#"} className="p-3 text-xl bg-gray-200 rounded-lg">
                  <FaTwitter />
               </Link>
               <Link href={"#"} className="p-3 text-xl bg-gray-200 rounded-lg">
                  <FaFacebookF />
               </Link>
               <Link href={"#"} className="p-3 text-xl bg-gray-200 rounded-lg">
                  <FaLinkedinIn />
               </Link>
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
               <h1 className="font-bold text-stone-400 text-2xl">Company</h1>
               <Link href={"#"}>About</Link>
               <Link href={"#"}>Terms of Use</Link>
               <Link href={"#"}>Privacy Policy</Link>
               <Link href={"#"}>How it Works</Link>
               <Link href={"#"}>Contact Us</Link>
            </div>
            <div className="flex flex-col gap-4">
               <h1 className="font-bold text-stone-400 text-2xl">Support</h1>
               <Link href={"#"}>Support Center</Link>
               <Link href={"#"}>24hr Service</Link>
               <Link href={"#"}>Quick Chat</Link>
            </div>
            <div className="flex flex-col gap-4">
               <h1 className="font-bold text-stone-400 text-2xl">Contact</h1>
               <Link href={"#"}>Whatsapp</Link>
               <Link href={"#"}>Support 24hr</Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
