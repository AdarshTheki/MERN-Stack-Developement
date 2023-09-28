import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticate: false,
    name: "",
    email: "",
  },
  reducers: {
    logIn(state, action) {
      const { name, email } = action.payload;
      state.isAuthenticate = true;
      state.name = name;
      state.email = email;
    },
    logOut(state) {
      state.isAuthenticate = false;
      state.name = "";
      state.email = "";
    },
  },
});
export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
