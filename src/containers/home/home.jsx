import React, { Component } from 'react';
import { Button, NavBar, List, InputItem, TextareaItem, Toast, Icon } from 'antd-mobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';

import { connect, useStore } from 'react-redux';
import CompanyInfo from '../companyInfo/index';
import UserInfo from '../userInfo/index';
import Client from '../client/client';
import Company from '../company/company';
import Message from '../message';
import Find from '../find';
import MY from '../my';
import NotFound from '../NotFound';
import Footer from '../../components/Footer';

import { getuser } from '../../redux/actions';

class Home extends Component {
    constructor(props) {
        super(props)
        this.navlist = [{
            path: '/userDash',
            component: Client,
            text: '职位',
            icon: 'position',
            selected: 'position-selected'
        }, {
            path: '/orgDash',
            component: Company,
            text: '人才',
            icon: 'position',
            selected: 'position-selected'
        }, {
            path: '/find',
            component: Find,
            text: '发现',
            icon: 'find',
            selected: 'find-selected'
        }, {
            path: '/message',
            component: Message,
            text: '消息',
            icon: 'find',
            selected: 'find-selected'
        }, {
            path: '/my',
            component: MY,
            text: '我的',
            icon: 'my',
            selected: 'my-selected'
        }]
    }
    componentDidMount() {
        //4.获取用户信息，登录过有cookie但是没有user,重新请求实现自动登录
        this.props.getuser()
        Toast.hide()
    }
 
    render() {
        console.log(this.props)
        //1.没登录过，跳转login
        let cookie = Cookie.getJSON('user')
        if (!cookie || !cookie.user_id) {
            return <Redirect to='/login'></Redirect>
        }
        let { user } = this.props
        //2.如果state-user中没有数据，登录过，返回null
        if (!user.id) {
            return null
        } else {
            //3.判断如果是路由‘/’，如果信息以完善跳转相应页面，没有静茹信息完善页面
            let path = this.props.location.pathname
            if (path === '/') {
                return user.identity === 0 && user.identity !== undefined ? <Redirect to='/userinfo' /> : <Redirect to='/companyinfo' />
            }
        }
        let navlist = this.navlist
        let currentnav = navlist.find(nav => nav.path === this.props.location.pathname)
        if (currentnav) {
            if (user.identity === 1) {
                navlist[0].hide = true
            } else {
                navlist[1].hide = true
            }
        }
        return (
            <div>
                <Switch>
                    <Route path="/companyinfo" component={CompanyInfo}></Route>
                    <Route path='/userinfo' component={UserInfo}></Route>
                    {
                        navlist.map((nav, key) => <Route path={nav.path} component={nav.component} key={key}></Route>)
                    }
                    <Route component={NotFound}></Route>
                </Switch>
                {
                    currentnav ? <Footer navlist={navlist}></Footer> : null
                }
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { getuser },
)(Home)