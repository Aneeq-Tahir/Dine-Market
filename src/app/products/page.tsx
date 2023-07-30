import { Products } from "@/components/home/Products";
import { client } from "../../../sanity/lib/client";
import DynamicProducts from "@/components/shared/DynamicProducts";

const getProducts = async () => {
   const res = await client.fetch("*[_type=='product']");
   return res;
};

const Page = async () => {
   const p: Products[] = await getProducts();
   
   return <DynamicProducts products={p} />;
};

export default Page;
