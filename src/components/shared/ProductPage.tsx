"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { changeSize } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import  IProduct  from "@/interface";
import AddProduct from "../AddProduct";

const Size = ({ text }: { text: string }) => {
   const dispatch = useAppDispatch();
   return (
      <button
         onClick={() => dispatch(changeSize(text))}
         className="rounded-full focus:border border-gray-300 w-10 h-10 p-2 text-center font-bold text-xl hover:cursor-pointer shadow hover:shadow-md"
      >
         {text}
      </button>
   );
};

const ProductPage = ({
   product,
   userId,
}: {
   product: IProduct;
   userId: string;
}) => {
   const [image, setImage] = useState(product.img);

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
               <h1 className="text-2xl font-normal">
                  Price:
                  <span className="text-2xl font-bold"> ${product.price}</span>
               </h1>
               <AddProduct product={product} userId={userId} />
            </div>
         </div>
      </section>
   );
};

export default ProductPage;
