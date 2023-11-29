import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
