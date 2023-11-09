// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import wishlistReducer from '../reducers/wishlistSlice';
import productReducer from '../reducers/productSlice';
import tokenReducer from '../reducers/tokenSlice';
import orderReducer  from '../reducers/orderSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlistData: wishlistReducer,
        productsList: productReducer,
        token: tokenReducer,
        order: orderReducer,

    },
});

export default store;
