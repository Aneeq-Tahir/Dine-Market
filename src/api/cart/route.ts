import { addToCart, cartTable, db } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
   const userId = "124567UJBVC";
   const req: addToCart = await request.json();
   try {
      if (req) {
         await db
            .insert(cartTable)
            .values({
               user_id: userId,
               product_id: req.product_id,
               product_name: req.product_name,
               size: req.size,
               image: req.image,
               price: req.price,
               quantity: req.quantity,
               totalPrice: req.totalPrice
            })
            .returning();
         return NextResponse.json(
            { Message: "Data added to DB" },
            { status: 200 }
         );
      } else {
         throw new Error("Failed to add data to the DB");
      }
   } catch (err) {
      console.log(err);
      return NextResponse.json({ Message: err }, { status: 400 });
   }
};
