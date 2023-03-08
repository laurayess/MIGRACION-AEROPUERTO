import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, MobileTimePicker, TimePicker } from "@mui/x-date-pickers";
import USERLIST from "../../_mock/user";
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
  TextField,
  Modal,
  Divider,
  CircularProgress,
} from "@mui/material";
import Label from "../../components/label";
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";

import { UserListHead, UserListToolbar } from "../../sections/user";
import { Add, SearchOff, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingIterinarioBuId } from "../../store/slices/iterinarios/thunks";
import { useForm } from "../../hooks";

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "company", label: "Company", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "isVerified", label: "Verified", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

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

const formData = {
  novuelo: "",
};

export const InicioPage = () => {
  const dispatch = useDispatch();
  const { isLoadingIterinarioById, iterinarioById } = useSelector(
    (state) => state.iterinario
  );

  const { novuelo, onInputChange } = useForm(formData);

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [search, setSearch] = useState(false);

  const [openAddIte, setOpenAddIte] = useState(false);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;
  const navigate = useNavigate();
  const onNavigate = (path) => {
    navigate(path);
  };
  const pattern = "^[0-9]+$";

  const handleSearch = (event) => {
    setSearch(!search);
    event.preventDefault();
    console.log({ novuelo });
    dispatch(startLoadingIterinarioBuId(novuelo));
    console.log("entrando");
  };
  //startLoadingIterinarioBuId
  return (
    <>
      <Helmet>
        <title> Demoras </title>
      </Helmet>

      <Box display={"flex"} flexDirection="row" width={"100%"} height={"100%"}>
        <Box
          alignItems={"center"}
          justifyContent={"space-around"}
          display={"flex"}
          flexDirection="column"
          sx={{ backgroundColor: "#505050" }}
          width={"50%"}
          height={"100%"}
        >
          <Box
            width={"100%"}
            height={"30%"}
            alignItems={"center"}
            flexDirection="column"
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <Typography variant="h3" color={"#FFF"}>
              PASO 1
            </Typography>
            <Typography color={"#FFF"}>
              Selecciona el itinerario a calcular la demora
            </Typography>
            <Typography color={"#FFF"}>Escriba el numero de vuelo</Typography>
          </Box>

          <Box
            width={"70%"}
            alignItems={"center"}
            flexDirection="row"
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <TextField
              name="novuelo"
              placeholder="novuelo"
              value={novuelo}
              onChange={onInputChange}
              label="No. Vuelo"
              color="text"
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
            <Button
              size="large"
              sx={{ backgroundColor: "rgb(105 92 254)" }}
              onClick={(event) => handleSearch(event)}
            >
              <SearchOutlined sx={{ color: "#FFF" }} />
            </Button>
          </Box>
          <Box
            width={"100%"}
            height={"30%"}
            alignItems={"center"}
            flexDirection="column"
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"auto"}
              width={"50%"}
              padding={"1rem"}
              flexDirection="column"
              sx={{
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#6739d1",
                borderStyle: "solid",
              }}
            >
              {isLoadingIterinarioById === true ? (
                <CircularProgress size={30} />
              ) : iterinarioById ? (
                <>
                  <Typography align="center">
                    {iterinarioById.aerolinea}
                  </Typography>
                  <Typography align="center">
                    HORA ENTRADA: {iterinarioById.timeLLeg}
                  </Typography>
                  <Typography align="center">
                    HORA SALIDA: {iterinarioById.timeSal}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography color={"#000"}>Sin Itinerario</Typography>
                </>
              )}
            </Box>
            <Typography color={"#FFF"}>
              Edita o agrega un itinerario aqui
            </Typography>
            <Button
              onClick={() => onNavigate("/internaciones")}
              size="large"
              sx={{ backgroundColor: "rgb(105 92 254)" }}
            >
              <Add sx={{ color: "#FFF" }} />
            </Button>
          </Box>
        </Box>
        {/* PASO 2 */}

        <Box
          alignItems={"center"}
          justifyContent={"space-around"}
          display={"flex"}
          flexDirection="column"
          sx={{ backgroundColor: "#FFF" }}
          width={"50%"}
          height={"100%"}
        >
          <Box
            width={"100%"}
            height={"30%"}
            alignItems={"center"}
            flexDirection="column"
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <Typography variant="h3">PASO 2</Typography>
            <Typography>Escribe el tiempo de demora</Typography>
          </Box>
          <Typography>Hora Real de Entrada</Typography>
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
              sx={{ width: "30%" }}
              disabled={!iterinarioById}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: "1",
                max: "24",
                step: "1",
                maxLength: "2",
                pattern: "^[0-9]+$",
              }}
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
            <TextField
              name="noVuelo"
              variant="filled"
              label="No. Vuelo"
              color="text"
              sx={{ width: "30%" }}
              disabled={!iterinarioById}
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
          </Box>
          <Typography>Hora Real de Salida</Typography>
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
              sx={{ width: "30%" }}
              disabled={!iterinarioById}
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
            <TextField
              name="noVuelo"
              variant="filled"
              label="No. Vuelo"
              color="text"
              sx={{ width: "30%" }}
              disabled={!iterinarioById}
              InputProps={{
                style: {
                  backgroundColor: "#F0F0F0",
                },
              }}
            />
          </Box>
          <Box
            width={"100%"}
            alignItems={"center"}
            flexDirection="column"
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Button disabled={!iterinarioById} variant="contained" size="large">
              CALCULAR
            </Button>
          </Box>
          <Box
            width={"90%"}
            alignItems={"center"}
            flexDirection="column"
            display={"flex"}
            justifyContent={"space-around"}
            sx={{
              backgroundColor: "#fcfae4",
              borderRadius: 5,
              borderColor: "#6739d1",
              borderStyle: "solid",
            }}
            padding={"1rem"}
          >
            <Typography paddingBottom={"1rem"} align="center">
              LLEGADA: El vuelo llegó con 428 min de demora
            </Typography>
            <Typography paddingBottom={"1rem"} align="center">
              SALIDA: Se fue con una demora de 153 min debido a que Oaxaca
              redujo 275 min de la demora que traia
            </Typography>
            <Button
              onClick={() => setOpenAddIte(true)}
              variant="contained"
              size="large"
            >
              GUARDAR
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal
        open={openAddIte}
        onClose={() => setOpenAddIte(false)}
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
            Creacion de una demora
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
            <Typography>Rellena el formulario</Typography>
            <TextField fullWidth name="causa" label="Causa" color="text" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha"
                sx={{
                  width: "100%",
                }}
              />
            </LocalizationProvider>

            <TextField
              type="text"
              minRows={3}
              fullWidth
              multiline
              name="notas"
              label="Notas"
              color="text"
            />

            <TextField
              fullWidth
              name="pasajeros"
              label="Pasajeros"
              color="text"
              type="number"
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
      {/* <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 500 }} >
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        name,
                        role,
                        status,
                        company,
                        avatarUrl,
                        isVerified,
                      } = row;
                      const selectedUser = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={selectedUser}
                        >
                          
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={selectedUser}
                              onChange={(event) => handleClick(event, name)}
                            />
                          </TableCell>

                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar alt={name} src={avatarUrl} />
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="left">{company}</TableCell>

                          <TableCell align="left">{role}</TableCell>

                          <TableCell align="left">
                            {isVerified ? "Yes" : "No"}
                          </TableCell>

                          <TableCell align="left">
                            <Label
                              color={
                                (status === "banned" && "error") || "success"
                              }
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <IconButton
                              size="large"
                              color="inherit"
                              onClick={handleOpenMenu}
                            >
                              <Iconify icon={"eva:more-vertical-fill"} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover> */}
    </>
  );
};
