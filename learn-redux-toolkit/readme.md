## Redux is really:
*  A single store containing `global` state
*  Dispatching plain object actions to the store when something happens in the app
*  Pure reducer functions looking at those actions and returning immutably updated state

```jsx
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

export const store = configureStore({
  reducer: counterSlice.reducer,
});
```

```jsx
// App.jsx
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(actions.increment());
  };

  const decrementValue = () => {
    dispatch(actions.decrement());
  };

  const addByValue = () => {
    dispatch(actions.addBy(100));
  };
  
  return(
    //.....
  )
}
```
