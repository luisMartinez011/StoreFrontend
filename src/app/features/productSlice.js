import { createSlice } from '@reduxjs/toolkit';
import { getProducts,getProductById } from '../actions/productActions';
const initialState = {
  data: [],
  loading: false,
  error: null,
  status: 'idle',
};

const productSlice = createSlice({
  name: 'product',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
    console.log(action.payload)

        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.data = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      ;
  },
});


export default productSlice.reducer;
