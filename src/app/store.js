import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
import categoryReducer from './features/categorySlice'
import authReducer from './features/authSlice'
import productReducer from './features/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categoryReducer,
    auth: authReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
