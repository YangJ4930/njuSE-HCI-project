import React, {Component} from 'react';
import BasicLayout from './layout/basicLayout';
import HomeView from './view/home/homeView';
import NewsView from './view/news/newsView';
import { Route, Routes } from 'react-router-dom';
import CommunityView from './view/community/communityView';


function App() {
    return (
        <React.Fragment>
            <BasicLayout collapsed={true} />
        </React.Fragment>
    );
}

export default App;
