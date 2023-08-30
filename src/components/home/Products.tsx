import Slider from "./Slider";
import { client } from "../../../sanity/lib/client";
import  IProduct  from "@/interface";

const getProducts = async () => {
   const res = await client.fetch('*[_type=="product"]');
   return res;
};

const Products = async () => {
   const p: IProduct[] = await getProducts();

   return (
      <>
         <section className="mt-28">
            <h1 className="font-bold text-3xl text-center">
               Check Our Products
            </h1>
            <Slider products={p} />
         </section>
      </>
   );
};

export default Products;
