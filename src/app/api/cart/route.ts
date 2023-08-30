import { addToCart, cartTable, db } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
   const { userId } = auth();
   const req: addToCart = await request.json();
   try {
      if (req && userId) {
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
               totalPrice: req.totalPrice,
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

export const PUT = async (request: NextRequest) => {
   const { userId } = auth();
   const data: addToCart = await request.json();
   try {
      if (data && userId) {
         await db
            .update(cartTable)
            .set({
               quantity: data.quantity,
               totalPrice: data.totalPrice,
               size: data.size
            })
            .where(
               and(
                  eq(cartTable.user_id, userId),
                  eq(cartTable.product_id, data.product_id)
               )
            )
            .returning();
         return NextResponse.json(
            { Message: "Data updated in the DB" },
            { status: 400 }
         );
      } else {
         throw new Error("Failed to update data in the DB");
      }
   } catch (err) {
      console.log(err);
      return NextResponse.json({ Message: err }, { status: 500 });
   }
};

export const DELETE = async (request: NextRequest) => {
   const { userId } = auth();
   const url = request.nextUrl;

   try {
      if (url.searchParams.has("product_id") && userId) {
         const product_id = url.searchParams.get("product_id");
         const res = await db
            .delete(cartTable)
            .where(
               and(
                  eq(cartTable.user_id, userId),
                  eq(cartTable.product_id, product_id as string)
               )
            )
            .returning();
         return NextResponse.json({ Message: "Data removed" }, { status: 200 });
      } else {
         if (url.searchParams.has("product_id"))
            throw new Error("login required");
         else throw new Error("product id required");
      }
   } catch (error) {
      console.log(error);
      return NextResponse.json({ Error: error }, { status: 405 });
   }
};
