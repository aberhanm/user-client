import React, { Component } from 'react';
import { NavBar, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  unique = (arr) => {
    const res = new Map();
    return arr.filter((arr) => !res.has(arr.chat_id) && res.set(arr.chat_id, 1));
  }
  gochat = (item) => {

  }
  render() {
    let { user } = this.props
    let { users, msgs } = this.props.chat
    console.log(users)
    console.log(msgs)
    let obj = []
    msgs.forEach((ele, key) => {
      if (ele.chat_id.includes(user.id)) {
        obj.push(ele)
      }
    });
    let myMsgs = this.unique(obj)
    console.log(myMsgs)
    return (
      <div>
        <NavBar type='primary'>消息</NavBar>
        <WingBlank>
          <div className='list'>
            {
              myMsgs.map(item => (
                <div className='list-chat' key={item.id} onClick={() => this.props.history.push(`/privateChat/${item.to}?title=${item.to == user.id ? users[item.from].nickname : users[item.to].nickname}`)}>
                  {
                    item.to == user.id ? <img src={require(`../../assets/images/headshot/${users[item.from].head}.jpg`)} alt="" /> :
                      <img src={require(`../../assets/images/headshot/${users[item.to].head}.jpg`)} alt="" />
                  }
                  <div className='chat-detail'>
                    {
                      item.to == user.id ? <p className='chat-title'>{users[item.from].nickname}</p> : <p className='chat-title'>{users[item.to].nickname}</p>
                    }
                    <p className='chat-content'>{item.content}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </WingBlank>
      </div>
    );
  }
}


export default connect(
  state => ({ user: state.user, chat: state.chat }),
  {}
)(Message)