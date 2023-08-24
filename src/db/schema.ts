import { InferModel } from "drizzle-orm";
import { pgTable, varchar, serial, text, integer } from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cart", {
   id: serial("id").primaryKey().notNull(),
   user_id: varchar("user_id", { length: 255 }).notNull(),
   product_id: varchar("product_id", { length: 255 }).notNull(),
   product_name: varchar("product_name", { length: 255 }).notNull(),
   size: varchar("size", { length: 255 }).notNull(),
   image: text("image").notNull(),
   price: integer("price").notNull(),
   quantity: integer("quantity").notNull(),
   totalPrice: integer("totalPrice").notNull(),
});

export type Cart = InferModel<typeof cartTable>;
export type addToCart = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);
