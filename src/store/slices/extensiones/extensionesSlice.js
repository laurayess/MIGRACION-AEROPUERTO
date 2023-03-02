import { createSlice } from '@reduxjs/toolkit';

export const extensionesSlice = createSlice({
    name: 'extensiones',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = extensionesSlice.actions;