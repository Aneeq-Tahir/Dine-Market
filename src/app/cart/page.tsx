"use client";
import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "@/components/Cartitem";
import Checkout from "@/components/Checkout";

const EmptyCart = () => {
   return (
      <div className="flex flex-col mt-8 items-center gap-3">
         <span className="text-7xl">
            <AiOutlineShoppingCart />
         </span>
         <h1 className="font-bold text-3xl">Your Cart is Empty</h1>
      </div>
   );
};

const Cart = () => {
   const items = useSelector((state: RootState) => state.cart.products);
   const ttlPrice = useSelector((state: RootState) => state.cart.amount);
   const ttlQty = useSelector((state: RootState) => state.cart.totalProducts);
   return (
      <Wrapper>
         <div className="flex flex-col p-6 sm:p-10 my-4 sm:my-8 gap-6">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            <div className="flex flex-col-reverse gap-4 items-start lg:flex-row">
               <div className="flex flex-col gap-6">
                  {items.length > 0 &&
                     items.map((v) => <CartItem item={v} key={v._id} />)}
               </div>
               <div
                  className={`${
                     items.length > 0 ? "flex" : "hidden"
                  } flex-col bg-[#fbfcff] rounded p-4 space-y-2`}
               >
                  <h1 className="font-bold text-lg">Order Summary</h1>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                     <p>Quantity:</p>
                     <p>{ttlQty}</p>
                     <p>Total Price:</p>
                     <p>${ttlPrice}</p>
                  </div>
                  <Checkout products={items} />
               </div>
            </div>
            {items.length === 0 && <EmptyCart />}
         </div>
      </Wrapper>
   );
};

export default Cart;
