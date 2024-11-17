import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../actions/authActions';

const initialState = {
  data:{},
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
        state.data = action.payload;

        const token = action.payload.token;
        const userName = action.payload.name;
        const idUser = action.payload.id;
        // *Objetos a guardar en el local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem("userName", userName);
        localStorage.setItem("idUser", idUser);
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
        state.data = action.payload;
        const token = action.payload.token;
        const userName = action.payload.name;
        const idUser = action.payload.id;

        // *Objetos a guardar en el local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem("userName", userName);
        localStorage.setItem("idUser", idUser);

      })
      .addCase(login.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});


export default authSlice.reducer;
