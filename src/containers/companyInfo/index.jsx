import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Button, NavBar, InputItem, TextareaItem, DatePicker, WingBlank, Toast, List, WhiteSpace } from 'antd-mobile';

import './style.css'
import HeadSelector from '../../components/headSelector';
import { userinfo } from '../../redux/actions';
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    return dateStr;
}
class CompanyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            head: '',
            company: '',
            desc: '',
            birth: '',
            mobile: '',
            email: '',
            address: '',
        }
    }
    headselect = (head) => {
        this.setState({ head })
    }
    handelChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    saveInfo = () => {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        setTimeout(() => {
            Toast.hide()
        }, 2000);
        console.log(this.state)
        let user_id = Cookie.getJSON('user').user_id
        let { head, company, desc, nickname, birth, mobile, email, address } = this.state
        if (head && company && desc && nickname && birth && mobile && email && address) {
        
            this.props.userinfo({ head, company, desc, user_id, nickname, birth: formatDate(birth), mobile, email, address })
        } else {
            Toast.info('please check your enter!')
        }
    }
    render() {

        return (
            <List>
                {
                    this.props.info.redirect ? <Redirect to={this.props.info.redirect}></Redirect> : null
                }
                <NavBar type='primary'>公司信息完善</NavBar>
                <HeadSelector headselect={this.headselect}></HeadSelector>
                <InputItem onChange={val => this.handelChange('company', val)} placeholder='请输入公司名称' className='input'>公司名称:</InputItem>
                <InputItem onChange={val => this.handelChange('nickname', val)} placeholder='请输入CEO' className='input'>CEO:</InputItem>
                <InputItem onChange={val => this.handelChange('mobile', val)} placeholder='请输入联系电话' className='input'>联系电话:</InputItem>
                <InputItem onChange={val => this.handelChange('email', val)} placeholder='请输入公司邮箱' className='input'>公司邮箱:</InputItem>
                <DatePicker
                    mode="date"
                    title=""
                    extra="选择时间"
                    value={this.state.birth}
                    onChange={val => this.handelChange('birth', val)}
                >
                    <List.Item arrow="horizontal">成立时间:</List.Item>
                </DatePicker>
                <InputItem onChange={val => this.handelChange('address', val)} placeholder='请输入公司地址' className='input'>公司地址:</InputItem>
                <TextareaItem
                    title="公司介绍:"
                    autoHeight
                    labelNumber={5}
                    onChange={val => this.handelChange('desc', val)}
                    className='input'
                />
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type='primary' onClick={this.saveInfo}>保存</Button>
                </WingBlank>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>

            </List>
        )
    }
}

export default connect(
    state => ({ info: state.info }),
    { userinfo }
)(CompanyInfo)