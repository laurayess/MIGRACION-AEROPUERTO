import { createSlice } from "@reduxjs/toolkit";

export const bitacoraSlice = createSlice({
  name: "bitacora",
  initialState: {
    bitacoras: [],
    isLoadingBitacoras: false,
    matricula: "",
    folio: "",
    planeador: { name: "planeador", selected: false, total: "", turm: "" },
    motor1: { name: "motor1", selected: false, total: "", turm: "" },
    motor2: {
      name: "motor2",
      selected: false,
      total: "",
      turm: "",
    },
    helice1: { name: "helice1", selected: false, total: "", turm: "" },
    helice2: { name: "helice2", selected: false, total: "", turm: "" },
    rotorPrincipal: {
      name: "rotorPrincipal",
      selected: false,
      total: "",
      turm: "",
    },
    rotorCola: { name: "rotorCola", selected: false, total: "", turm: "" },
    pala1: { name: "pala1", selected: false, total: "", turm: "" },
    pala2: { name: "pala2", selected: false, total: "", turm: "" },
    pala3: { name: "pala3", selected: false, total: "", turm: "" },
    pala4: { name: "pala4", selected: false, total: "", turm: "" },
    cantidades: [],
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
    reset: (state) => {
      state.matricula = "";
      state.folio = "";
      state.planeador = {
        name: "planeador",
        selected: false,
        total: "",
        turm: "",
      };
      state.motor1 = { name: "motor1", selected: false, total: "", turm: "" };
      state.motor2 = {
        name: "motor2",
        selected: false,
        total: "",
        turm: "",
      };
      state.helice1 = { name: "helice1", selected: false, total: "", turm: "" };
      state.helice2 = { name: "helice2", selected: false, total: "", turm: "" };
      state.rotorPrincipal = {
        name: "rotorPrincipal",
        selected: false,
        total: "",
        turm: "",
      };
      state.rotorCola = {
        name: "rotorCola",
        selected: false,
        total: "",
        turm: "",
      };
      state.pala1 = { name: "pala1", selected: false, total: "", turm: "" };
      state.pala2 = { name: "pala2", selected: false, total: "", turm: "" };
      state.pala3 = { name: "pala3", selected: false, total: "", turm: "" };
      state.pala4 = { name: "pala4", selected: false, total: "", turm: "" };
      state.cantidades = [];
    },
    setMatricula: (state, action) => {
      state.matricula = action.payload.matricula;
    },
    setFolio: (state, action) => {
      state.folio = action.payload.folio;
    },
    setBitaoras: (state, action) => {
      state.bitacoras = action.payload.bitacoras;
      state.isLoadingBitacoras = false;
    },

    startLoadingBitacoras: (state) => {
      state.isLoadingBitacoras = true;
    },

    setPlaneador: (state, action) => {
      state.planeador = { ...state.planeador, ...action.payload.planeador };
    },
    setMotor1: (state, action) => {
      state.motor1 = { ...state.motor1, ...action.payload.motor1 };
    },
    setMotor2: (state, action) => {
      state.motor2 = { ...state.motor2, ...action.payload.motor2 };
    },
    setHelice1: (state, action) => {
      state.helice1 = { ...state.helice1, ...action.payload.helice1 };
    },
    setHelice2: (state, action) => {
      state.helice2 = { ...state.helice2, ...action.payload.helice2 };
    },
    setRotorPrincipal: (state, action) => {
      state.rotorPrincipal = {
        ...state.rotorPrincipal,
        ...action.payload.rotorPrincipal,
      };
    },
    setRotorCola: (state, action) => {
      state.rotorCola = { ...state.rotorCola, ...action.payload.rotorCola };
    },
    setPala1: (state, action) => {
      state.pala1 = { ...state.pala1, ...action.payload.pala1 };
    },
    setPala2: (state, action) => {
      state.pala2 = { ...state.pala2, ...action.payload.pala2 };
    },
    setPala3: (state, action) => {
      state.pala3 = { ...state.pala3, ...action.payload.pala3 };
    },
    setPala4: (state, action) => {
      state.pala4 = { ...state.pala4, ...action.payload.pala4 };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  setPlaneador,
  setMotor1,
  setMotor2,
  setHelice1,
  setHelice2,
  setRotorPrincipal,
  setRotorCola,
  setPala1,
  setPala2,
  setPala3,
  setPala4,
  setMatricula,
  setFolio,
  reset,
  setBitaoras,
  startLoadingBitacoras,
} = bitacoraSlice.actions;
