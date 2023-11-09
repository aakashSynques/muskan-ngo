// tokenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: null, // Initial state is null, or you can set it to an empty object
  reducers: {
    setToken: (state, action) => {
      return action.payload; // Set the token data in the state
      
    },
    clearToken: (state) => {
      return null; // Clear the token data from the state
    },




  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
