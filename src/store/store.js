import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { bitacoraSlice } from "./slices/bitacoras/bitacorasSlice";
import { extensionesSlice } from "./slices/extensiones/extensionesSlice";
import { demorasSlice } from "./slices/demoras/demorasSlice";
import { iterinariosSlice } from "./slices/iterinarios/iterinariosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    extensiones: extensionesSlice.reducer,
    bitacoras: bitacoraSlice.reducer,
    demora: demorasSlice.reducer,
    iterinario: iterinariosSlice.reducer,
  },
});
