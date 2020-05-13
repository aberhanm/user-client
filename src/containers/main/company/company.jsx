import React, { Component } from 'react';
import { NavBar,Icon } from 'antd-mobile';
import { connect } from 'react-redux';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  searchPosition=()=>{
    console.log('search')
  }
  render() {
    console.log(this.props)
    let { user } = this.props
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />,
          <Icon key="1" type="ellipsis" />,
        ]}>{user.company}</NavBar>
      </div>
      
    );
  }
}

export default connect(
  state => ({ user: state.user })
)(Company)