import React, {Component} from 'react';
import Navbar from './navbar';
import BasicLayout from './layout/basicLayout';
import HomeView from './view/home/homeView';
import NewsView from './view/news/newsView';
import {Route, Routes} from 'react-router-dom';
import CommunityView from './view/community/communityView';
import postComponent from './view/community/component/postComponent';

function App() {
    return (
        <React.Fragment>
            <BasicLayout collapsed={true}/>
        </React.Fragment>
    );
}

export default App;