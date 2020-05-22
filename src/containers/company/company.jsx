import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { getList } from '../../redux/actions'
import ListItem from './ListItem';
class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.getList(this.props.user.identity)
  }
  searchPosition = () => {
    console.log('search')
  }
  render() {
    console.log(this.props)
    let { user, list } = this.props
    return (
      <div>
        <NavBar type='primary' rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.searchPosition} />
        ]}>{user.company}</NavBar>
        {
          !list.length ? <div>暂无更多职位！</div> : null
        }
        <div>
          {
            list.map((item, key) => (<ListItem key={key} item={item}></ListItem>))
          }
        </div>
      </div>

    );
  }
}

export default connect(
  state => ({ user: state.user, list: state.list }),
  { getList }
)(Company)