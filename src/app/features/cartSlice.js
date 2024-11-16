import { createSlice } from '@reduxjs/toolkit';
import { getCartById, putCartItem, postCartItem, deleteCartItem } from '../actions/cartActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  status: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(getCartById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(putCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(postCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      ;
  },
});


export default cartSlice.reducer;
