import { defineField, defineType } from "sanity";

export default defineType({
   name: "category",
   type: "document",
   title: "Categories",
   fields: [
      defineField({
         name: "name",
         type: "string",
         title: "Name",
         validation: (Rule) =>
            Rule.required().lowercase().error("Must be lowercase"),
      }),
   ],
});
