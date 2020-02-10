import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./0-Main/1-main-bll/store"
import Main from "./0-Main/0-main-ui/Main"
import 'antd/dist/antd.css'
import './App.css';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter  history={history} basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}
