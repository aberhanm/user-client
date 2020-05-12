import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';

import { Button, NavBar, InputItem, TextareaItem, WingBlank, Toast, DatePicker, List, Picker, WhiteSpace } from 'antd-mobile';
import { userinfo } from '../../redux/actions';


import './style.css'
import HeadSelector from '../../components/headSelector';
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    return dateStr;
}
function getAge(birth) {
    let arr = birth.split('-')
    let age = 0
    let now = new Date()
    age = now.getFullYear() - arr[0]
    if (parseInt(arr[1]) <= (now.getMonth() + 1) && parseInt(arr[2]) <= now.getDate()) {
        age += 1
    }
    return age
}
class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: '',
            head: '',
            desc: '',
            birth: '',
            gender: 1,
            gratuated: '',
            exprience: '',
            salary: '',
            nickname: ''
        }
    }
    headselect = (head) => {
        this.setState({ head })
    }
    handelChange = (name, val) => {
        if (name === 'gender') {
            this.setState({
                [name]: val[0]
            })
        }
        else {
            this.setState({
                [name]: val
            })
        }

    }
    saveInfo = () => {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        setTimeout(() => {
            Toast.hide()
        }, 2000);
        let user_id = Cookie.getJSON('user').user_id
        let { position, head, desc, birth, gender, gratuated, exprience, salary, nickname } = this.state
        if (position && head && desc && birth && gender && gratuated && exprience && salary, nickname) {
            this.props.userinfo({ position, head, desc, user_id, gender, gratuated, exprience, salary, nickname, birth: formatDate(birth), age: getAge(formatDate(birth)) })
        } else {
            Toast.info('please check your enter!')
        }
    }
    render() {
        let genders = [
            { label: '男', value: 1 },
            { label: '女', value: 0 }
        ]
        return (
            <List>
                {
                    this.props.info.redirect ? <Redirect to={this.props.info.redirect}></Redirect> : null
                }
                <NavBar>用户信息完善</NavBar>
                <HeadSelector headselect={this.headselect}></HeadSelector>
                <InputItem onChange={val => this.handelChange('nickname', val)} placeholder='请输入姓名' className='input'>姓名:</InputItem>
                <DatePicker
                    mode="date"
                    title=""
                    extra="选择日期"
                    value={this.state.birth}
                    onChange={val => this.handelChange('birth', val)}
                >
                    <List.Item arrow="horizontal">出生日期:</List.Item>
                </DatePicker>
                <Picker data={genders} cols={1} className="forss" value={[this.state.gender]} onChange={val => this.handelChange('gender', val)}>
                    <List.Item arrow="horizontal">性别:</List.Item>
                </Picker>
                <InputItem onChange={val => this.handelChange('gratuated', val)} placeholder='请输入毕业院校' className='input'>毕业院校:</InputItem>
                <InputItem onChange={val => this.handelChange('position', val)} placeholder='请输入求职岗位' className='input'>求职岗位:</InputItem>
                <InputItem onChange={val => this.handelChange('exprience', val)} extra='年' className='input'>工作经历:</InputItem>
                <InputItem onChange={val => this.handelChange('salary', val)} placeholder='请输入期望薪资?' extra='K' className='input'>期望薪资:</InputItem>

                <TextareaItem
                    title="个人介绍:"
                    autoHeight
                    labelNumber={5}
                    onChange={val => this.handelChange('desc', val)}
                    className='input'
                />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary' onClick={this.saveInfo}>保存</Button>
                </WingBlank>
                <WhiteSpace />
                <WhiteSpace />

            </List>
        )
    }
}

export default connect(
    state => ({ info: state.info, user: state.user }),
    { userinfo }
)(UserInfo)