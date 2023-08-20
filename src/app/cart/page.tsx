"use client";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface IItem {
   img: IImage;
   txt: string;
   price: number;
   size: string;
}

const EmptyCart = () => {
   return (
      <div className="flex flex-col mt-8 items-center gap-3">
         <span className="text-7xl">
            <AiOutlineShoppingCart />
         </span>
         <h1 className="font-bold text-3xl">Your Cart is Empty</h1>
      </div>
   );
};

const CartItem = ({ img, txt, price, size }: IItem) => {
   return (
      <div className="flex border rounded">
         <div className="flex gap-4">
            <Image
               src={urlForImage(img).url()}
               alt=""
               width={150}
               height={100}
               className="w-48 h-52 rounded"
            />
            <div className="flex flex-col justify-evenly">
               <h1 className="text-2xl">{txt}</h1>
               <h1 className="text-xl">Size: {size}</h1>
               <h1 className="font-bold text-xl">$ {price}</h1>
            </div>
         </div>
         <div className=""></div>
      </div>
   );
};

const Cart = () => {
   const items = useSelector((state: RootState) => state.cart.products);

   return (
      <Wrapper>
         <div className="flex flex-col p-10 my-8 gap-6">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            {items.length > 0 ? (
               items.map((v, i) => (
                  <CartItem
                     size={v.size}
                     price={v.price}
                     img={v.img}
                     txt={v.txt}
                     key={i}
                  />
               ))
            ) : (
               <EmptyCart />
            )}
         </div>
      </Wrapper>
   );
};

export default Cart;
