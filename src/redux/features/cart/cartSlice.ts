import { IProducts } from "@/components/home/Products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IState {
   totalProducts: number;
   quantity: number;
   size: string;
   amount: number;
   products: RProduct[];
}

export interface RProduct extends IProducts {
   quantity: number;
   size: string;
   totalPrice: number;
}

interface Pld {
   qty: number;
   product: IProducts;
   size: string;
}

const initialState: IState = {
   totalProducts: 0,
   quantity: 0,
   amount: 0,
   size: "",
   products: [],
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addProduct: (state: IState, actions: PayloadAction<Pld>) => {
         const totalPrice = actions.payload.product.price * actions.payload.qty;
         const newProduct = actions.payload.product;
         const existingProduct = state.products.find(
            (product) => product._id === newProduct._id
         );

         state.totalProducts += actions.payload.qty;
         state.amount += totalPrice;

         if (!existingProduct) {
            state.products.push({
               ...actions.payload.product,
               quantity: actions.payload.qty,
               size: actions.payload.size,
               totalPrice,
            });
         } else {
            existingProduct.totalPrice +=
               existingProduct.price * actions.payload.qty;
            existingProduct.quantity += actions.payload.qty;
         }
      },
      removeProduct: (state: IState, actions: PayloadAction<string>) => {
         state.products = state.products.filter(
            (v) => v._id !== actions.payload
         );
         state.amount = state.products.reduce(
            (total, item) => total + item.totalPrice,
            0
         );
         state.totalProducts = state.products.reduce(
            (total, item) => total + item.quantity,
            0
         );
      },
      changeSize: (state: IState, actions: PayloadAction<string>) => {
         state.size = actions.payload;
      },
   },
});

export const { addProduct, changeSize,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
