import { Cart, cartTable, db } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
   request: NextRequest,
   {
      params: { userId },
   }: {
      params: { userId: string };
   }
) => {
   try {
      if (!userId) {
         throw new Error("user id does not exist");
      } else {
         const res: Cart[] = await db
            .select()
            .from(cartTable)
            .where(and(eq(cartTable.user_id, userId)));

         const cartItems = res.map((item) => ({
            _id: item.product_id,
            name: item.product_name,
            price: item.price,
            totalPrice: item.totalPrice,
            size: item.size,
            userId: item.user_id,
            image: item.image,
            quantity: item.quantity
         }));

         const totalQuantity = cartItems.reduce((total,item) => total + item.quantity, 0)
         const totalPrice = cartItems.reduce((total,item) => total + item.totalPrice, 0)

         return NextResponse.json({ cartItems,totalQuantity, totalPrice }, { status: 200 });
      }
   } catch (error) {
      console.log(error);
      return NextResponse.json({ Message: error }, { status: 505 });
   }
};
