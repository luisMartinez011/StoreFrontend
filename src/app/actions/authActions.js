
import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../utils/api/authApi';

export const login = createAsyncThunk('login', async ({email,password}) => {

  const token = await authApi.login(email,password);
  return token;
});

  export const register = createAsyncThunk('register', async ({name,email,password}) => {
    const token = await authApi.register(name,email,password);
    return token;
  });

