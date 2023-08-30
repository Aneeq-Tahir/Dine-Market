import { client } from "../../../sanity/lib/client";
import IProduct from "@/interface";
import Card from "@/components/shared/Card";
import Wrapper from "@/components/shared/Wrapper";

export async function generateStaticParams() {
   const products = await client.fetch("*[_type=='product']{slug}");

   return products.map((product: { slug: { current: string } }) => ({
      slug: product.slug.current,
   }));
}

const getProducts = async (arg: string) => {
   const res =
      arg === "products"
         ? await client.fetch("*[_type=='product']")
         : await client.fetch(
              `*[_type=='product' && category->name=='${arg}']`
           );
   return res;
};

const Page = async ({ params }: { params: { slug: string } }) => {
   const { slug } = params;
   
   const p: IProduct[] = await getProducts(slug);

   return (
      <Wrapper>
         <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 py-10">
            {p.map((v) => (
               <Card
                  key={v._id}
                  img={v.img}
                  price={v.price}
                  name={v.name}
                  url={v.slug.current}
               />
            ))}
         </section>
      </Wrapper>
   );
};

export default Page;
