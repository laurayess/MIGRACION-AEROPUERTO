import React from "react";

import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";

export const PublicRoute = () => {
  const logged = false;
  const { pathname, search } = useLocation();

  return !logged ? children : <Navigate to="/extensiones/inicio"></Navigate>;
};
