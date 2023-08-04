import Wrapper from "@/components/shared/Wrapper";
import { client } from "../../../../sanity/lib/client";
import DynamicImages from "@/components/shared/DynamicImages";
import Quantity from "@/components/shared/Quantity";
import { AiOutlineShoppingCart } from "react-icons/ai";

const kebabToCaps = (arg: string) => {
   const words = arg.split("-");
   return words
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
};

const getImages = async (arg: string) => {
   const res = await client.fetch(
      `*[_type=='product' && name=='${kebabToCaps(arg)}']`
   );
   return res;
};

const Size = ({ text }: { text: string }) => {
   return (
      <div
         className="rounded-full w-10 h-10 p-2 text-center
                      font-bold text-xl hover:cursor-pointer
                      shadow hover:shadow-md"
      >
         {text}
      </div>
   );
};

const Page = async ({ params }: { params: { products: string } }) => {
   const { products } = params;
   const [p] = await getImages(products);

   return (
      <Wrapper>
         <section className="py-10">
            <div className="flex flex-col md:items-center gap-6 md:flex-row">
               <DynamicImages product={p} />
               <div className="space-y-5">
                  <h1 className="text-3xl font-light">{p.name}</h1>
                  <h2 className="text-xl font-semibold">Select Size</h2>
                  <div className="flex gap-2">
                     <Size text="XS" />
                     <Size text="S" />
                     <Size text="M" />
                     <Size text="L" />
                     <Size text="XL" />
                  </div>
                  <Quantity />
                  <h1 className="text-3xl font-bold">
                     <span className="font-normal">Price: </span>${p.price}
                  </h1>
                  <button className="px-6 py-3 flex justify-center gap-1 items-center bg-stone-900 text-white">
                     <span className="text-3xl">
                        <AiOutlineShoppingCart />
                     </span>
                     Add To Cart
                  </button>
                  <h1 className="font-bold">Product information</h1>
               </div>
            </div>
         </section>
      </Wrapper>
   );
};

export default Page;
