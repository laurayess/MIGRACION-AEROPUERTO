import { pokemonApi } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./extensionesSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}