import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";
import { CalculatorBitacora } from "../pages/CalculatorBitacora";
import { InicioBitacora } from "../pages/InicioBitacora";

export const BitacorasRoutes = () => {
  return (
    <Routes>
      <Route path="inicio" element={<InicioBitacora />} />

      <Route path="calculator" element={<CalculatorBitacora />} />

      <Route path="/*" element={<Navigate to="/bitacoras/inicio" />} />
    </Routes>
  );
};
