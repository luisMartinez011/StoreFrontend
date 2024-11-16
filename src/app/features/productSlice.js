import { createSlice } from '@reduxjs/toolkit';
import { getProducts,getProductById } from '../actions/productActions';
const initialState = {
  list_products: [],
  product:{},
  loading: false,
  error: null,
  status_list_products: 'idle',
  status_product: 'idle'
};

const productSlice = createSlice({
  name: 'product',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status_list_products = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status_list_products = 'succeeded';

        state.list_products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status_list_products = 'failed';
        state.error = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.status_product = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status_product = 'succeeded';

        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status_product = 'failed';
        state.error = action.error.message;
      })
      ;
  },
});

export default productSlice.reducer;
