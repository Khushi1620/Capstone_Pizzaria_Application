import { createSlice } from "@reduxjs/toolkit";

// Initial state of any application 
const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = {
        name: "",
        email: "",
      };
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;