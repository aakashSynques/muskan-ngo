// reducers/cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalAmount: 0 }, // Include totalAmount in the initial state

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.subTotal = existingItem.product_MSP * existingItem.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: 1, subTotal: action.payload.product_MSP });
            }
        },
        updateQuantity: (state, action) => {
            const { product_id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.product_id === product_id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
                itemToUpdate.subTotal = itemToUpdate.product_MSP * quantity;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.product_id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1); // Remove the item from the cart without modifying the quantity
            }
        },
        updateTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, updateTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
