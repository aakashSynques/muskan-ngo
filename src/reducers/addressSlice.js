import { createSlice } from "@reduxjs/toolkit";


const addressSlice = createSlice({
    // name: 'order',
    // initialState: {
    //     custOrderId: null,
    // },
    // reducers: {
    //     setOrderId: (state, action) => {
    //         state.custOrderId = action.payload;
    //     },

    // },
    name: 'address',
    initialState: {
        addressData1: null,
    },
    reducers: {
        setAddressData1: (state, action) => {
            state.addressData1 = action.payload;
        },
    },
});

export const { setAddressData1 } = addressSlice.actions;


export default addressSlice.reducer;
