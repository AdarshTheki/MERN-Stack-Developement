import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

// This is a Reducer and import in the main.jsx Wrap components with Provider

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});
