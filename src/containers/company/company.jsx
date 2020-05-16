import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Position from '../company/position';
// import Find from '../company/find';
// import Msg from '../company/message';
// import MY from '../company/my';
class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  searchPosition = () => {
    console.log('search')
  }
  render() {
    console.log(this.props)
    let { user } = this.props
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />
        ]}>{user.company}</NavBar>
       company
      </div>

    );
  }
}

export default connect(
  state => ({ user: state.user })
)(Company)