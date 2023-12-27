import React, { Component } from 'react';
import BasicLayout from './layout/basicLayout';
import { ConfigProvider, theme } from "antd";
import {Provider, useSelector} from 'react-redux';
import { defaultAlgorithm } from '@ant-design/compatible';
function App() {
    const themea=useSelector((state)=>state.theme.IsChange)
    return (
        <React.Fragment>
            <ConfigProvider theme={{ algorithm: themea?theme.darkAlgorithm:defaultAlgorithm}}>
            <BasicLayout collapsed={true} />
            </ConfigProvider>
        </React.Fragment>
    );
}

export default App;
