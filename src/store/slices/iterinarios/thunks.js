import { loadIterinarioById, loadIterinarios } from "../../../helpers";
import {
  setIterinarioById,
  setIterinarios,
  startLoadingIterinario,
  startLoadingIterinarioById,
} from "./iterinariosSlice";

export const startLoadingIterinarios = () => {
  return async (dispatch, getState) => {
    dispatch(setIterinarios({ iterinarios: false }));
    dispatch(startLoadingIterinario());

    const data = await loadIterinarios();
    dispatch(setIterinarios({ iterinarios: data }));
  };
};

export const startLoadingIterinarioBuId = (novuelo) => {
  return async (dispatch, getState) => {
    dispatch(setIterinarioById({ iterinarioById: false }));
    dispatch(startLoadingIterinarioById());

    const data = await loadIterinarioById(novuelo);
    dispatch(setIterinarioById({ iterinarioById: data }));
  };
};
