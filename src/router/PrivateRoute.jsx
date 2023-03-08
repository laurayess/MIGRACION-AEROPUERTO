import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes, useLocation, useRoutes } from "react-router";
import { DemorasRoutes } from "../demoras/routes/DemorasRoutes";
import DashboardLayout from "../inicio/layout/DashboardLayout";
import { InicioRoutes } from "../inicio/routes/InicioRoutes";
import { InternacionesRoutes } from "../internaciones/routes/InternacionesRoutes";
import { ExtensionesRoutes } from "../extensiones/routes/ExtensionesRoutes";
import { BitacorasRoutes } from "../bitacoras/routes/BitacorasRoutes";
export const PrivateRoute = () => {
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  useEffect(() => {
    localStorage.setItem("lastPath", lastPath);
  }, [lastPath]);

  /* let element = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/*",
          element: <InicioRoutes />,
        },
        {
          path: "/demoras/*",
          element: <DemorasRoutes></DemorasRoutes>,
        },
      ],
    },
  ]); */
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/demoras/*" element={<DemorasRoutes />} />
        <Route index path="/inicio/*" element={<InicioRoutes />} />
        <Route path="/internaciones/*" element={<InternacionesRoutes />} />
        <Route path="/extensiones/*" element={<ExtensionesRoutes />} />
        <Route path="/bitacoras/*" element={<BitacorasRoutes />}></Route>
      </Route>
      <Route path="/*" element={<Navigate to={"/inicio"} />} />
    </Routes>
  );
};
