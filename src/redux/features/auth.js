import { createSlice } from '@reduxjs/toolkit'
import {createSelector} from "reselect";
import {isNotEmptyObject} from "../../utils/utils";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = {};
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, updateUser } = authSlice.actions

export const selectUser = (state) => state?.auth?.user;
export const selectIsLoggedIn = createSelector(selectUser, (user) => isNotEmptyObject(user));

export default authSlice.reducer

