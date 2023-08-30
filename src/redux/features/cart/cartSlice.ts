import  IProduct  from "@/interface";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IState {
   totalProducts: number;
   size: string;
   amount: number;
   products: IProduct[];
   status: "loading" | "succeeded" | "error" | "";
}

interface Pld {
   qty: number;
   product: IProduct;
   size?: string;
}

const initialState: IState = {
   totalProducts: 0,
   amount: 0,
   status: "",
   size: "",
   products: [],
};

export const fetchData = createAsyncThunk(
   "cart/fetchData",
   async (userId: string) => {
      const res = await fetch(`/api/cart/${userId}`);
      if (!res.ok) console.log("failed to fetch data from api");
      const data = await res.json();
      return data;
   }
);

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
               size: actions.payload.size!,
               totalPrice,
            });
         } else {
            existingProduct.totalPrice +=
               existingProduct.price * actions.payload.qty;
            existingProduct.quantity += actions.payload.qty;
         }
      },
      decrementProduct: (state: IState, actions: PayloadAction<string>) => {
         const existingProduct = state.products.find(
            (v) => v._id === actions.payload
         );

         state.totalProducts--;
         state.amount -= existingProduct!.price;

         existingProduct!.quantity--;
         existingProduct!.totalPrice! -= existingProduct?.price!;
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
   extraReducers: (builder) => {
      builder
         .addCase(fetchData.pending, (state) => {
            state.status = "loading";
         }),
         builder.addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload.product;
            state.totalProducts = action.payload.totalQuantity;
            state.amount = action.payload.totalPrice;
            state.status = "succeeded";
         }),
         builder.addCase(fetchData.rejected, (state) => {
            state.status = "error";
         });
   },
});

export const { addProduct, changeSize, removeProduct, decrementProduct } =
   cartSlice.actions;

export default cartSlice.reducer;
