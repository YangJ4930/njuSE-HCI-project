import React, {Component} from 'react';
import BasicLayout from './layout/basicLayout';
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <BasicLayout collapsed={true}/>
            </React.Fragment>
        </Provider>
    );
}

export default App;