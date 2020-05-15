import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';

import { Provider } from 'react-redux';

import store from './redux/store';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style.less'


import Register from './containers/register/register';

import Home from './containers/home/home';

import Login from './containers/login/login';
let user = Cookie.getJSON('user')
let identity = user ? user.identity : null

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