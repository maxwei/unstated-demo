//react
import React from 'react';
import ReactDOM from 'react-dom';
//unstated状态管理
import { Provider, Subscribe, Container } from 'unstated';
//路由
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'

//组件
import App from './src/pages/app/app'
//css
import './src/assets/css/reset.css'

ReactDOM.render(
    (
        <Provider>
            <Router>
                <App />
            </Router>
        </Provider>

    ), document.getElementById('app')
);