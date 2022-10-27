import { createSlice } from '@reduxjs/toolkit'

const AUTH_STATUS = ['checking', 'authenticated', 'not-authenticated']

const defaultState = {
    status: 'not-authenticated', // 'checking', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
    reducers: {
        login: (state, { payload: { displayName, email, photoURL, uid } }) => {

            state.status = AUTH_STATUS[1];
            state.uid = uid;
            state.email = email;
            state.displayName = displayName;
            state.photoURL = photoURL;
            state.errorMessage = null
        },

        logout: (state, { payload = null }) => {

            state.status = AUTH_STATUS[2];
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },

        chekingCredentials: (state) => {

            state.status = AUTH_STATUS[0];
        },
    }
})


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;