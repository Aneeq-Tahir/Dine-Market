import Stripe from "stripe";
import { db, cartTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
export async function POST(req: any, res: any) {
   const headerslist = headers();

   try {
      const rawBody = await req.text();
      const sign = headerslist.get("stripe-signature");

      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
         apiVersion: "2023-08-16",
      });

      let event;

      try {
         if (!sign || !endpointSecret) {
            return new Response(
               `Webhook Signature Or Endpoint Secret is Missing`,
               {
                  status: 400,
               }
            );
         }

         event = stripe.webhooks.constructEvent(
            rawBody.toString(), // Stringify the request for the Stripe library
            sign,
            endpointSecret
         );
      } catch (err: any) {
         console.log(`⚠️  Webhook sign`);
         return new Response("webhooks signature / endpoint secret missing", {
            status: 400,
         });
      }

      if ("checkout.session.completed" === event.type) {
         const session = event.data.object;
         // @ts-ignore
         const customerData = await stripe.customers.retrieve(session.customer);
         // @ts-ignore
         const userId = customerData.metadata.userId;

         await db.delete(cartTable).where(eq(cartTable.user_id, userId));

         console.log("payment success-----------------------", session);
         const line_Items = await stripe.checkout.sessions.listLineItems(
            //  @ts-ignore
            event.data.object!.id
         );

         return new Response("Payment Confirmation Router Reciept", {
            status: 200,
         });
      } else {
         res.setHeader("Allow", "POST");
      }
   } catch (err: any) {
      console.log("Error in webhook----------", err);
      return;
   }
}
