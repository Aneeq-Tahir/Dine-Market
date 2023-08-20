"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TbAlignLeft, TbX } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const items = [
   {
      name: "Female",
      link: "/female",
   },
   {
      name: "Male",
      link: "/male",
   },
   {
      name: "Kids",
      link: "/kids",
   },
   {
      name: "All Products",
      link: "/products",
   },
];

const MobileNav = () => {
   return (
      <>
         <div className="lg:hidden flex-col font-medium px-5">
            <div className="w-[17rem] flex items-center border mb-4 px-2 rounded-md focus-within:ring-1 ring-slate-400 focus-within:border-slate-400">
               <button>
                  <AiOutlineSearch />
               </button>
               <input
                  placeholder="Search"
                  className="ml-1 w-full py-3 h-7 outline-none"
                  type="text"
               />
            </div>
            <div className="flex flex-col gap-3 font-medium">
               {items.map((v, i) => {
                  return (
                     <Link href={v.link} key={i}>
                        {v.name}
                     </Link>
                  );
               })}
            </div>
         </div>
      </>
   );
};

const Navbar = () => {
   const [toggle, setToggler] = useState(false);
   const handleToggle = () => {
      setToggler(!toggle);
   };

   const count = useSelector(
      (state: RootState) => state.cart.totalProducts
   );

   return (
      <>
         <header>
            <nav className="flex py-5 px-7 md:px-10 lg:px-16 justify-between items-center max-w-[80.5rem] mx-auto">
               <button onClick={handleToggle} className="lg:hidden text-3xl">
                  {toggle ? <TbX /> : <TbAlignLeft />}
               </button>
               <Link href={"/"}>
                  <Image
                     width={150}
                     height={100}
                     alt="logo"
                     src={"/logo.webp"}
                  />
               </Link>
               <div className="hidden lg:flex gap-5 font-medium">
                  {items.map((v, i) => {
                     return (
                        <Link href={v.link} key={i}>
                           {v.name}
                        </Link>
                     );
                  })}
               </div>
               <div className="hidden w-[17rem] lg:flex items-center border px-2 rounded-md focus-within:ring-1 ring-slate-400 focus-within:border-slate-400">
                  <button className="text-xl">
                     <AiOutlineSearch />
                  </button>
                  <input
                     placeholder="Search"
                     className="ml-1 w-full py-3 h-7 outline-none"
                     type="text"
                  />
               </div>
               <Link
                  className="flex items-start flex-wrap overflow-hidden"
                  href={"/cart"}
               >
                  <div className="w-10 text-2xl rounded-full bg-slate-200 flex h-10 items-center justify-center">
                     <span className="mr-[2px]">
                        <AiOutlineShoppingCart />
                     </span>
                  </div>
                  {count > 0 && (
                     <span className="font-bold bg-red-500 w-4 text-center h-4 text-white text-xs absolute ml-7 rounded-full">
                        {count}
                     </span>
                  )}
               </Link>
            </nav>
            {toggle && <MobileNav />}
         </header>
      </>
   );
};

export default Navbar;
