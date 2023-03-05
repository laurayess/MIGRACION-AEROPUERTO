import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const useBitacoras = () => {
  const {
    planeador,
    motor1,
    motor2,
    helice1,
    helice2,
    rotorPrincipal,
    rotorCola,
    pala1,
    pala2,
    pala3,
    pala4,
    folio,
    matricula,
  } = useSelector((state) => state.bitacoras);
  const todos = [
    planeador,
    motor1,
    motor2,
    helice1,
    helice2,
    rotorPrincipal,
    rotorCola,
    pala1,
    pala2,
    pala3,
    pala4,
  ];
  const seleccionados = [];
  useEffect(() => {
    todos.map((componente) => {
      const comp = seleccionados.find((co) => componente.name === co.name);
      if (componente.selected && !comp) seleccionados.push(componente);
    });
  }, []);

  return { seleccionados, matricula, folio };
};
