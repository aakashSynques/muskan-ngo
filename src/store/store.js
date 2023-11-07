// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import wishlistReducer from '../reducers/wishlistSlice';
import productReducer from '../reducers/productSlice';
import tokenReducer from '../reducers/tokenSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlistData: wishlistReducer,
        productsList: productReducer,
        token: tokenReducer,

    },
});

export default store;
