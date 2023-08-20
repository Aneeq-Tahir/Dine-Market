"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSize, changeState } from "@/redux/features/counter/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { IProducts } from "../home/Products";
import { RootState } from "@/redux/store";

interface ButtonProps {
   children: React.ReactNode;
   onClick: React.MouseEventHandler;
   count?: number;
   action?: string;
}

export const Button = ({ children, onClick, count, action }: ButtonProps) => {
   return (
      <button
         disabled={action === "decrement" && count === 0 ? true : false}
         onClick={onClick}
         className="rounded-full hover:cursor-pointer border w-10 h-10 text-center p-2 font-semibold"
      >
         {children}
      </button>
   );
};

const Size = ({ text }: { text: string }) => {
   const dispatch = useDispatch();
   return (
      <button
         onClick={() => dispatch(changeSize(text))}
         className="rounded-full w-10 h-10 p-2 text-center font-bold text-xl hover:cursor-pointer shadow hover:shadow-md"
      >
         {text}
      </button>
   );
};

const ProductPage = ({ product }: { product: IProducts }) => {
   const [image, setImage] = useState(product.img);
   const [qty, setQty] = useState(0);

   const dispatch = useDispatch();
   const size = useSelector((state: RootState) => state.cart.size)
   return (
      <section className="py-10">
         <div className="flex flex-col md:items-center gap-6 md:flex-row">
            <div className="flex flex-col-reverse md:flex-row gap-6">
               <div className="flex md:flex-col gap-4 flex-wrap">
                  <Image
                     onMouseEnter={() => setImage(product.img)}
                     width={100}
                     height={100}
                     alt=""
                     src={urlForImage(product.img).url()}
                  />
                  {product.relImgs &&
                     product.relImgs.map((v, i) => (
                        <Image
                           key={i}
                           onMouseEnter={() => setImage(v)}
                           width={100}
                           height={100}
                           alt=""
                           src={urlForImage(v).url()}
                        />
                     ))}
               </div>
               <Image
                  width={500}
                  height={400}
                  src={urlForImage(image).url()}
                  alt={product.name}
               />
            </div>

            <div className="space-y-5">
               <h1 className="text-3xl font-light">{product.name}</h1>
               <h2 className="text-xl font-semibold">Select Size</h2>
               <div className="flex gap-2">
                  <Size text="XS" />
                  <Size text="S" />
                  <Size text="M" />
                  <Size text="L" />
                  <Size text="XL" />
               </div>
               <div className="flex items-center gap-3">
                  <h1 className="text-xl font-semibold">Quantity:</h1>
                  <Button
                     count={qty}
                     action={"decrement"}
                     onClick={() => setQty(qty - 1)}
                  >
                     -
                  </Button>
                  <p className="text-lg font-bold">{qty}</p>
                  <Button onClick={() => setQty(qty + 1)}>+</Button>
               </div>
               <h1 className="text-3xl font-bold">
                  <span className="font-normal">Price: </span>${product.price}
               </h1>
               <button
                  onClick={() =>
                     dispatch(
                        changeState({
                           qty,
                           size,
                           img: product.img,
                           txt: product.name,
                           price: product.price,
                        })
                     )
                  }
                  className="px-6 py-3 flex justify-center gap-1 items-center bg-stone-900 text-white"
               >
                  <span className="text-3xl">
                     <AiOutlineShoppingCart />
                  </span>
                  Add To Cart
               </button>
            </div>
         </div>
      </section>
   );
};

export default ProductPage;
