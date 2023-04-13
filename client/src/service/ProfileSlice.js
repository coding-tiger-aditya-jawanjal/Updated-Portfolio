import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    allData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { allData } = profileSlice.actions;

export default profileSlice.reducer;
