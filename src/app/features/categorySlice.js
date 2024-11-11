import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../actions/categoryActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  status: 'idle',
};

const categorySlice = createSlice({
  name: 'category',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default categorySlice.reducer;
