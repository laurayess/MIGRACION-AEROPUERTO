import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import "../../../src/styles.css";
import { useSelector } from "react-redux";
import { useBitacoras } from "../hooks/useBitacoras";
import { decimalToHora, sumarHoras } from "../helpers/CalculatorTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";

export function CalculatorBitacora() {
  const { seleccionados, matricula, folio } = useBitacoras();
  const [formato, setFormato] = React.useState("Decimal");
  const [total, setTotal] = React.useState(true);
  const [turm, setTurm] = React.useState(false);
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [hora, sethora] = React.useState("");
  const [min, setmin] = React.useState("");
  const [decimal, setdecimal] = React.useState("");
  const [seleccionados2, setSeleccionados2] = React.useState(seleccionados);
  const [cantidades, setCantidades] = React.useState([]);
  const [to, setTo] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [selectedModel, setSelectedModel] = React.useState([]);

  const handleChangeFormato = (event) => {
    setFormato(event.target.value);
  };

  const handleChangeDecimal = (event) => {
    const regex = /^(\d+(\.\d*)?|\.\d+)?$/;
    if (regex.test(event.target.value)) setdecimal(event.target.value);
  };
  const handleChangeTotal = (event) => {
    setTotal(event.target.checked);
  };
  const handleChangeTURM = (event) => {
    setTurm(event.target.checked);
  };

  const eliminar = () => {
    let newCantidades = cantidades.filter((cantidad, index) => {
      const esta = selected.find((a) => {
        if (index + 1 === a.id) return true;
      });
      if (!esta) return cantidad;
    });
    let newTo = to.filter((t, index) => {
      const esta = selected.find((a) => {
        if (index + 1 === a.id) return true;
      });
      if (!esta) return t;
    });
    // console.log(newCantidades);
    // console.log(newTo);
    setCantidades(newCantidades);
    setTo(newTo);
    const initRow = iniacializarRows(seleccionados2);
    setRows(initRow);

    calcularRows(initRow, seleccionados2, newCantidades, newTo);
    setSelectedModel([]);
  };

  const handleChangeHora = (event) => {
    const regex = /^(\d+|0)?$/;
    if (regex.test(event.target.value)) sethora(event.target.value);
  };
  const handleChangeMin = (event) => {
    const regex = /^(0?[0-9]|[1-5][0-9])?$/;

    if (regex.test(event.target.value)) {
      setmin(event.target.value);
    }
  };

  const getRowClassName = (params) => {
    const index = params.row.id;
    if (index === cantidades.length) {
      return "resultado";
    }

    if (index === 0) {
      return "inicio";
    }

    return "";
  };

  const createColumns = (componentes) => {
    let ncolumns = [];
    ncolumns.push({
      field: "cantidades",
      headerName: "TIEMPO",
      headerClassName: "info",
      with: 50,
      editable: true,
    });
    ncolumns.push({
      field: "to",
      headerName: "SUMAR",
      headerClassName: "info",
      with: 50,
      editable: true,
    });
    componentes.map((comp) => {
      ncolumns.push({
        field: comp.name + "total",
        headerName: comp.name.toUpperCase() + " TOTAL",
        flex: 1,
        headerClassName: "total",
        minWidth: 200,
      });
      ncolumns.push({
        field: comp.name + "turm",
        headerName: comp.name.toUpperCase() + " T.U.R.M",
        headerClassName: "turm",
        flex: 1,
        minWidth: 200,
      });
    });

    return ncolumns;
  };

  const onFilaSelected = (ids) => {
    // console.log(ids);
    const selectedIDs = new Set(ids);
    const selectedRowData = rows.filter((row) => {
      // console.log(row);
      return selectedIDs.has(row.id);
    });
    setSelected(selectedRowData);
    setSelectedModel(ids);
  };

  const iniacializarRows = (iniciales) => {
    let init = { id: 0, cantidades: "0:0", to: "total,turm" };
    iniciales.map((comp, index) => {
      init[comp.name + "total"] = comp.total;
      init[comp.name + "turm"] = comp.turm;
    });

    return [init];
  };

  const calcularRows = (rowsinit, iniciales, cantidades, newTo) => {
    let newRows = [...rowsinit];
    cantidades.map((can, indexx) => {
      let row = { id: indexx + 1, cantidades: can, to: newTo[indexx] };
      let anterior = newRows[0];
      let sumarA = newTo[indexx];
      iniciales.map((comp, index) => {
        let totaln = anterior[comp.name + "total"];
        let turmn = anterior[comp.name + "turm"];

        if (sumarA.includes("total")) {
          totaln = sumarHoras(totaln, can);
        }
        if (sumarA.includes("turm")) {
          turmn = sumarHoras(turmn, can);
        }

        row[comp.name + "total"] = totaln;
        row[comp.name + "turm"] = turmn;
      });
      newRows = [row, ...newRows];
    });

    setRows(newRows);
  };

  React.useEffect(() => {
    const newColumns = createColumns(seleccionados);
    const initRow = iniacializarRows(seleccionados);
    setRows(initRow);
    setColumns(newColumns);
    // calcularRows(initRow, seleccionados2, cantidades);
  }, []);

  const onSumar = () => {
    let cantidadSum = "0:0";
    let toString = "";
    if (total) {
      toString += "total,";
    }
    if (turm) {
      toString += "turm";
    }
    if (formato === "Decimal") {
      cantidadSum = decimalToHora(decimal);
    } else {
      if (hora === "" && min === "") {
        cantidadSum = "00" + ":" + "00";
      } else
        cantidadSum =
          (hora < 10 ? "0" + hora : hora) + ":" + (min < 10 ? "0" + min : min);
    }

    setCantidades([...cantidades, cantidadSum]);

    setTo([...to, toString]);

    const newCant = [...cantidades, cantidadSum];
    const newTo = [...to, toString];
    const initRow = iniacializarRows(seleccionados2);
    setRows(initRow);

    calcularRows(initRow, seleccionados2, newCant, newTo);
  };
  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <Typography
        textAlign={"center"}
        variant="h5"
        sx={{ fontWeight: "bold", mb: 0, mt: 3 }}
      >
        {matricula}
      </Typography>
      <Typography textAlign={"center"} sx={{ mb: 3, mt: 1 }}>
        {folio}
      </Typography>

      <Box justifyContent={"space-around"} sx={{ mb: 0 }} display={"flex"}>
        <Box display={"flex"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={total} onChange={handleChangeTotal} />
              }
              label="T.Total"
            />
            <FormControlLabel
              control={<Checkbox checked={turm} onChange={handleChangeTURM} />}
              label="T.U.R.M"
            />
          </FormGroup>
        </Box>
        <Box
          sx={{ mb: 3 }}
          alignItems="center"
          flexDirection={"column"}
          display={"flex"}
        >
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Formato</FormLabel> */}
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={formato}
              onChange={handleChangeFormato}
            >
              <FormControlLabel
                value="Decimal"
                control={<Radio />}
                label="Decimal"
              />
              <FormControlLabel
                value="Hora"
                control={<Radio />}
                label="Hora:Min"
              />
            </RadioGroup>
          </FormControl>

          <Box mt="5px" display={"flex"}>
            {formato === "Decimal" ? (
              <>
                <TextField
                  size="small"
                  id="filled-basic"
                  label="Numero Dec."
                  variant="filled"
                  value={decimal}
                  onChange={handleChangeDecimal}
                />
              </>
            ) : (
              <>
                <TextField
                  size="small"
                  sx={{ width: "150px" }}
                  id="filled-basic"
                  label="Hora"
                  variant="filled"
                  value={hora}
                  onChange={handleChangeHora}
                />
                <Typography sx={{ p: 2, fontWeight: "bold" }}>:</Typography>
                <TextField
                  size="small"
                  sx={{ width: "150px" }}
                  id="filled-basic"
                  label="min"
                  variant="filled"
                  value={min}
                  onChange={handleChangeMin}
                />
              </>
            )}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection="column">
          <Button
            color="success"
            onClick={onSumar}
            sx={{ height: "40px" }}
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            SUMAR
          </Button>
          <Button
            disabled={selected < 1}
            color="error"
            onClick={eliminar}
            sx={{ mt: 1, height: "40px" }}
            variant="contained"
            startIcon={<RemoveIcon />}
          >
            ELIMINAR
          </Button>
        </Box>
      </Box>

      <Box sx={{ pl: 3, pr: 3, height: "400px" }}>
        <DataGrid
          rows={rows}
          sx={{ boxShadow: 1 }}
          columns={columns}
          getRowClassName={getRowClassName}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          selectionModel={selectedModel}
          onSelectionModelChange={onFilaSelected}
        />
      </Box>
    </Box>
  );
}
