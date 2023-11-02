// wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishListDataCount: [], // State to hold wishlist data
  
};

const wishlistSlice = createSlice({
  name: 'wishlistData',
  initialState,
  reducers: {
    setWishListDataCount: (state, action) => {
      state.wishListDataCount = action.payload;
    }    
  },
});

export const { setWishListDataCount } = wishlistSlice.actions;
export default wishlistSlice.reducer;
