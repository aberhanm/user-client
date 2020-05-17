import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Button, WingBlank, WhiteSpace, Modal, Toast } from 'antd-mobile';
import Cookie from 'js-cookie';

import { reset } from '../../redux/actions';
import './style.css'


const alert = Modal.alert;


class MY extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    Toast.hide()
  }
  singOut = () => {
    Toast.loading('loading...')
    setTimeout(() => {
      this.props.reset()
      Toast.hide()
    }, 1000)

    Cookie.remove('user')
  }
  publish = () => {
    this.props.history.push('/publish')
  }

  render() {
    let { user } = this.props
    return (
      <div>
        <div className='main-back'>
          <div className='information'>
            <img src={require(`../../assets/images/headshot/${user.head}.jpg`)} className='headshot' alt="" />
            <span className='name'>{user.nickname}<span className='po'>{
              user.identity === 1 ? user.position : user.username}</span></span>
          </div>
          {
            user.identity === 1 ? <div className='publish' onClick={this.publish}>发布职位</div> : null
          }

        </div>
        <List renderHeader={() => '个人资料'} className="my-list">
          {user.gratuated ? <List.Item extra={user.gratuated}>毕业院校</List.Item> : null}
          {user.exprience ? <List.Item extra={user.exprience + '年'}>工作经历</List.Item> : null}
          {user.company ? <List.Item extra={user.company}>公司名称</List.Item> : null}
          {user.address ? <List.Item extra={user.company}>公司地址</List.Item> : null}

          <List.Item extra={user.username}>联系电话</List.Item>
          {user.birth ? <List.Item extra={user.birth}>{user.identity === 1 ? '注册时间' : '出生日期'}</List.Item> : null}

          <List.Item multipleLine>个人介绍
              <p className='desc'>{user.desc}</p>
          </List.Item>
        </List>
        <WhiteSpace /><WhiteSpace /><WhiteSpace /><WhiteSpace />
        <WingBlank> <Button type='warning' onClick={() => alert('操作', '确认退出？', [
          { text: '取消', onPress: () => console.log('取消') },
          { text: '确认', onPress: () => this.singOut() }])}>退出登录</Button></WingBlank>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { reset }
)(MY)
