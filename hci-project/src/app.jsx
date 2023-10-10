import React, { Component } from 'react';
import Navbar from './navbar';
import BasicLayout from './layout/basicLayout';
import HomeView from './view/homeView';
import NewsView from './view/newsView';
import { Route, Routes } from 'react-router-dom';

function App() {
    return ( 
        <React.Fragment>
            <BasicLayout collapsed={true}/>
        </React.Fragment>
     );
}

export default App;