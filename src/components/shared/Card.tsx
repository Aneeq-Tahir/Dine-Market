import Img from "next/image";
import { Image } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import { changeName } from "../home/Products";

interface CardType {
   img: Image;
   price: number;
   name: string;
}

const Card = ({ img, price, name }: CardType) => {
   return (
      <>
         <Link href={`/products/${changeName(name)}`}>
            <div className="flex shadow-lg hover:shadow-xl flex-col mx-4 transition-all hover:scale-[1.06]">
               <Img
                  width={350}
                  alt={name}
                  height={100}
                  src={urlForImage(img).url()}
                  className="w-full h-full"
               />
               <div className="p-4 space-y-1">
                  <h1 className=" font-medium text-xl">{name}</h1>
                  <p className=" font-bold text-xl">${price}</p>
               </div>
            </div>
         </Link>
      </>
   );
};

export default Card;
