import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { InicioPage } from "../../demoras/pages/InicioPage";
import { DemorasRoutes } from "../../demoras/routes/DemorasRoutes";
import { EjemploPage } from "../pages/EjemploPage";
import DashboardLayout from "../layout/DashboardLayout";
export const InicioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/incio" element={<EjemploPage />} />
        <Route
          path="/demoras/*"
          element={<DemorasRoutes></DemorasRoutes>}
        ></Route>
      </Route>

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
