import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Image } from "sanity";

export interface IState {
   totalProducts: number;
   size: string;
   products: P[];
}

interface P {
   qty: number;
   img: Image;
   txt: string;
   price: number;
   size: string;
}

const initialState: IState = {
   totalProducts: 0,
   size: "",
   products: [],
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      changeState: (state, actions: PayloadAction<P>) => {
         state.totalProducts += actions.payload.qty;
         state.products.push({ ...actions.payload });
      },
      changeSize: (state, actions: PayloadAction<string>) => {
         state.size = actions.payload
      },
   },
});

export const { changeState, changeSize } = cartSlice.actions;

export default cartSlice.reducer;