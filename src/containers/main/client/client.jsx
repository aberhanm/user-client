import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, NavLink,Link } from 'react-router-dom';
import SvgIcon from '../../../components/SvgIcon';

import '../../../assets/style.less'
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  searchPosition = () => {
    console.log('search')
  }
  render() {
    let { user } = this.props
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />,
          <Icon key="1" type="ellipsis" />,
        ]}>{user.position}</NavBar>
        <div className='nav-footer' >
          <Link to='/orgDash' className='nav-foot-item'>
            <span><SvgIcon name='position'></SvgIcon></span>
            <span>职位</span>
          </Link>
          <Link to='/orgDash/find' className='nav-foot-item'>
            <span><SvgIcon name='find'></SvgIcon></span>
            <span>发现</span></Link>
          <Link to='/orgDash/message' className='nav-foot-item'>
            <span><SvgIcon name='message'></SvgIcon></span>
            <span>消息</span></Link>
          <Link to='/orgDash/my' className='nav-foot-item'>
            <span><SvgIcon name='my'></SvgIcon></span>
            <span>我的</span></Link>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user })
)(Client)