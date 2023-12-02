import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        saTokenInfo: {
            tokenName: sessionStorage.getItem('tokenName'),
            tokenValue: sessionStorage.getItem('tokenValue'),
            isLogin: sessionStorage.getItem('isLogin') === 'true',
            loginId: parseInt(sessionStorage.getItem('loginId')),
        },
        msg: '',
    },
    reducers: {
        login: (state, action) => {
            console.log('login action.payload: ', action.payload)

            state.saTokenInfo.tokenName = action.payload.saTokenInfo.tokenName;
            state.saTokenInfo.tokenValue = action.payload.saTokenInfo.tokenValue;
            state.saTokenInfo.isLogin = true;
            state.saTokenInfo.loginId = action.payload.saTokenInfo.loginId;
            state.msg = action.payload.msg;

            sessionStorage.setItem('tokenName', state.saTokenInfo.tokenName);
            sessionStorage.setItem('tokenValue', state.saTokenInfo.tokenValue);
            sessionStorage.setItem('isLogin', 'true');
            sessionStorage.setItem('loginId', state.saTokenInfo.loginId.toString());
        },
        logout: (state) => {
            console.log('logout')

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
