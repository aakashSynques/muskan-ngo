// reducers/cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [], // Change this to an empty array
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.product_id === action.payload.product_id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.subTotal = existingItem.product_MSP * existingItem.quantity;
            } else {
                state.push({ ...action.payload, quantity: 1, subTotal: action.payload.product_MSP });
            }
        },
        updateQuantity: (state, action) => {
            const { product_id, quantity } = action.payload;
            const itemToUpdate = state.find(item => item.product_id === product_id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
                itemToUpdate.subTotal = itemToUpdate.product_MSP * quantity;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex(item => item.product_id === action.payload);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                    state[index].subTotal = state[index].product_MSP * state[index].quantity;
                } else {
                    state.splice(index, 1);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;