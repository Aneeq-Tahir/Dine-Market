"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TbAlignRight, TbX } from "react-icons/tb";

const menu = [
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
         <div className="lg:hidden flex justify-between px-5">
            <div className="flex flex-col gap-5 font-medium">
               {menu.map((v, i) => {
                  return (
                     <Link href={v.link} key={i}>
                        {v.name}
                     </Link>
                  );
               })}
            </div>
            <div className="flex flex-col items-end justify-between gap-5">
               <div>
                  <Link href={"#"}>
                     <div className="w-10 text-2xl rounded-full bg-slate-200 flex h-10 items-center justify-center">
                        <span className="mr-[2px]">
                           <AiOutlineShoppingCart />
                        </span>
                     </div>
                  </Link>
               </div>
               <div className="w-[14rem] sm:w-[17rem] flex items-center border px-2 rounded-md focus-within:ring-1 ring-slate-400 focus-within:border-slate-400">
                  <button>
                     <AiOutlineSearch />
                  </button>
                  <input
                     placeholder="Search"
                     className="ml-1 w-full py-3 h-7 outline-none"
                     type="text"
                  />
               </div>
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

   return (
      <>
         <header>
            <nav className="flex py-5 px-7 md:px-10 lg:px-16 justify-between items-center max-w-[80.5rem] mx-auto">
               <Link href={"/"}>
                  <Image
                     width={150}
                     height={100}
                     alt="logo"
                     src={"/logo.webp"}
                  />
               </Link>
               <div className="hidden lg:flex gap-5 font-medium">
                  {menu.map((v, i) => {
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
               <div className="hidden lg:block">
                  <Link href={"#"}>
                     <div className="w-10 text-2xl rounded-full bg-slate-200 flex h-10 items-center justify-center">
                        <span className="mr-[2px]">
                           <AiOutlineShoppingCart />
                        </span>
                     </div>
                  </Link>
               </div>
               <button onClick={handleToggle} className="lg:hidden text-3xl">
                  {toggle === true ? <TbX /> : <TbAlignRight />}
               </button>
            </nav>
            {toggle === true && <MobileNav />}
         </header>
      </>
   );
};

export default Navbar;
