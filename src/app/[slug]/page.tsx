import { client } from "../../../sanity/lib/client";
import { Products } from "@/components/home/Products";
import DynamicProducts from "@/components/shared/DynamicProducts";

// export async function generateStaticParams() {
//    const products = await fetch("http://localhost:3000").then((res) =>
//       res.json()
//    );
//    return products.map((product: { slug: string }) => ({
//       slug: product.slug,
//    }));
// }

const getProducts = async (arg: string) => {
   const res = await client.fetch(`*[_type=='product' && category=='${arg}']`);
   return res;
};

const Page = async ({ params }: { params: { slug: string } }) => {
   const { slug } = params;
   const p: Products[] = await getProducts(slug);
   
   return <DynamicProducts products={p} />;
};

export default Page;
