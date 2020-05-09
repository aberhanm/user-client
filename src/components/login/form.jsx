import React, { Component } from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

import "./stzle.css"

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: "",
            hasError: false,
            passValid: false,
            singUp: false
        };
    }

    submit = () => {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        let { username, password, hasError, passValid } = this.state
        if (hasError || passValid) {
            Toast.info('Please check your enter')
            return
        } else {
            this.props.login({ username, password })
        }

    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits')
        }
        if (this.state.passValid) {
            Toast.info('包含英文和字母，长度6-16个字符')
        }
    }
    handelChange = (name, value) => {
        this.setState({
            [name]: value,
        });
        if (name === 'username') {
            if (value.replace(/\s/g, '').length < 11) {
                this.setState({ hasError: true })
            } else {
                this.setState({ hasError: false })
            }
        }
        if (name === 'password') {
            if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)) {
                this.setState({ passValid: false })
            } else {
                this.setState({ passValid: true })
            }

        }

    }
    register = () => {
        this.setState({ singUp: true })
    }
    render() {
        let { userType, user, singUp } = this.state
        return (
            <div className='form'>
                {
                    singUp ? <Redirect to='/register'></Redirect> : null
                }
                <List renderHeader={() => '注册用户'}>
                    <InputItem
                        type="username"
                        placeholder="186 1234 1234"
                        clear
                        error={this.state.hasError}
                        onChange={val => { this.handelChange('username', val) }}
                        onErrorClick={this.onErrorClick}
                        value={this.state.username}

                    >手机号码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        type="password"
                        placeholder="****"
                        error={this.state.passValid}
                        onErrorClick={this.onErrorClick}
                        onChange={val => { this.handelChange('password', val) }}
                        value={this.state.password}
                    >密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WingBlank size='lg'>
                        <Button type='primary' onClick={this.submit}>立即登陆</Button>
                        <WhiteSpace></WhiteSpace>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={() => { this.setState({ singUp: true }) }}>前往注册</Button>
                    </WingBlank>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                </List>
            </div>

        );
    }
}
