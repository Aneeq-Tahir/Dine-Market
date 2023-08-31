import Image from "next/image";
import Link from "next/link";

const Authentic = () => {
   return (
      <section className="mt-28 space-y-3">
         <h1 className="text-3xl sm:text-5xl font-bold mb-12">
            Unique and Authentic Vintage Designer Jewellery
         </h1>
         <div className="flex flex-col gap-y-6 lg:flex-row-reverse">
            <div className="flex flex-col justify-center sm:flex-row">
               <div>
                  <Image
                     width={250}
                     height={170}
                     src={"/products/feature.webp"}
                     alt="woman wearing a hoodie"
                     className="mx-auto sm:m-0"
                  />
               </div>
               <div className="p-5 flex flex-col gap-8 items-center sm:w-1/2">
                  <p>
                     This piece is ethically crafted in our small family-owned
                     workshop in Peru with unmatched attention to detail and
                     care. The Natural color is the actual natural color of the
                     fiber, undyed and 100% traceable.
                  </p>
                  <Link href='/products' className="p-2 w-32 bg-stone-900 text-white transition-all hover:scale-[1.05] hover:shadow-xl">
                     See All Products
                  </Link>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
               <div>
                  <h1 className="font-bold mb-4 text-lg">
                     Using Good Quality materials
                  </h1>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
               </div>
               <div>
                  <h1 className="font-bold mb-4 text-lg">
                     100% handmade products
                  </h1>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
               </div>
               <div>
                  <h1 className="font-bold mb-4 text-lg">
                     Modern Fashion Design
                  </h1>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
               </div>
               <div>
                  <h1 className="font-bold mb-4 text-lg">
                     Discount for Bulk Orders
                  </h1>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Authentic;
