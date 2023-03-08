import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";
import { Demoras } from "../pages/Demoras";
import { InicioPage } from "../pages/InicioPage";
import { Reportes } from "../pages/Reportes";

export const DemorasRoutes = () => {
  return (
    //<PrivateRoute>
    <Routes>
      <Route path="inicio" element={<InicioPage></InicioPage>} />
      <Route path="reporte" element={<Reportes />} />
      <Route path="demora" element={<Demoras />} />

      <Route path="/*" element={<Navigate to="/demoras/inicio" replace />} />
    </Routes>
    //</PrivateRoute>
  );
};
