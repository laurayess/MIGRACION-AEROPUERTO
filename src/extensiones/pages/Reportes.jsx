import { BorderColorTwoTone } from "@mui/icons-material";
import { Button, MenuItem, TextField, Typography, Box } from "@mui/material";
import React from "react";
import { BreadCrumbsCustom } from "../../components/BreadCrumbsCustom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const buttonStyle = {
  backgroundColor: "common.white",
  color: "common.black",
  boxShadow: "none",
  border: "solid 1px",
  "&:hover": {
    backgroundColor: "common.black",
    color: "common.white",
    border: "solid 1px",
    borderColor: "black",
  },
};
export const Reportes = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        flexDirection="column"
        display="flex"
        alignItems={"center"}
        justifyContent={"space-center"}
      >
        <BreadCrumbsCustom
          routes={[
            {
              name: "Extensiones",
              url: "/extensiones/inicio",
            },
          ]}
          currentRoute={"Reportes"}
        ></BreadCrumbsCustom>
        <Box
          width={"100%"}
          height={"50%"}
          display="flex"
          alignItems={"center"}
          flexDirection="column"
          justifyContent={"space-evenly"}
        >
          <Typography variant="h4">REPORTE DE EXTENSIONES</Typography>
          <Box
            width={"100%"}
            display="flex"
            alignItems={"center"}
            padding={"1rem"}
            justifyContent={"space-around"}
            sx={{
              flexDirection: { sm: "row", xs: "column" },
              borderRadius: "10px",
              border: "solid 2px",
              justifyContent: { sm: "space-between", xs: "space-around" },
              height: { sm: "auto", xs: "50%" },
            }}
            flexWrap="wrap"
          >
            <Box>
              <Typography align="center">Elige fecha inicio</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </Box>
            <Box>
              <Typography align="center">Elige fecha final</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </Box>
            <Box>
              <Typography align="center">Seleccione una aerolinea</Typography>
              <TextField fullWidth select>
                <MenuItem>Aerolinea 1</MenuItem>
                <MenuItem>Aerolinea 2</MenuItem>
                <MenuItem>Aerolinea 3</MenuItem>
                <MenuItem>Aerolinea 4</MenuItem>
              </TextField>
            </Box>
            <Box>
              <Button sx={buttonStyle} variant="contained">
                <Typography sx={{ ml: 1 }}>
                  <BorderColorTwoTone /> Crear Reporte
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
