import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style.less'


import Register from './containers/register/register';

import Home from './containers/home/home';

import Login from './containers/login/login';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route component={Home}></Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)