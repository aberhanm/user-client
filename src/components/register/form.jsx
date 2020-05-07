import React, { Component } from 'react';
import { List, InputItem, Button, WhiteSpace, Radio, WingBlank, Toast } from 'antd-mobile';
import { NavLink, Redirect } from 'react-router-dom';
import Info from '../Info/index';

import './form.css'
const ListItem = List.Item


export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: 0,
            username: '',
            password: "",
            password2: '',
            hasError: false,
            passinValid: false,
            unsurePass: false,
            hasaccount: false,
            userType: [{ label: '个人', checked: true, value: 0 }, { label: '企业', checked: false, value: 1 }]
        };
    }

    submit = () => {
        let { username, password, hasError, passinValid, unsurePass, identity, password2 } = this.state
        console.log(this.state)
        if (hasError || passinValid || unsurePass) {
            Toast.info('Please check your enter')
            return false
        } else {
            if (username && password && password2) {
                this.props.register({ username, password, password2, identity })
            }else{
                Toast.info('Please check your enter')
            }
        }


    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits')
        }
        if (this.state.passinValid) {
            Toast.info('字母开头，包含英文和字母，长度8-16个字符')
        }
        if (this.state.unsurePass) {
            Toast.info('两次输入密码不正确')
        }
    }
    hascount = () => {
        this.setState({ hasaccount: true })
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
        if (name === 'password' || name === 'password2') {
            if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)) {
                this.setState({ passinValid: false })
               
                if(name==='password2'){
                    if(this.state.password===value){
                        console.log('jkfh')
                        this.setState({ unsurePass: false })
                    }else{
                        this.setState({ unsurePass: true })
                    }
                }
            } else {
                this.setState({ passinValid: true })
            }
        }
        // console.log(this.state)
    }
    render() {
        let {username,password,password2, userType, identity, hasaccount,hasError,passinValid,unsurePass } = this.state
        return (
            <div className='form'>
                {
                    hasaccount ? <Redirect to='/login'></Redirect> : null
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
                        error={this.state.passinValid}
                        onErrorClick={this.onErrorClick}
                        onChange={val => { this.handelChange('password', val) }}
                        value={this.state.password}
                    >密码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                        error={this.state.unsurePass}
                        onErrorClick={this.onErrorClick}
                        onChange={val => { this.handelChange('password2', val) }}
                        value={this.state.password2}
                    >确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <ListItem>
                        <span>用户类型</span>
                        {
                            userType.map((item, key) => (
                                <Radio className="my-radio" checked={identity === item.value} onChange={() => { this.handelChange('identity', item.value) }} key={item.value}>{item.label}</Radio>
                            ))
                        }
                    </ListItem>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WingBlank size='lg'>
                        <Button type='primary' onClick={this.submit} disabled=
                        {!((username && password && password2) && (!hasError && !passinValid && !unsurePass))}>立即注册</Button>
                        <WhiteSpace></WhiteSpace>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.hascount}>已有账户</Button>
                    </WingBlank>
                    <WhiteSpace></WhiteSpace>
                </List>
            </div>

        );
    }
}
