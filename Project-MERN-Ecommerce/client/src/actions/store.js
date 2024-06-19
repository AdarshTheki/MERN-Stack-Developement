// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import itemReducer from './itemSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: itemReducer,
        cart: cartReducer,
    },
});

export default store;
