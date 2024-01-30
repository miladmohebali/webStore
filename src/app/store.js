import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../features/slices/sliderSlice';
import filterProducts  from '../features/slices/productSlice';
import cartSlice from '../features/slices/cartSlice';
import authSlice from '../features/slices/authSlide';

export const store = configureStore({
  reducer: {
    slider : sliderReducer,
    products : filterProducts,
    cart : cartSlice,
    user : authSlice,
  },
});
