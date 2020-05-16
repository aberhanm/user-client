import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { user } = this.props
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />,
        ]}>{user.position}</NavBar>
        client
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user })
)(Client)