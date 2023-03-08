import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { EjemploPage } from "../pages/EjemploPage";
export const InicioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EjemploPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
