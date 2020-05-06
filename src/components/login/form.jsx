import React, { Component } from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: "",
            hasError: false,
            passValid: false,
        };
    }

    submit = () => {

        let {phone, password, hasError,passValid } = this.state
        if (hasError || passValid) {
            Toast.info('Please check your enter')
            return
        }
      
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits')
        }
        if (this.state.passValid) {
            Toast.info('字母开头，包含英文和字母，长度8-16个字符')
        }
    }
    handelChange = (name, value) => {
        if (name === 'phone') {
            if (value.replace(/\s/g, '').length < 11) {
                this.setState({ hasError: true })
            } else {
                this.setState({ hasError: false })
            }
        }
        if (name === 'password') {
            if (/^[a-z]\d[^]{8,16}$/.test(value)) {
                this.setState({ passValid: false })
            } else {
                this.setState({ passValid: true })
            }

        }
        this.setState({
            [name]: value,
        });
    }
    render() {
        let { userType, user } = this.state
        return (
            <List renderHeader={() => '注册用户'}>
                <InputItem
                    type="phone"
                    placeholder="186 1234 1234"
                    clear
                    error={this.state.hasError}
                    onChange={val => { this.handelChange('phone', val) }}
                    onErrorClick={this.onErrorClick}
                    value={this.state.phone}

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
                    <Button onClick={this.submit}>前往注册</Button>
                </WingBlank>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
            </List>
        );
    }
}
