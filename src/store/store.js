// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import wishlistReducer from '../reducers/wishlistSlice';
import productReducer from '../reducers/productSlice';
import tokenReducer from '../reducers/tokenSlice';
import orderReducer  from '../reducers/orderSlice';
import addressReducer from '../reducers/addressSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlistData: wishlistReducer,
        productsList: productReducer,
        token: tokenReducer,
        order: orderReducer,
        address: addressReducer,

    },
});

export default store;
