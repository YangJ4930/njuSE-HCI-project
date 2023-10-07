import React, { Component } from 'react';
import Navbar from './navbar';
import BasicLayout from './layout/basicLayout';
import HomeView from './view/homeView';
import NewsView from './view/newsView';
import { Route, Routes } from 'react-router-dom';

function App() {
    return ( 
        <React.Fragment>
            <BasicLayout />
            <Routes>
                    <Route path = "/" element = {HomeView}></Route>
                    <Route></Route>
                    <Route path = "/news" element = {NewsView}></Route>
                    <Route></Route>
                    <Route></Route>
            </Routes>
        </React.Fragment>
     );
}

export default App;