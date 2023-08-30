import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
   return (
      <>
         <section className="flex justify-between items-center mt-10">
            <div className="space-y-10">
               <div className="inline-block bg-[#e1edff] py-2 text-blue-700 px-9 font-bold text-lg rounded-lg">
                  Sale 70%
               </div>
               <h1 className="font-bold text-5xl lg:text-6xl lg:max-w-[25rem]">
                  An Industrial Take on Streetwear
               </h1>
               <p className="sm:w-[28rem]">
                  Anyone can beat you but no one can beat your outfit as long as
                  you wear Dine outfits
               </p>
               <Link
                  href={"/products"}
                  className="bg-stone-900 text-white text-base px-7 py-3 inline-flex items-center gap-2 transition-all hover:scale-[1.05] hover:shadow-xl"
               >
                  <span className="text-3xl">
                     <AiOutlineShoppingCart />
                  </span>
                  Start Shopping
               </Link>
               <div className="grid grid-cols-4 gap-x-10 gap-y-4">
                  <div className="col-span-2 md:col-span-1">
                     <Image
                        src={"/hero/featured1.webp"}
                        alt="Bazaar"
                        width={100}
                        height={100}
                     />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                     <Image
                        src={"/hero/featured2.webp"}
                        alt="Bustle"
                        width={100}
                        height={100}
                     />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                     <Image
                        src={"/hero/featured3.webp"}
                        alt="Versace"
                        width={100}
                        height={100}
                     />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                     <Image
                        src={"/hero/featured4.webp"}
                        alt="Instyle"
                        width={100}
                        height={100}
                     />
                  </div>
               </div>
            </div>
            <div className="overflow-hidden hidden lg:block rounded-full bg-[#ffece3]">
               <Image
                  width={600}
                  height={600}
                  alt={"woman wearing cameryn dress"}
                  src={"/hero/header.webp"}
               />
            </div>
         </section>
      </>
   );
};

export default Header;
