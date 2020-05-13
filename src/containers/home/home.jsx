import React, { Component } from 'react';
import { Button, NavBar, List, InputItem, TextareaItem } from 'antd-mobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyInfo from '../companyInfo/index';
import UserInfo from '../userInfo/index';
import Client from '../main/client/client';
import Company from '../main/company/company';
import Cookie from 'js-cookie';
import { getuser } from '../../redux/actions';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //4.获取用户信息，登录过有cookie但是没有user,重新请求实现自动登录
        this.props.getuser()
    }
    render() {
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
                if (user.isbeauty) {
                    return user.identity === 0 && user.identity !== undefined ? <Redirect to='/user/main' /> : <Redirect to='/company/main' />
                }
                return user.identity === 0 && user.identity !== undefined ? <Redirect to='/userinfo' /> : <Redirect to='/companyinfo' />
            }
        }
        return (
            <div>
                <Switch>
                    <Route path="/companyinfo" component={CompanyInfo}></Route>
                    <Route path='/userinfo' component={UserInfo}></Route>
                    <Route path='/user/main' component={Client}></Route>
                    <Route path='/company/main' component={Company}></Route>
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { getuser },
)(Home)