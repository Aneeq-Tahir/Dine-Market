
import React from "react";
import { TextInput } from "sanity";

interface event {
   currentTarget: { value: string };
}

const input = React.forwardRef((props, ref) => {
   const transformVal = (input: string) => {
      const words = input.split(" ");
      return words.map((word) => word[0] === word[0].toUpperCase()).join;
   };

   const handleChange = (e: event) => {
      const val = transformVal(e.currentTarget.value);

   };
});
