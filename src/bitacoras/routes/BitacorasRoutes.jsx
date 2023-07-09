import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";
import { AddBitacora } from "../pages/AddBitacora";
import { CalculatorBitacora } from "../pages/CalculatorBitacora";
import { InicioBitacora } from "../pages/InicioBitacora";

export const BitacorasRoutes = () => {
  return (
    <Routes>
      <Route path="inicio" element={<InicioBitacora />} />
      <Route path="nueva" element={<AddBitacora />} />

      <Route path="calculator" element={<CalculatorBitacora />} />
      <Route path="calculator/:id" element={<CalculatorBitacora />} />

      <Route path="/*" element={<Navigate to="/bitacoras/inicio" />} />
    </Routes>
  );
};
