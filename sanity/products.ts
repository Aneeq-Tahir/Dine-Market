import { defineType, defineField } from "sanity";

const isCapital = (input: string) => {
   const words = input.split(' ')
   return words.map(word => word[0] === word[0].toUpperCase()).join
}

export const products = defineType({
   name: "product",
   type: "document",
   title: "Products",
   fields: [
      defineField({
         name: "name",
         type: "string",
         title: "Product Name",
      }),
      defineField({
         name: "url",
         type: "slug",
      }),
      defineField({
         name: "price",
         type: "number",
         title: "Price",
      }),
      defineField({
         name: "img",
         type: "image",
         title: "Image",
      }),
      defineField({
         name: "category",
         type: "string",
         title: "Category",
         options: {
            list: [
               { value: "female", title: "Female" },
               { value: "male", title: "Male" },
               { value: "kids", title: "Kids" },
            ],
         },
      }),
      defineField({
         name: "relImgs",
         type: "array",
         title: "Related Images",
         of: [{ type: "image" }],
      }),
   ],
});
