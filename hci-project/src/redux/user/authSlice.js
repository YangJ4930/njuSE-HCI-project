import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        saTokenInfo: {
            tokenName: sessionStorage.getItem('tokenName'),
            tokenValue: sessionStorage.getItem('tokenValue'),
            loginId: parseInt(sessionStorage.getItem('loginId')),
        },
        msg: '',
        isLogin: sessionStorage.getItem('isLogin') === 'true',
    },
    reducers: {
        login: (state, action) => {
            console.log('login action.payload: ', action.payload);

            state.saTokenInfo.tokenName = action.payload.saTokenInfo.tokenName;
            state.saTokenInfo.tokenValue = action.payload.saTokenInfo.tokenValue;
            state.saTokenInfo.loginId = action.payload.saTokenInfo.loginId;
            state.msg = action.payload.msg;
            state.isLogin = true;

            sessionStorage.setItem('tokenName', state.saTokenInfo.tokenName);
            sessionStorage.setItem('tokenValue', state.saTokenInfo.tokenValue);
            sessionStorage.setItem('isLogin', 'true');
            sessionStorage.setItem('loginId', state.saTokenInfo.loginId.toString());
        },
        logout: (state) => {
            console.log('logout');

            state.saTokenInfo.tokenName = '';
            state.saTokenInfo.tokenValue = '';
            state.saTokenInfo.loginId = '';
            state.msg = 'action.payload.msg';
            state.isLogin = false;

            sessionStorage.setItem('tokenName', '');
            sessionStorage.setItem('tokenValue', '');
            sessionStorage.setItem('isLogin', 'false');
            sessionStorage.setItem('loginId', '');
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
