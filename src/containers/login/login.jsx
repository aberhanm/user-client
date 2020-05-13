import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace, Toast } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/index';
import Info from '../../components/Info/index';
import LoginForm from '../../components/login/form';
import { login } from '../../redux/actions';


class Login extends Component {
    constructor(props) {
        super(props)
    }
    componentWillUpdate() {
        Toast.hide();
    }
    render() {
        let { msg, redirect } = this.props.user
        if (redirect) {
            // Toast.success('注册成功,马上登录！', 1)
            return <Redirect to={redirect} ></Redirect>
        } else {
            return (
                <div>
                    {
                        msg ? <Info info={msg}></Info> : ''
                    }
                    <NavBar
                        mode='dark'
                        rightContent={[
                            <Icon key='0' type='ellipsis' onClick={() => console.log('more')}></Icon>
                        ]}>
                        理想直聘
                    </NavBar>
                    <Logo></Logo>
                    <WhiteSpace></WhiteSpace>
                    <LoginForm wrappedComponentRef={inst => this.formRef = inst} login={this.props.login}></LoginForm>
                </div>
            )
        }
    }
}
export default connect(
    state => ({ user: state.user }),
    { login }
)(Login)