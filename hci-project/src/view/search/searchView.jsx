import React, {Component, useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeVisible} from "../../redux/navbar/navbarSlice";
import * as MyEventEmitter from "@reduxjs/toolkit";


const SearchView = () =>{
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch();
    const visible = useSelector((state) => state.navbar.visible);

    useEffect(() => {
        // 根据路由的变化设置 visible 的值
        const pathname = location.pathname;
        const isVisible = pathname === '/search'; // 根据路由路径设置可见性

        dispatch(changeVisible(!isVisible)); // 分发 action 更新可见性

    }, [location, dispatch]);

    useEffect(() => {
        return () => {
            dispatch(changeVisible(true)); // 组件返回时将 visible 设置为 true
        };
    }, [dispatch]);

    return(
        <>
            <h1>{searchParams.get('content')}</h1>

        </>
    )


}

export default SearchView;
