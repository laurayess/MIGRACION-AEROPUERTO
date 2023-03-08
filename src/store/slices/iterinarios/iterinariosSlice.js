import { createSlice } from "@reduxjs/toolkit";

export const iterinariosSlice = createSlice({
  name: "iterinarios",
  initialState: {
    isLoadingIterinario: false,
    iterinarios: false,
    isLoadingIterinarioById: false,
    iterinarioById: false,
    errorMessage: "",
  },
  reducers: {
    startLoadingIterinario: (state) => {
      state.isLoadingIterinario = true;
    },
    setIterinarios: (state, action) => {
      state.isLoadingIterinario = false;
      state.iterinarios = action.payload.iterinarios;
    },
    startLoadingIterinarioById: (state) => {
      state.isLoadingIterinarioById = true;
    },
    setIterinarioById: (state, action) => {
      state.isLoadingIterinarioById = false;
      state.iterinarioById = action.payload.iterinarioById;
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
  startLoadingIterinarioById,
  setIterinarioById,
  increment,
  incrementByAmount,
} = iterinariosSlice.actions;
