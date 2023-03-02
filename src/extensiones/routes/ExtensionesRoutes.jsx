import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";
import { InicioPage } from "../pages/InicioPage";

export const ExtensionesRoutes = () => {
  return (
    <PrivateRoute>
      <Routes>
        <Route path="inicio" element={<InicioPage />} />

        <Route path="/*" element={<Navigate to="/extensiones/inicio" />} />
      </Routes>
    </PrivateRoute>
  );
};
