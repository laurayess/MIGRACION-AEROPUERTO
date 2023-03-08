import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Configuraciones, InicioPage, Agregar, Reportes } from "../pages";

export const ExtensionesRoutes = () => {
  return (
    // <PrivateRoute>
    <Routes>
      <Route path="inicio" element={<InicioPage />} />
      <Route path="config" element={<Configuraciones />} />
      <Route path="reporte" element={<Reportes />} />
      <Route path="agregar" element={<Agregar />} />

      <Route path="/*" element={<Navigate to="/extensiones/inicio" />} />
    </Routes>
    // </PrivateRoute>
  );
};
