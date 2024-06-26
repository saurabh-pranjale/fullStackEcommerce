import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item._id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload.id);
            console.log("item",item);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload.id);
            console.log("item",item);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
            }
        },
    },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
