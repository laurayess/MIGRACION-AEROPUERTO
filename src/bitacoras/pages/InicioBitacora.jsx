import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBitacorasProvider } from "../../firebase/provider";
import { getBitacoras } from "../../store/slices/bitacoras/bitacorasThunks";
import { useBitacoras } from "../hooks/useBitacoras";

export const InicioBitacora = () => {
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  const { bitacoras } = useSelector((state) => state.bitacoras);
  const navigate = useNavigate();
  const columns = [
    {
      field: "matricula",
      headerName: "MATRICULA",
      width: 150,
      editable: true,
    },
    {
      field: "fecha",
      headerName: "FECHA",
      width: 150,
      editable: true,
    },
    {
      field: "acciones",
      headerName: "ACCIONES",
      flex: 2,
      renderCell: ({ row }) => {
        return (
          <Box sx={{}}>
            <Button
              onClick={() => goTo("/bitacoras/calculator/" + row.id)}
              variant="contained"
              sx={{ color: "#fff" }}
            >
              Ver
            </Button>
            <Button color="error" variant="contained" sx={{ color: "#fff" }}>
              Eiminar
            </Button>
          </Box>
        );
      },
    },
  ];
  const goTo = (ruta) => {
    navigate(ruta);
  };

  useEffect(() => {
    dispatch(getBitacoras());
    // setRows(bitacoras);
  }, []);
  useEffect(() => {
    console.log("cambio");
    setRows(bitacoras);
  }, [bitacoras]);

  return (
    <Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ mb: 2, fontWeight: "bold" }}
      >
        BITACORAS
      </Typography>
      <Button
        variant="contained"
        sx={{ color: "#fff" }}
        onClick={() => goTo("/bitacoras/nueva")}
        color="success"
      >
        Agregar
      </Button>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Box>
  );
};
