import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const EjemploPage = () => {
  const navigate = useNavigate();
  const onGoTo = () => {
    navigate("/bitacoras/incio");
  };
  return (
    <div>
      {" "}
      Inicio
      <Button onClick={onGoTo}>ir a bitacoras</Button>
    </div>
  );
};
