import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import { ConfigProvider, theme } from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <React.StrictMode>
                <BrowserRouter>
                    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                        <App />
                    </ConfigProvider>
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>,
);
