import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";

const kebabToCaps = (arg: string) => {
   const words = arg.split("-");
   const capitalized = words
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
   return capitalized;
};

const getImages = async (arg: string) => {
   const res = await client.fetch(
      `*[_type=='product' && name=='${kebabToCaps(arg)}']`
   );
   return res;
};

const Page = async ({ params }: { params: { slug: string } }) => {
   const { slug } = params;
   const [p] = await getImages(slug);

   return (
      <Wrapper>
         <section className="">
            <div className="flex flex-col md:flex-row">
               <div className="flex flex-col sm:flex-row">
                  <div className="flex sm:flex-col"></div>
                  <Image
                     width={400}
                     height={400}
                     src={urlForImage(p.img).url()}
                     alt={p.name}
                  />
               </div>
               <div className="">{p.name}</div>
            </div>
         </section>
      </Wrapper>
   );
};

export default Page;
