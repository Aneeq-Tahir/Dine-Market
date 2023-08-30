import Wrapper from "@/components/shared/Wrapper";
import { client } from "../../../../sanity/lib/client";
import ProductPage from "@/components/shared/ProductPage";
import { auth } from "@clerk/nextjs";

const slugToCaps = (arg: string) => {
   const words = arg.split("-");
   return words
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
};

const getImages = async (arg: string) => {
   const res = await client.fetch(
      `*[_type=='product' && name=='${slugToCaps(arg)}']`
   );
   return res;
};

const Page = async ({ params }: { params: { products: string } }) => {
   const { products } = params;
   const [p] = await getImages(products);
   const { userId } = auth();

   return (
      <Wrapper>
         <ProductPage userId={userId as string} product={p} />
      </Wrapper>
   );
};

export default Page;
