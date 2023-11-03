// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'productsList', // Provide a unique name for your slice
    initialState: {
        productList: [],
        loading: false,
        error: null,
    },
    reducers: {
        setProductListData: (state, action) => {
            state.productList = action.payload;
        },
        // setLoading: (state, action) => {
        //     state.loading = action.payload;
        // },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
    },
});

export const { setProductListData } = productSlice.actions;
export default productSlice.reducer;
