import { Image } from "sanity";

export default interface IProduct {
   name: string;
   _id: string;
   price: number;
   img: Image;
   slug: { current: string };
   category: string;
   relImgs: Image[];
   quantity: number;
   size: string;
   totalPrice: number;
   image?: string;
}
