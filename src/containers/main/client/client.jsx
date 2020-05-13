import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

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
        <div className='nav-footer'>
          s
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user })
)(Client)