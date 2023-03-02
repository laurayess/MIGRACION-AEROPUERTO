import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export const InicioPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <div>Inicio de Extensiones </div>
      <h1>Ejemplo de codigo asincrono</h1>
    </>
  );
};
