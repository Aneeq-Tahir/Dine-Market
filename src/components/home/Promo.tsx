import Image from "next/image";

const Promo = () => {
   return (
      <>
         <section className="mt-28">
            <h1 className="font-bold text-3xl text-center mb-8">
               Our Promotions
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
               <div className="flex flex-col sm:col-span-2">
                  <div className="flex flex-col sm:flex-row justify-center items-center bg-[#d6d6d8] mb-2">
                     <div className="pt-5 sm:p-0">
                        <h4 className="font-medium text-2xl">
                           GET UP TO{" "}
                           <span className="font-bold text-3xl">60%</span>
                        </h4>
                        <p className="sm:text-lg">For the summer season</p>
                     </div>
                     <Image
                        width={250}
                        height={300}
                        src={"/hero/event1.webp"}
                        alt="woman wearing a black sweatshirt"
                     />
                  </div>
                  <div className="flex flex-col max-lg:py-10 lg:h-[51.25%] items-center gap-1 py-5 justify-center bg-stone-900 text-white">
                     <h3 className="font-bold text-3xl">GET 30% OFF</h3>
                     <p className="text-xs">USE PROMO CODE</p>
                     <div className="bg-stone-700 text-white text-sm px-7 py-3">
                        DINEWEEKENDSALE
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-between bg-[#efe1c7]">
                  <div className="p-5">
                     <p className="font-semibold">Flex Sweatshirt</p>
                     <span className="line-through mr-2">$100.00</span>
                     <span className="font-bold">$75.00</span>
                  </div>
                  <Image
                     width={250}
                     height={300}
                     src={"/hero/event2.webp"}
                     alt="person wearing a black T"
                     className="mx-auto"
                  />
               </div>
               <div className="flex flex-col justify-between bg-[#d7d7d9]">
                  <div className="p-5">
                     <p className="font-semibold">Flex Push Bombar</p>
                     <span className="line-through mr-2">$225.00</span>
                     <span className="font-bold">$190.00</span>
                  </div>
                  <Image
                     width={250}
                     height={300}
                     src={"/hero/event3.webp"}
                     alt="person wearing a green upper"
                     className="mx-auto"
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default Promo;
