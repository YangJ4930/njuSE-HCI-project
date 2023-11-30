import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from '../user/LoginScreen';
import {UserInfoScreen} from "./UserInfoScreen";


function UserView(props) {
    const authInfo = useSelector((state) => state.auth);

    return (
        authInfo.isLogin === true ? <UserInfoScreen/> : <LoginScreen/>
    );
}


export default UserView;
