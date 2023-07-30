const Newsletter = () => {
   return (
      <>
         <section className="h-[25rem] w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 justify-between">
               <h1 className="text-3xl font-bold">Subscribe Our Newsletter</h1>
               <p className="text-lg">
                  Get the latest information and promo offers directly
               </p>
               <div className="flex flex-col md:flex-row gap-2">
                  <input
                     type="email"
                     name="subscribe"
                     id="subscribe"
                     className="px-4 py-2 w-80 outline-none border focus-within:ring-1 ring-slate-400 focus-within:border-slate-400"
                     placeholder="Email Address"
                  />
                  <button className="bg-stone-900 text-white px-8 py-2 text-base transition-all hover:scale-[1.05] hover:shadow-xl">
                     Subscribe
                  </button>
               </div>
            </div>
         </section>
      </>
   );
};

export default Newsletter;
