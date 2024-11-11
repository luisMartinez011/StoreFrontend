
import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryApi from '../../utils/api/categoryApi';


  export const getCategories = createAsyncThunk('getCategories', async () => {
    const categories = await categoryApi.getCategories();
    return categories;
  });
