import { createSlice } from '@reduxjs/toolkit';
import { getCartById, putCartItem, postCartItem, deleteCartItem } from '../actions/cartActions';

const initialState = {
  cart_data: [],
  loading: false,
  error: null,
  status: 'idle',
  status_get_cart: 'idle',
  status_put_cart: 'idle',
  status_delete_cart: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(getCartById.fulfilled, (state, action) => {
        state.status_get_cart = 'succeeded';
        state.status_put_cart = 'idle';
        state.status_delete_cart = 'idle';

        state.cart_data = action.payload;
      })
      .addCase(getCartById.rejected, (state, action) => {
        state.status_get_cart = 'rejected';

      })
      .addCase(putCartItem.fulfilled, (state, action) => {
        console.log('fulfilled')
        state.status_put_cart = 'succeeded';

      })
      .addCase(postCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status_delete_cart = 'succeeded';

      })
      ;
  },
});


export default cartSlice.reducer;
