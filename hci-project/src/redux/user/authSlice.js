import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        saTokenInfo: {
            tokenName: "tokenName",
            tokenValue: "tokenValue",
            loginId: 0,
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
        },
        logout: (state) => {
            console.log('logout');

            state.saTokenInfo.tokenName = '';
            state.saTokenInfo.tokenValue = '';
            state.saTokenInfo.loginId = '';
            state.msg = 'action.payload.msg';
            state.isLogin = false;
        },
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
