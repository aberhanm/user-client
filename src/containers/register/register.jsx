import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace, Toast } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Logo from '../../components/Logo/index';
import Info from '../../components/Info/index';

import RegForm from '../../components/register/form';
import { register } from '../../redux/actions';
class Register extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { msg, redirect } = this.props.user
        if (redirect) {
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
                    <RegForm wrappedComponentRef={inst => this.formRef = inst} register={this.props.register} user={this.props.user}></RegForm>
                </div>
            )
        }
    }
}

export default connect(
    state => ({ user: state.user }),
    { register },
)(Register)
