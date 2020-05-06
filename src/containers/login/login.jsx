import React, { Component } from 'react';
import { NavBar, Icon,WhiteSpace } from 'antd-mobile';

import Logo from '../../components/Logo/index';
import LoginForm from '../../components/login/form';

export default class Login extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <NavBar
                    mode='dark'
                    rightContent={[
                        <Icon key='0' type='ellipsis' onClick={() => console.log('more')}></Icon>
                    ]}>
                    理想直聘
                </NavBar>
                <Logo></Logo>
                <WhiteSpace></WhiteSpace>
                <LoginForm></LoginForm>
            </div>
        )
    }
}