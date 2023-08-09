import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value++;
    },
    decrement(state, action) {
      state.value--;
    },
    addBy(state, action) {
      state.value += action.payload;
    },
    multiply(state, action) {
      state.value *= action.payload
    }
  },
});
export const actions = counterSlice.actions;

// And its export default to the store to Reducers 
const counterReducer = counterSlice.reducer

// This is a Reducer and import in the main.jsx Wrap components with Provider
export const store = configureStore({
  reducer: {
    counters: counterReducer
    // can you create multiple reducers
  }
});

