import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },    
    decrement(state, action) {
        state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlice.actions;


// This is a Reducer and import in the main.jsx Wrap components with Provider
export const store = configureStore({
  reducer: counterSlice.reducer,
});
