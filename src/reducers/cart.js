// reducers/cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalAmount: 0 }, // Include totalAmount in the initial state

    reducers: {
        setIntervalCart: (state, action) => {
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
        },

        addToCart: (state, action) => {
            const { product_id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.product_id === product_id);
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.subTotal = existingItem.product_MSP * existingItem.quantity;
            } else {
                state.items.push({ ...action.payload, subTotal: action.payload.product_MSP * quantity });
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.subTotal, 0);
        },
        
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
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
                state.items.splice(index, 1);
            }
        },
        
        updateTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    },
});

export const { setIntervalCart, addToCart, removeFromCart, updateQuantity, updateTotalAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;