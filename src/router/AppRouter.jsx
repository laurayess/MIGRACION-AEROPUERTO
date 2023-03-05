import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DemorasRoutes } from "../demoras/routes/DemorasRoutes";
import { ExtensionesRoutes } from "../extensiones/routes/ExtensionesRoutes";
import { useCheckAuth } from "../hooks";
import { InicioRoutes } from "../inicio/routes/InicioRoutes";
import { InternacionesRoutes } from "../internaciones/routes/InternacionesRoutes";
import { CheckingAuth } from "../ui";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <Route path="/auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<PrivateRoute />}></Route>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* LOGIN Y REGISTRO */}

      {/* <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route> */}

      {/* DEMORAS */}

      {/* <Route
        path="/demoras/*"
        element={<DemorasRoutes></DemorasRoutes>}
      ></Route> */}

      {/* INTERNACIONES */}

      {/*  <Route
        path="/internaciones/*"
        element={<InternacionesRoutes></InternacionesRoutes>}
      ></Route> */}

      {/* EXTENSIONES */}

      {/* <Route
        path="/extensiones/*"
        element={<ExtensionesRoutes></ExtensionesRoutes>}
      ></Route> */}

      {/* APP */}
      {/* <Route path="/*" element={<InicioRoutes></InicioRoutes>}></Route> */}
    </Routes>
  );
};
