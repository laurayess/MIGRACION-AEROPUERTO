import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Componente({
  nombre = "name",
  onChangeValue = () => {},
}) {
  const [checked, setChecked] = React.useState(false);
  const [total, setTotal] = React.useState("");
  const [turm, setTurm] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChangeValue({ selected: event.target.checked, total, turm });
  };

  const handleChangeTotal = (event) => {
    const regex = /^[0-9:.]*$/;
    if (regex.test(event.target.value)) {
      setTotal(event.target.value);
      onChangeValue({ selected: checked, total: event.target.value, turm });
    }
  };
  const handleChangeTURM = (event) => {
    setTurm(event.target.value);
    onChangeValue({ selected: checked, total, turm: event.target.value });
  };

  return (
    <Box
      width={"200px"}
      height={"auto"}
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      sx={{
        boxShadow: 4,
        borderRadius: "10px",
        pb: 2,
        pl: 2,
        pr: 2,
        background: checked ? "#199EA6" : "#090D37",
        color: "#fff",
      }}
    >
      <Box display={"flex"} width={"100%"} sx={{}} justifyContent="end">
        <Checkbox
          sx={{ color: "#fff" }}
          checked={checked}
          color="default"
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold" }}
        textAlign={"center"}
      >
        {nombre}
      </Typography>
      <Typography textAlign={"center"} sx={{ mt: 3, mb: 2 }}>
        Valor inicial
      </Typography>

      <TextField
        sx={{ background: "#fff", color: "#fff" }}
        size="small"
        id="filled-basic"
        label="T.Total"
        variant="filled"
        value={total}
        onChange={handleChangeTotal}
      />
      <TextField
        sx={{ mt: 2, background: "#fff", color: "#fff" }}
        id="filled-basic"
        size="small"
        label="T.U.R.M"
        variant="filled"
        value={turm}
        onChange={handleChangeTURM}
      />
      {/* <Typography sx={{ mt: 3 }}>Formatos aceptados:</Typography>
      <Typography sx={{ fontSize: "13px", mt: 1, fontWeight: "bold" }}>
        Decimal:"10.5" o Hora:"10:30"
      </Typography> */}
    </Box>
  );
}
