import { loadIterinarioById, loadIterinarios } from "../../../helpers";
import { setIterinarios, startLoadingIterinario } from "./iterinariosSlice";

export const startLoadingIterinarios = () => {
  return async (dispatch, getState) => {
    dispatch(setIterinarios({ iterinarios: false }));
    dispatch(startLoadingIterinario());

    const data = await loadIterinarios();
    loadIterinarioById();
    dispatch(setIterinarios({ iterinarios: data }));
  };
};
