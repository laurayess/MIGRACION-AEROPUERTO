import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { extensionesSlice } from "./slices/extensiones/extensionesSlice";
import { demorasSlice } from "./slices/demoras/demorasSlice";
import { iterinariosSlice } from "./slices/iterinarios/iterinariosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    extensiones: extensionesSlice.reducer,
    demora: demorasSlice.reducer,
    iterinario: iterinariosSlice.reducer,
  },
});
