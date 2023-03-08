import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
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

/* Data del JR */
const data = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", age: 35 },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com", age: 30 },
  { id: 3, name: "Bob Smith", email: "bobsmith@example.com", age: 25 },
  { id: 4, name: "Alice Johnson", email: "alicejohnson@example.com", age: 40 },
  { id: 5, name: "Tom Brown", email: "tombrown@example.com", age: 45 },
];

/*  */

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

  /* Probando Tabla de JR */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  /* const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }; */

  /* const filteredData = data.filter(
    (row) =>
      row.novuelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.aerolinea.toLowerCase().includes(searchTerm.toLowerCase())
  ); */
  /*  */

  useEffect(() => {
    dispatch(startLoadingIterinarios());
  }, []);

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
        {/*  <Box
          width={"100%"}
          alignItems="center"
          alignContent={"center"}
          height={"auto"}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          sx={{ backgroundColor: "#505050" }}
        >
          {isLoadingIterinario ? (
            <CircularProgress size={60} />
          ) : iterinarios.length > 0 ? (
            iterinarios.map((iti) => (
              <Typography padding={3} align="center" key={iti.id}>
                {JSON.stringify(iti)}
              </Typography>
            ))
          ) : (
            <Typography>No se encontró información</Typography>
          )}
        </Box> */}

        {/* Tabla del JR */}
        <Box>
          <Box marginBottom={2}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Box>
          <TableContainer
            component={Paper}
            sx={{ marginBottom: 2, maxHeight: "400px", overflow: "auto" }}
          >
            <Table
              
            >
              {isLoadingIterinario ? (
                <CircularProgress size={60} />
              ) : iterinarios.length > 0 ? (
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>Aerolinea</TableCell>
                      <TableCell>No.Vuelo</TableCell>
                      <TableCell>Hr.Llegada </TableCell>
                      <TableCell>Hr.Salida</TableCell>
                      <TableCell>Origen</TableCell>
                      <TableCell>Destino</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {iterinarios
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.aerolinea}</TableCell>
                          <TableCell>{row.novuelo}</TableCell>
                          <TableCell>{row.timeLLeg}</TableCell>
                          <TableCell>{row.timeSal}</TableCell>
                          <TableCell>{row.origen}</TableCell>
                          <TableCell>{row.destino}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </>
              ) : (
                <Typography>No se encontró información</Typography>
              )}
            </Table>
          </TableContainer>
          {/*  <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={iterinarios.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
             onChangeRowsPerPage={handleChangeRowsPerPage}
          /> */}
        </Box>
        {/* Fin del JR */}
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
