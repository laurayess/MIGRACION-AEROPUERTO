import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../store/slices/extensiones/thunks";

export const InicioPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <div>Inicio de Extensiones </div>
      <h1>Ejemplo de codigo asincrono</h1>
    </>
  );
};
