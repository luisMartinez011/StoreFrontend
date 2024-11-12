
import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../utils/api/authApi';

export const login = createAsyncThunk('login', async ({email,password}) => {

  const response = await authApi.login(email,password);


  return response;
});

  export const register = createAsyncThunk('register', async ({name,email,password}) => {
    const response = await authApi.register(name,email,password);
    return response;
  });

