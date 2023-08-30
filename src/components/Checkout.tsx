'use client'
import React from "react";
import  IProduct  from "@/interface";
import getStripePromise from "@/lib/stripe";

const Checkout = ({products}: {products: IProduct[]}) => {
    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        const response = await fetch("/api/stripe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
          body: JSON.stringify(products),
        });
    
        const data = await response.json();
    
        if (data.session) {
          stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
      };
    return (
      <button onClick={handleCheckout} className="px-6 py-3 flex disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-400 justify-center gap-1 items-center bg-stone-900 text-white">
         Checkout
      </button>
   );
};

export default Checkout;
