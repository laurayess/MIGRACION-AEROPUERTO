import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        change: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.logged = !state.logged;
        },

    },
})

// Action creators are generated for each case reducer function
export const { change } = authSlice.actions;