"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { IProducts } from "../home/Products";

const DynamicImages = ({ product }: { product: IProducts }) => {
   const [image, setImage] = useState(product.img);

   return (
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
   );
};

export default DynamicImages;
