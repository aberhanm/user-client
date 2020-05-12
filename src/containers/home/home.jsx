import React, { Component } from 'react';
import { Button, NavBar, List, InputItem, TextareaItem } from 'antd-mobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyInfo from '../companyInfo/index';
import UserInfo from '../userInfo/index';
import Client from '../main/client/client';
import Company from '../main/company/company';
import Cookie from 'js-cookie';


class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let user = Cookie.getJSON('user')
        let identity = user ? user.identity : null
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        {
                            identity === 0 || identity === 1 ? <Redirect to='/main' /> : <Redirect to='/login' />
                        }
                    </Route>
                    <Route path='/main'>
                        {
                            identity === 0 ? <Client /> : <Company />
                        }
                    </Route>
                    <Route path="/companyinfo">
                        {
                            identity === 0 ? <Redirect to="/userinfo" /> : <CompanyInfo />
                        }
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