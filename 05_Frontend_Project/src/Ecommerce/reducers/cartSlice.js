import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // return [...state, action.payload];
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },

    increaseQty(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },

    decreaseQty(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
