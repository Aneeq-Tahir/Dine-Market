"use client";
import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "@/components/Cartitem";

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
   const qty = useSelector((state: RootState) => state.cart.quantity);
   return (
      <Wrapper>
         <div className="flex flex-col p-6 sm:p-10 my-4 sm:my-8 gap-6">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            {items.length > 0 ? (
               items.map((v) => (
                  <CartItem qty={v.quantity} item={v} key={v._id} />
               ))
            ) : (
               <EmptyCart />
            )}
         </div>
      </Wrapper>
   );
};

export default Cart;
