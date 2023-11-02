// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import wishlistReducer from '../reducers/wishlistSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlistData: wishlistReducer,

    },
});

export default store;
