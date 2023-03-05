import { CurrencyExchange } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Switch,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { BreadCrumbsCustom } from "../../components/BreadCrumbsCustom";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 18,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 18,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(12px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#572364",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export const Configuraciones = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      flexDirection="column"
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <BreadCrumbsCustom
        routes={[
          {
            name: "Extensiones",
            url: "/extensiones/inicio",
          },
        ]}
        currentRoute={"Configuraciones"}
      ></BreadCrumbsCustom>
      <Typography variant="h3">CONFIGURACIONES</Typography>

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
        >
          <Typography paddingBottom={"1rem"} color={"white"} variant="h5">
            Costo por Extensión
          </Typography>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-around"}
            width={"90%"}
            paddingBottom={"1rem"}
          >
            <TextField
              name="horas"
              variant="filled"
              label="Horas"
              color="text"
              type="number"
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(156, 39, 176)",
                "&:hover": {
                  backgroundColor: "rgb(156, 39, 176)",
                },
              }}
            >
              <CurrencyExchange sx={{ color: "#FFF" }} />
            </Button>
            {/* <Stack>
            <Typography>Invierno</Typography>
            <Typography>Verano</Typography>
          </Stack> */}
          </Box>
        </Box>

        <Box
          alignItems={"center"}
          justifyContent={"space-around"}
          display={"flex"}
          flexDirection="column"
          sx={{ backgroundColor: "#695cfe", borderRadius: "10px" }}
          width={"50%"}
          padding={"1rem"}
        >
          <Typography paddingBottom={"1rem"} color={"white"} variant="h5">
            Horario
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography color={"white"}>Invierno</Typography>
            <AntSwitch
              checked={true}
              onChange={() => {}}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography color={"white"}>Verano</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
