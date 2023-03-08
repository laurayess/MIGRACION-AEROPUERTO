import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import avion from "../../assets/images/menuA.png";
export const EjemploPage = () => {
  const navigate = useNavigate();
  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Helmet>
        <title> Inicio </title>
      </Helmet>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-around"
        width="90%"
        height={"100%"}
        flexDirection="column"
      >
        <Box>
          <Typography variant="h2">Elije una opcion</Typography>
        </Box>
        <Box
          className="animate__animated animate__fadeInDown"
          display={"flex"}
          alignItems={"center"}
        >
          <img height={"50%"} src={avion}></img>
        </Box>
        <Box display={"flex"} width="100%" justifyContent="space-around">
          <Button variant="outlined" onClick={() => onNavigate("/demoras")}>
            Añadir Demora
          </Button>
          <Button
            variant="outlined"
            onClick={() => onNavigate("/demoras/reporte")}
          >
            Reportes
          </Button>
          <Button
            variant="outlined"
            onClick={() => onNavigate("/demoras/demora")}
          >
            Ver Demoras
          </Button>
        </Box>
      </Box>
    </>
  );
};
