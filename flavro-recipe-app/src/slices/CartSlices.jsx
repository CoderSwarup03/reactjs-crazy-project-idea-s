import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        }
    }

});

export const {addToCart, removeFromCart} = CartSlices.actions;
export default CartSlices.reducer