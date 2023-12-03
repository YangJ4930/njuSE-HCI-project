import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useDispatch, useSelector} from 'react-redux';
import {UserInfoScreen} from "./UserInfoScreen";
import {useNavigate} from "react-router-dom";


function UserView(props) {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const history = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            history('/user/login');
        }
    }, [isLogin]);

    return (
        <UserInfoScreen/>
    );
}


export default UserView;
