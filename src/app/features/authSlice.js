import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../actions/authActions';

const initialState = {
  token: '',
  loading: false,
  error: null,
  status: false,
};

const authSlice = createSlice({
  name: 'auth',
  status: "idle",
  initialState,


    extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {

        state.status = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});


export default authSlice.reducer;
