import {
   defineType,
   defineField,
   defineArrayMember,
   CustomValidatorResult,
} from "sanity";

export default defineType({
   name: "product",
   type: "document",
   title: "Products",
   fields: [
      defineField({
         name: "name",
         type: "string",
         title: "Product Name",
         description: "Every Word must start with a capital letter",
         validation: (Rule) =>
            Rule.custom(
               (name) =>
                  new Promise<CustomValidatorResult>((resolve, reject) => {
                     if (name === undefined) resolve(true);
                     else {
                        const words = name.split(" ");
                        const isValid = words.every(
                           (word) => word[0] === word[0].toUpperCase()
                        );
                        isValid
                           ? resolve(true)
                           : reject(
                                "Every word must start with a Capital letter"
                             );
                     }
                  })
            ),
         // .error("Every word should start with a Capital letter"),
      }),
      defineField({
         name: "price",
         type: "number",
         title: "Price",
      }),
      defineField({
         name: "img",
         type: "image",
         title: "Main Image",
      }),
      defineField({
         name: "slug",
         type: "slug",
         title: "URL",
         options: {
            source: 'name',
         },
      }),
      defineField({
         name: "category",
         type: "reference",
         title: "Category",
         to: [{ type: "category" }],
      }),
      defineField({
         name: "description",
         type: "text",
         title: "Product Description",
      }),
      defineField({
         name: "relImgs",
         type: "array",
         title: "Related Images",
         of: [defineArrayMember({ name: "img", type: "image" })],
      }),
   ],
});
