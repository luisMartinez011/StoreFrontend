
import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../utils/api/productApi';

  export const getProducts = createAsyncThunk('getProducts', async () => {
    const products = await productApi.getProducts();
    return products;
  });

  export const getProductById = createAsyncThunk('getProductById', async (id) => {
    const products = await productApi.getProductById(id);
    return products;
  });
