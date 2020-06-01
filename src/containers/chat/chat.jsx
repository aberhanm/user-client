import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WingBlank, NavBar, TextareaItem, Icon } from 'antd-mobile';
import { sendMessage } from '../../redux/actions';
import { getSearchObj } from '../../utils/common';
import '../../assets/style.css'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }

    sendMsg = () => {

        let from = this.props.user.user_id
        let to = this.props.match.params.id
        let { msg } = this.state
        if (!msg.trim()) {
            return false
        } else {
            this.props.sendMessage({ from, to, msg })
        }
        this.setState({ msg: '' })
    }

    render() {
        let { user } = this.props
        let { users, msgs } = this.props.chat
        let parmas = getSearchObj(this.props.location.search)
        console.log(this.props)
        let from = user.id
        let to = this.props.match.params.id
        let c_id = [from, to].sort().join('_')
        let lists = msgs.filter(item => item.chat_id === c_id)
        console.log(lists)
        let from_head = users[from] ? require(`../../assets/images/headshot/${users[from].head}.jpg`) : null
        let to_head = users[to] ? require(`../../assets/images/headshot/${users[to].head}.jpg`) : null
        return (
            <div>
                <NavBar className='chat-nav'
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}>{parmas.title}</NavBar>
                <WingBlank>
                    <div className='chat-msg-list' ref={list => this.list = list} >
                        {
                            lists.map(item => {
                                //我发给对方
                                if (parseInt(item.from) === from) {
                                    return (
                                        <div className='chat-to' key={item.id}>
                                            <p>{item.content}</p>
                                            <img src={from_head} alt="" className='chathead' />
                                        </div>
                                    )
                                } else {
                                    //对方发给我
                                    return (
                                        <div className='chat-from' key={item.id}>
                                            <img src={to_head} alt="" className='chathead' />
                                            <p>{item.content}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </WingBlank>
                <div className='chat-input'>
                    <div className='chat-text'>
                        <TextareaItem value={this.state.msg} placeholder='请输入内容' autoHeight onChange={val => this.setState({ msg: val })}></TextareaItem>
                    </div>
                    <span type='primary' className='send' onClick={this.sendMsg}>发送</span>
                </div>
            </div >
        );
    }
}
export default connect(
    state => ({ user: state.user, chat: state.chat }),
    { sendMessage }
)(Chat)