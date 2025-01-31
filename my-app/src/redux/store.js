// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice"; // Replace with the path to your slice

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
