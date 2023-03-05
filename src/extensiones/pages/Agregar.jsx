import { CurrencyExchange } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { BreadCrumbsCustom } from "../../components/BreadCrumbsCustom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export const Agregar = () => {
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
          currentRoute={"Agregar"}
        ></BreadCrumbsCustom>

        <Box
          width={"100%"}
          height={"100%"}
          flexDirection="column"
          display="flex"
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            alignItems={"center"}
            justifyContent={"space-around"}
            display={"flex"}
            flexDirection="column"
            sx={{ backgroundColor: "#695cfe", borderRadius: "10px" }}
            width={"50%"}
            padding={"1rem"}
            height={"80%"}
          >
            <Typography paddingBottom={"1rem"} color={"white"} variant="h5">
              Nueva Extensión
            </Typography>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-around"}
              width={"90%"}
              paddingBottom={"1rem"}
              height={"100%"}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ backgroundColor: "white", borderRadius: "0.5rem" }}
                />
              </LocalizationProvider>

              <TextField
                name="vuelo"
                variant="filled"
                label="Vuelo"
                color="text"
                type="number"
                InputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              />

              <TextField
                name="matricula"
                variant="filled"
                label="matricula"
                color="text"
                type="text"
                InputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              />

              <TextField
                fullWidth
                select
                InputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              >
                <MenuItem>Aerolinea 1</MenuItem>
                <MenuItem>Aerolinea 2</MenuItem>
                <MenuItem>Aerolinea 3</MenuItem>
                <MenuItem>Aerolinea 4</MenuItem>
              </TextField>

              <ToggleButtonGroup sx={{ backgroundColor: "white" }} fullWidth>
                <ToggleButton>Llegada</ToggleButton>
                <ToggleButton>Salida</ToggleButton>
              </ToggleButtonGroup>

              <Box
                width={"100%"}
                alignItems={"center"}
                flexDirection="row"
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <TextField
                  name="horas"
                  label="Horas"
                  color="text"
                  variant="filled"
                  type="number"
                  sx={{ width: "100%" }}
                  inputProps={{
                    max: 100,
                    min: 10,
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "#F0F0F0",
                    },
                  }}
                />
                <Typography
                  paddingLeft={"1rem"}
                  paddingRight={"1rem"}
                  color={"white"}
                >
                  :
                </Typography>
                <TextField
                  name="noVuelo"
                  variant="filled"
                  label="No. Vuelo"
                  color="text"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: {
                      backgroundColor: "#F0F0F0",
                    },
                  }}
                />
              </Box>
              <Typography align="center" color={"white"}>
                0 de "1/2" HRS
              </Typography>
              <Typography align="center" color={"white"}>
                Costo : $ 0
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "rgb(156, 39, 176)",
                  },
                }}
              >
                AGREGAR
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
