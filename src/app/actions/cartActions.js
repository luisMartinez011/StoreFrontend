
import { createAsyncThunk } from '@reduxjs/toolkit';
import cartApi from '../../utils/api/cartApi';

export const getCartById = createAsyncThunk('getCartById', async ({token, idUser}) => {
  const response = await cartApi.getCartById(token, idUser);


  return response;
});

  export const putCartItem = createAsyncThunk('putCartItem', async ({token, cartItemId, productId, quantity}) => {
    const response = await cartApi.putCartItem(token, cartItemId, productId, quantity);
    return response;
  });

  export const postCartItem = createAsyncThunk('postCartItem', async ({token, idUser, productId, quantity}) => {
    const response = await cartApi.postCartItem(token, idUser, productId, quantity);
    return response;
  });

  export const deleteCartItem = createAsyncThunk('deleteCartItem', async ({token, cartItemId}) => {
    const response = await cartApi.putCartItem(token, cartItemId);
    return response;
  });


