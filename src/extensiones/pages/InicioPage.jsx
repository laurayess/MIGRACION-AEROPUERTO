import { Add, Build, DataSaverOn, Description } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const buttonStyle = {
  backgroundColor: "rgb(25, 118, 210)",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgb(25, 118, 150)",
  },
};

const buttonStyleWhite = {
  backgroundColor: "rgb(25, 118, 210)",
  color: "common.black",
  boxShadow: "none",
  border: "solid 1px",
  "&:hover": {
    backgroundColor: "common.white",
    color: "common.black",
    border: "solid 1px",
  },
};
export const InicioPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onNavigate = (path) => {
    navigate(path);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
        display={"flex"}
        flexDirection="column"
      >
        <Box>
          <Typography variant="subtitle1">ITINERARIOS DE VUELOS</Typography>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-around"}
        >
          <Button
            onClick={() => onNavigate("/extensiones/config")}
            size="large"
            sx={buttonStyle}
          >
            <Build sx={{ color: "#FFF" }} />
          </Button>

          <Button
            onClick={() => onNavigate("/extensiones/reporte")}
            size="large"
            sx={buttonStyle}
          >
            <Description sx={{ color: "#FFF" }} />
          </Button>
          <Button
            onClick={() => onNavigate("/extensiones/agregar")}
            size="large"
            sx={buttonStyle}
          >
            <DataSaverOn sx={{ color: "#FFF" }} />
          </Button>
        </Box>
        <Box
          width={"100%"}
          height={"400px"}
          sx={{ backgroundColor: "#505050" }}
        ></Box>
      </Box>
    </>
  );
};
