import Slider from "./Slider";
import { client } from "../../../sanity/lib/client";
import { Image } from "sanity";

export interface Products {
   name: string;
   _id: string;
   price: number;
   img: Image;
   category: string
}

export const changeName = (arg: string) => {
   const lowerCase = arg.toLowerCase();
   const lowerCaseDashes = lowerCase.replace(/\s+/g, "-");
   return lowerCaseDashes;
};

const getProducts = async () => {
   const res = await client.fetch('*[_type=="product"]');
   return res;
};

const Products = async () => {
   const p: Products[] = await getProducts();

   return (
      <>
         <section className="mt-28">
            <h1 className="font-bold text-3xl text-center">
               Check Our Products
            </h1>
            <Slider products={p}/>
         </section>
      </>
   );
};

export default Products;
