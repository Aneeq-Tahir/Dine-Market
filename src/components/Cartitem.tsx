"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/redux/store";
import {
   addProduct,
   decrementProduct,
   removeProduct,
} from "@/redux/features/cart/cartSlice";
import  IProduct  from "@/interface";
import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import { toast, Toaster } from "react-hot-toast";

const CartItem = ({ item }: { item: IProduct }) => {
   const [qty, setQty] = useState(item.quantity);
   const dispatch = useAppDispatch();

   const changeQuantity = async (qty: number) => {
      const newPrice = item.price * qty;
      try {
         if (qty) {
            const res = await fetch("/api/cart", {
               method: "PUT",
               body: JSON.stringify({
                  product_id: item._id,
                  quantity: qty,
                  totalPrice: newPrice,
               }),
            });
            if (!res.ok) throw new Error("Failed to update data");
         }
      } catch (err) {
         console.log(err);
      }
   };
   const deleteitems = async () =>
      await fetch(`/api/cart?product_id=${item._id}`, {
         method: "DELETE",
      });
   const handleDelete = () => {
      toast.promise(deleteitems(), {
         loading: "Loading...",
         success: "Products removed",
         error: "Error removing products",
      });
      dispatch(removeProduct(item._id));
   };
   const increment = () => {
      toast.promise(changeQuantity(qty + 1), {
         loading: "Loading...",
         success: "incremented data",
         error: "failed to increment",
      });
      setQty(qty + 1);
      dispatch(addProduct({ product: item, qty: 1 }));
   };
   const decrement = () => {
      if (item.quantity > 1) {
         toast.promise(changeQuantity(qty - 1), {
            loading: "Loading...",
            success: "decremented data",
            error: "failed to decrement",
         });
         setQty(qty - 1);
         dispatch(decrementProduct(item._id));
      }
   };
   return (
      <div className="flex flex-col sm:flex-row">
         <Image
            src={item.image!}
            alt=""
            width={150}
            height={100}
            className="w-48 h-52 rounded"
         />
         <div className="flex p-4">
            <div className="flex flex-col justify-between">
               <h1 className="text-2xl">{item.name}</h1>
               <p className="text-xl">Quantity: {qty}</p>
               <p className="text-xl">Size: {item.size}</p>
               <p className="text-xl">
                  Price:
                  <span className="font-bold"> ${item.totalPrice}</span>
               </p>
            </div>
            <div className="flex flex-col justify-between">
               <div className="text-center">
                  <button onClick={handleDelete} className="text-xl mt-1">
                     <FaTrash />
                  </button>
               </div>
               <div className="flex gap-2 items-center">
                  <Button onClick={decrement}>-</Button>
                  <p className="text-lg font-bold">{qty}</p>
                  <Button onClick={increment}>+</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
