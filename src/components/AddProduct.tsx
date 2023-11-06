"use client";
import React, { useState } from "react";
import  IProduct  from "@/interface";
import { useAppDispatch,useAppSelector } from "@/redux/store";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "@/redux/features/cart/cartSlice";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = ({
   product,
   userId,
}: {
   product: IProduct;
   userId: string;
}) => {
   const [qty, setQty] = useState(0);

   const dispatch = useAppDispatch();
   const size = useAppSelector((state) => state.cart.size);

   const getDbData = async () => {
      const res = await fetch(`/api/cart/${userId}`);
      if (!res.ok) throw new Error("failed to fetch data");
      const data = await res.json();
      return data;
   };
   const handleCart = async () => {
      try {
         const cartData = await getDbData();
         const existingItem = cartData.cartItems.find(
            (item: any) => item._id === product._id
         );
         if (existingItem) {
            const newQty = existingItem.quantity + qty;
            const newPrice = newQty * product.price;

            const res = await fetch("/api/cart", {
               method: "PUT",
               body: JSON.stringify({
                  product_id: product._id,
                  quantity: newQty,
                  totalPrice: newPrice,
                  size
               }),
            });
            if (!res.ok) throw new Error("Failed to update data");
         } else {
            const res = await fetch("/api/cart", {
               method: "POST",
               body: JSON.stringify({
                  product_id: product._id,
                  product_name: product.name,
                  size,
                  image: urlForImage(product.img).url(),
                  price: product.price,
                  quantity: qty,
                  totalPrice: product.price * qty,
               }),
            });
         }
      } catch (error) {
         console.log(error);
      }
   };
   const addToCart = () => {
      toast.promise(handleCart(), {
         loading: "Loading...",
         success: "Added To Cart",
         error: "Error Adding To Cart",
      });
      dispatch(
         addProduct({
            qty,
            size,
            product,
         })
      );
   };
   return (
      <>
         <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Quantity:</h1>
            <Button
               count={qty}
               action={"decrement"}
               onClick={() => setQty(qty - 1)}
            >
               -
            </Button>
            <p className="text-lg font-bold">{qty}</p>
            <Button onClick={() => setQty(qty + 1)}>+</Button>
         </div>

         <button
            onClick={addToCart}
            className="px-6 py-3 flex justify-center gap-1 items-center bg-stone-900 text-white"
         >
            <span className="text-3xl">
               <AiOutlineShoppingCart />
            </span>
            Add To Cart
         </button>
         <Toaster />
      </>
   );
};

export default AddProduct;
