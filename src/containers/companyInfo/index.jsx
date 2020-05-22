import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Button, NavBar, InputItem, TextareaItem, DatePicker, WingBlank, Toast, List, WhiteSpace } from 'antd-mobile';
import { formatDate } from '../../utils/common';
import './style.css'
import HeadSelector from '../../components/headSelector';
import { userinfo } from '../../redux/actions';
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
            position: ''
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
        let user_id = Cookie.getJSON('user').user_id
        let { head, company, desc, nickname, birth, mobile, email, address,position } = this.state
        if (head && company && desc && nickname && birth && mobile && email && address && position) {
            this.props.userinfo({position, head, company, desc, user_id, nickname, birth: formatDate(birth), mobile, email, address })
        } else {
            Toast.info('please check your enter!')
        }
    }
    render() {
        if (this.props.user.isbeauty) {
            return <Redirect to='/orgDash'></Redirect>
        }
        return (
            <List>
                <NavBar type='primary'>公司信息完善</NavBar>
                <HeadSelector headselect={this.headselect}></HeadSelector>
                <InputItem onChange={val => this.handelChange('company', val)} placeholder='请输入公司名称' className='input'>公司名称:</InputItem>
                <InputItem onChange={val => this.handelChange('nickname', val)} placeholder='请输入姓名' className='input'>姓名:</InputItem>
                <InputItem onChange={val => this.handelChange('position', val)} placeholder='请输入职位' className='input'>职位:</InputItem>
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
    state => ({ user: state.user }),
    { userinfo }
)(CompanyInfo)