//

import {
  addBitacoraProvider,
  getBitacoraByIdProvider,
  getBitacorasProvider,
} from "../../../firebase/provider";
import { setBitaoras, startLoadingBitacoras } from "./bitacorasSlice";

export const getBitacoras = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBitacoras());
    const data = await getBitacorasProvider();
    //   convertir info de data
    console.log(data);
    dispatch(setBitaoras({ bitacoras: [...data] }));
    //   if (ok) {
    //
    //   }
  };
};

export const getBitacoraById = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBitacoras());
    const data = await getBitacoraByIdProvider(id);
    return data;
    //   if (ok) {
    //
    //   }
  };
};

export const addBitacora = (bitacora) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBitacoras());
    const data = await addBitacoraProvider(bitacora);
    return data;
    //   if (ok) {
    //
    //   }
  };
};
