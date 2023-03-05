import { createSlice } from "@reduxjs/toolkit";

export const iterinariosSlice = createSlice({
  name: "iterinarios",
  initialState: {
    isLoadingIterinario: false,
    iterinarios: false,
    errorMessage: "",
  },
  reducers: {
    startLoadingIterinario: (state) => {
      state.isLoadingIterinario = true;
    },
    setIterinarios: (state, action) => {
      state.isLoadingIterinario = true;
      state.iterinarios = action.payload.iterinarios;
    },

    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  startLoadingIterinario,
  setIterinarios,
  increment,
  incrementByAmount,
} = iterinariosSlice.actions;
