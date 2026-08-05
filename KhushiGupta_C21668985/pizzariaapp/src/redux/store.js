// We will add multiple slices to the store. store is main container, inside store we will add multiple containers

import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
// create and configure the redux store (configureStore is a function from redux toolkit that helps us to create store)
import { configureStore } from "@reduxjs/toolkit";

// creating redux store
export const store = configureStore({
  reducer: {
    // Here auth is name of the slice and authreducer is actual slice which we have created
    auth: authReducer,
    cart: cartReducer,
  },
});