import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Logo from '../../components/Logo/index';

import RegForm from '../../components/register/form';
import { register } from '../../redux/actions';
class Register extends Component {
    
    render() {
        let {  redirect } = this.props.user
        return (
            <div>
                {
                    redirect ? <Redirect to='/' ></Redirect> : null
                }
                <NavBar
                    mode='dark'
                    rightContent={[
                        <Icon key='0' type='ellipsis' onClick={() => console.log('more')}></Icon>
                    ]}>
                    招聘
                    </NavBar>
                <Logo></Logo>
                <WhiteSpace></WhiteSpace>
                <RegForm wrappedComponentRef={inst => this.formRef = inst} register={this.props.register} user={this.props.user}></RegForm>
            </div>
        )

    }
}

export default connect(
    state => ({ user: state.user }),
    { register },
)(Register)
