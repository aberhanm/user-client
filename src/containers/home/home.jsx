import React, { Component } from 'react';
import { Button, NavBar, List, InputItem, TextareaItem } from 'antd-mobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyInfo from '../companyInfo/index';
import UserInfo from '../userInfo/index';
import Cookie from 'js-cookie';


class Home extends Component {

    render() {
        console.log(Cookie.getJSON('user'))
        let user = Cookie.getJSON('user')
        let  identity  = user ? user.identity : null
        console.log(identity)
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        {identity? <CompanyInfo />:<Redirect to='/login' />}
                    </Route>
                    <Route path="/companyinfo">
                        {identity === 0 ? <Redirect to="/userinfo" /> : <CompanyInfo />}
                    </Route>
                    <Route path='/userinfo' component={UserInfo}></Route>
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
)(Home)