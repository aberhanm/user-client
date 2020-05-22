import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WingBlank, NavBar, TextareaItem,Icon } from 'antd-mobile';
import {sendMessage} from '../../redux/actions';
import '../../assets/style.css'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }

    sendMsg = () => {
        
        let from=this.props.user.user_id
        let to=this.props.match.params.id
        let {msg}=this.state
        if(!msg.trim()){
            return false
        }else{
            this.props.sendMessage({from,to,msg})
        }
        this.setState({msg:''})
    }

    render() {
        return (
            <div>
                <NavBar className='chat-nav' 
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.replace('/')}>聊天</NavBar>
                <WingBlank>
                    <div className='chat-msg-list'>
                        <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                        </div>
                        <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>过热给，我过热过热红日好感额</p>
                        </div>
                        <div className='chat-to'>
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div>
                        <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div>
                        <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div> <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div> <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div> <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div> <div className='chat-to'>
                            <p>化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                        </div>  <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                        </div>  <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                        </div>  <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                        </div>  <div className='chat-from'>
                            <img src={require('../../assets/images/headshot/头像1.jpg')} alt="" className='chathead' />
                            <p>和各位好给给各五个饿哦饿哦规划换个后果 给公共号人人京公网古人过热欧冠怀柔韩国如恶化ue过热给，我过热过热红日好感额【我国额公告鞋刚刚uege胡工会任务</p>
                        </div>
                    </div>
                </WingBlank>
                <div className='chat-input'>
                    <div className='chat-text'>
                        <TextareaItem value={this.state.msg} placeholder='请输入内容' autoHeight onChange={val => this.setState({ msg: val })}></TextareaItem>
                    </div>

                    <span type='primary' className='send' onClick={this.sendMsg}>发送</span>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({user:state.user}),
    {sendMessage}
)(Chat)