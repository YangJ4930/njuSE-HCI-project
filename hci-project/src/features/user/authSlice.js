import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        tokenName: sessionStorage.getItem('tokenName'),
        tokenValue: sessionStorage.getItem('tokenValue'),
        isLogin: sessionStorage.getItem('isLogin') === 'true',
        loginId: parseInt(sessionStorage.getItem('loginId')),
    },
    reducers: {
        login: (state, action) => {
            state.tokenName = action.payload.tokenName;
            state.tokenValue = action.payload.tokenValue;
            state.isLogin = action.payload.isLogin;
            state.loginId = action.payload.loginId;
        },
        logout: (state) => {
            state.isLogin = false;
            state.tokenValue = '';
            state.tokenName = '';
            state.loginId = 0;

            sessionStorage.setItem('tokenName', '');
            sessionStorage.setItem('tokenValue', '');
            sessionStorage.setItem('isLogin', 'false');
            sessionStorage.setItem('loginId', '');
        },
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
