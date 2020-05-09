import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, NavBar, InputItem, TextareaItem, WingBlank } from 'antd-mobile';

import './style.css'
import HeadSelector from '../../components/headSelector';
class UserInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar>用户信息完善</NavBar>
                <HeadSelector ></HeadSelector>
                <InputItem>求职岗位:</InputItem>
                <TextareaItem
                    title="个人介绍:"
                    autoHeight
                    labelNumber={5}
                />
                <div className='save'>
                    <WingBlank>
                        <Button type='primary'>保存</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(UserInfo)