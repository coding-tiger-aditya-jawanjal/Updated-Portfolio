import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./ProfileSlice";

export const store = configureStore({
  reducer: {
    profile:profileReducer
  },
})