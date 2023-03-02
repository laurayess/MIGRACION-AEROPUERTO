import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";
import { InicioPage } from "../pages/InicioPage";

export const InternacionesRoutes = () => {
  return (
    <PrivateRoute>
      <Routes>
        <Route path="inicio" element={<InicioPage />} />

        <Route path="/*" element={<Navigate to="/internaciones/inicio" />} />
      </Routes>
    </PrivateRoute>
  );
};
