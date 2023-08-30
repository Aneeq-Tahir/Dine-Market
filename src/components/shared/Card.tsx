import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

// const slugify = (arg: string) => {
//    return arg.toLowerCase().replace(/\s+/g, "-");
// };

interface CardType {
   img: IImage;
   price: number;
   name: string;
   url: string;
}

const Card = ({ img, price, name, url }: CardType) => {
   return (
      <>
         <Link href={`/products/${url}`}>
            <div className="flex shadow-lg rounded-lg hover:shadow-xl flex-col mx-4 transition-all hover:scale-[1.06]">
               <Image
                  width={350}
                  alt={name}
                  height={100}
                  src={urlForImage(img).url()}
                  className="w-full h-full rounded-t-lg"
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
