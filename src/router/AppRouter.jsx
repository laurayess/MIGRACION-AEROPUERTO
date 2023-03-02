import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DemorasRoutes } from "../demoras/routes/DemorasRoutes";
import { ExtensionesRoutes } from "../extensiones/routes/ExtensionesRoutes";
import { InicioRoutes } from "../inicio/routes/InicioRoutes";
import { InternacionesRoutes } from "../internaciones/routes/InternacionesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {/* LOGIN Y REGISTRO */}

      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>

      {/* DEMORAS */}

      <Route
        path="/demoras/*"
        element={<DemorasRoutes></DemorasRoutes>}
      ></Route>

      {/* INTERNACIONES */}

      <Route
        path="/internaciones/*"
        element={<InternacionesRoutes></InternacionesRoutes>}
      ></Route>

      {/* EXTENSIONES */}

      <Route
        path="/extensiones/*"
        element={<ExtensionesRoutes></ExtensionesRoutes>}
      ></Route>

      {/* APP */}
      <Route path="/*" element={<InicioRoutes></InicioRoutes>}></Route>
    </Routes>
  );
};
