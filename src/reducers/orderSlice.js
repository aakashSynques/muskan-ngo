// orderSlice.js

import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    custOrderId: null,
  },
  reducers: {
    setOrderId: (state, action) => {
      state.custOrderId = action.payload;
    },
  },
});

export const { setOrderId } = orderSlice.actions;


export default orderSlice.reducer;
