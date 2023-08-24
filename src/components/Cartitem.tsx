"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { urlForImage } from "../../sanity/lib/image";
import { removeProduct, RProduct } from "@/redux/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Button } from "@/components/shared/ProductPage";

interface IItem {
   item: RProduct;
   qty: number;
}

const CartItem = ({ item, qty }: IItem) => {
   // const [count, setCount] = useState(qty);
   const dispatch = useDispatch();
   return (
      <div className="flex border rounded">
         <Image
            src={urlForImage(item.img).url()}
            alt=""
            width={150}
            height={100}
            className="w-48 h-52 rounded"
         />
         <div className="flex p-4">
            <div className="flex flex-col justify-between">
               <h1 className="text-2xl">{item.name}</h1>
               <p className="text-xl">Quantity: {item.quantity}</p>
               <p className="text-xl">Size: {item.size}</p>
               <p className="text-xl">
                  Price:
                  <span className="font-bold"> ${item.totalPrice}</span>
               </p>
            </div>
            <div className="flex flex-col justify-between">
               <div className="text-center">
                  <button
                     onClick={() => dispatch(removeProduct(item._id))}
                     className="text-xl mt-1"
                  >
                     <FaTrash />
                  </button>
               </div>
               <div className="flex gap-2 items-center">
                  <Button onClick={() => {}}>-</Button>
                  <p className="text-lg font-bold">{qty}</p>
                  <Button onClick={() => {}}>+</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
