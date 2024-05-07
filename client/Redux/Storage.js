import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../Redux/Slices/CartSlice";



export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
})