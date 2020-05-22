import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';

import ListItem from './listitem/index';
import { getList } from '../../redux/actions';

import './style.css'
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.getList(this.props.user.identity)
  }
 
  render() {
    let { user, list } = this.props
    if (list.length) {
      list.forEach(element => {
        if (element.category && typeof element.category === 'string') {
          element.category = element.category.split(',')
        }
      });
    }
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />,
        ]}>{user.position}</NavBar>
        {
          !list.length ? <div>暂无更多职位！</div> : null
        }
        <div>
          {
            list.map((item, key) => (<ListItem key={key} item={item} ></ListItem>))
          }
        </div>
        <div style={{ height: '80px', background: '#e0e0e0' }}></div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user, list: state.list }),
  { getList }
)(Client)