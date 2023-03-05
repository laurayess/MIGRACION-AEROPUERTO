import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  reset,
  setFolio,
  setHelice1,
  setHelice2,
  setMatricula,
  setMotor1,
  setMotor2,
  setPala1,
  setPala2,
  setPala3,
  setPala4,
  setPlaneador,
  setRotorCola,
  setRotorPrincipal,
} from "../../store/slices/bitacoras/bitacorasSlice";
import Componente from "../components/Componente";
import { GridComponents } from "../components/GridComponents";
import { decimalToHora } from "../helpers/CalculatorTime";

export const InicioBitacora = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [matriculaa, setMatriculaa] = React.useState("");
  const [folioo, setFolioo] = React.useState("");

  const handleChangeMatricula = (event) => {
    setMatriculaa(event.target.value);
    console.log(event.target.value);
    dispatch(setMatricula({ matricula: event.target.value }));
  };

  const handleChangeFolio = (event) => {
    setFolioo(event.target.value);
    console.log(event.target.value);
    dispatch(setFolio({ folio: event.target.value }));
  };

  const onClick = () => {
    navigate("/bitacoras/calculator");
  };

  const getNewValues = (valor) => {
    let nv = { ...valor };
    let newValueTotal = nv.total;
    let newValueTURM = nv.turm;
    if (!nv.total.includes(":")) {
      newValueTotal = decimalToHora(nv.total.trim());
    }
    if (!nv.turm.includes(":")) {
      newValueTURM = decimalToHora(nv.turm.trim());
    }

    nv.total = newValueTotal;
    nv.turm = newValueTURM;
    return nv;
  };

  const onPlaneador = (valor) => {
    const val = getNewValues(valor);

    dispatch(setPlaneador({ planeador: val }));
  };

  const onMotor1 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setMotor1({ motor1: val }));
  };
  const onMotor2 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setMotor2({ motor2: val }));
  };
  const onHelice1 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setHelice1({ helice1: val }));
  };
  const onHelice2 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setHelice2({ helice2: val }));
  };
  const onRotorPrincial = (valor) => {
    const val = getNewValues(valor);
    dispatch(setRotorPrincipal({ rotorPrincipal: val }));
  };
  const onRotorCola = (valor) => {
    const val = getNewValues(valor);
    dispatch(setRotorCola({ rotorCola: val }));
  };
  const onPala1 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setPala1({ pala1: val }));
  };
  const onPala2 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setPala2({ pala2: val }));
  };
  const onPala3 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setPala3({ pala3: val }));
  };

  const onPala4 = (valor) => {
    const val = getNewValues(valor);
    dispatch(setPala4({ pala4: val }));
  };

  useEffect(() => {
    dispatch(reset());
  }, []);
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignContent="center"
        alignItems={"center"}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
          Crear nueva bitacora
        </Typography>
        <Box display={"flex"} justifyContent="space-around" width={"500px"}>
          <TextField
            size="small"
            id="filled-basic"
            label="Matricula"
            variant="filled"
            value={matriculaa}
            onChange={handleChangeMatricula}
          />
          <TextField
            size="small"
            id="filled-basic"
            label="Folio"
            variant="filled"
            value={folioo}
            onChange={handleChangeFolio}
          />
        </Box>

        <GridComponents>
          <Componente nombre="PLANEADOR" onChangeValue={onPlaneador} />
          <Componente nombre="MOTOR 1" onChangeValue={onMotor1} />
          <Componente nombre="MOTOR 2" onChangeValue={onMotor2} />
          <Componente nombre="HELICE 1" onChangeValue={onHelice1} />
          <Componente nombre="HELICE 2" onChangeValue={onHelice2} />
          <Componente
            nombre="ROTOR PRINCIPAL"
            onChangeValue={onRotorPrincial}
          />
          <Componente nombre="ROTOR DE COLA" onChangeValue={onRotorCola} />
          <Componente nombre="PALA 1" onChangeValue={onPala1} />
          <Componente nombre="PALA 2" onChangeValue={onPala2} />
          <Componente nombre="PALA 3" onChangeValue={onPala3} />
          <Componente nombre="PALA 4" onChangeValue={onPala4} />
        </GridComponents>
        <Button
          color="primary"
          sx={{ width: "200px", mt: 3, mb: 3 }}
          variant="contained"
          onClick={onClick}
        >
          Siguiente
        </Button>
      </Box>
    </>
  );
};
