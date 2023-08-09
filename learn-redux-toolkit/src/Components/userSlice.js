import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";

export const clearAllTheUser = createAction("clearAllTheUsers");


const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      // state.push(action.payload);
      return [...state, action.payload];
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);      
      // state.pop(action.payload)
      // let userIndex = state.indexOf(action.payload)
      // state.splice(userIndex, 1)
    },
    deleteAllUser(state, action) {
      return [];
    },
  },

  extraReducers(builder) {
      builder.addCase(clearAllTheUser, () => {
        return [];
      });
  },
});
// export const action = userSlice.actions;
// Destructure the userSlice.actions and direct export to multiple level
export const { addUser, removeUser, deleteAllUser } = userSlice.actions;


// Store
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
