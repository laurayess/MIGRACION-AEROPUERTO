import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  List,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker, TimePicker } from "@mui/x-date-pickers";
import { startLoadingIterinarios } from "../../store/slices/iterinarios/thunks";

const buttonStyle = {
  backgroundColor: "common.black",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "common.white",
    color: "common.black",
    border: "solid 1px",
  },
};

const buttonStyleWhite = {
  backgroundColor: "common.white",
  color: "common.black",
  boxShadow: "none",
  border: "solid 1px",
  "&:hover": {
    backgroundColor: "common.black",
    color: "common.white",
    border: "solid 1px",
  },
};

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "50%", xl: "30%" },
  height: "auto",
  bgcolor: "background.paper",
  padding: 2,
  borderRadius: "10px",
  backgroundColor: "common.white",
};

export const InicioPage = () => {
  const dispatch = useDispatch();
  const { isLoadingIterinario, iterinarios } = useSelector(
    (state) => state.iterinario
  );

  const [openAddAero, setOpenAddAero] = useState(false);
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const handleOpen = () => setOpenAddAero(true);
  const handleClose = () => setOpenAddAero(false);

  const [openAddIte, setOpenAddIte] = useState(false);
  const handleOpenIte = () => setOpenAddIte(true);
  const handleCloseIte = () => setOpenAddIte(false);

  useEffect(() => {
    dispatch(startLoadingIterinarios());
  }, []);

  console.log(iterinarios);
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
            variant="contained"
            size="large"
            sx={buttonStyle}
            onClick={handleOpen}
          >
            Agregar Aerolina
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={buttonStyle}
            onClick={handleOpenIte}
          >
            Agregar Iterinario
          </Button>
        </Box>
        <Box width={"100%"} height={"auto"} sx={{ backgroundColor: "#505050" }}>
          {iterinarios?.length > 0 ? (
            iterinarios?.map((iti) => (
              <Typography key={iti.id}>{JSON.stringify(iti)}</Typography>
            ))
          ) : (
            <Typography>No se encontró información</Typography>
          )}
        </Box>
      </Box>
      {/* Modal Agregar Aerolinea */}
      <Modal
        open={openAddAero}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={styleModal}
          alignItems={"center"}
          justifyContent={"space-around"}
          display={"flex"}
          flexDirection="column"
        >
          <Typography
            padding={"1rem"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Agregar Aerolinea
          </Typography>
          <Divider
            variant="fullWidth"
            sx={{ borderColor: "common.black", width: "100%" }}
          />
          <Box
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection="row"
            padding={"1rem"}
          >
            <TextField
              fullWidth
              name="noVuelo"
              label="Ingrese nombre de vuelo"
              color="text"
            />
          </Box>

          <Divider
            variant="fullWidth"
            sx={{ borderColor: "common.black", width: "100%" }}
          />
          <Box
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection="row"
            padding={"1rem"}
          >
            <Button
              variant="contained"
              size="large"
              sx={buttonStyle}
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button variant="contained" size="large" sx={buttonStyleWhite}>
              Crear
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal Agregar Iterinario */}

      <Modal
        open={openAddIte}
        onClose={handleCloseIte}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={styleModal}
          alignItems={"center"}
          justifyContent={"space-around"}
          display={"flex"}
          flexDirection="column"
          width={"auto"}
        >
          <Typography
            padding={"1rem"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Creacion de Vuelo
          </Typography>
          <Divider
            variant="fullWidth"
            sx={{ borderColor: "common.black", width: "100%" }}
          />
          <Box
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection="column"
            padding={"1rem"}
            height={"30rem"}
          >
            <TextField
              fullWidth
              select
              name="aerolinea"
              label="Seleccione Aerolinea"
              color="text"
            >
              <MenuItem>Aerolinea 1</MenuItem>
              <MenuItem>Aerolinea 2</MenuItem>
              <MenuItem>Aerolinea 3</MenuItem>
              <MenuItem>Aerolinea 4</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="noVuelo"
              label="No. de Vuelo"
              color="text"
            />

            <TextField
              fullWidth
              name="origenLlegada"
              label="Origen de Llegada"
              color="text"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                label="Hora de Llegada"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={{
                  width: "100%",
                }}
              />
            </LocalizationProvider>
            <TextField
              fullWidth
              name="destinoSalida"
              label="Destino de Salida"
              color="text"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                label="Hora de Salida"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={{
                  width: "100%",
                }}
              />
            </LocalizationProvider>
          </Box>

          <Divider
            variant="fullWidth"
            sx={{ borderColor: "common.black", width: "100%" }}
          />
          <Box
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection="row"
            padding={"1rem"}
          >
            <Button
              variant="contained"
              size="large"
              sx={buttonStyle}
              onClick={() => setOpenAddIte(false)}
            >
              Cancelar
            </Button>
            <Button variant="contained" size="large" sx={buttonStyleWhite}>
              Crear
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
