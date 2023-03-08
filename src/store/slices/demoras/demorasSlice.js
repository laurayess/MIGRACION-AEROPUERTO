import { createSlice } from "@reduxjs/toolkit";

export const demorasSlice = createSlice({
  name: "demora",
  initialState: {},
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = demorasSlice.actions;
