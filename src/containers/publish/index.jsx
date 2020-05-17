import React, { Component } from 'react';
import { publish } from '../../redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { List, InputItem, TextareaItem, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: '',
            intro: "",
            category: '',
            experience: '',
            salary: '',
            education: '',
            address: '',
        };
    }
    handelChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    submit = () => {
        let obj = this.state
        let { user, publish } = this.props
        let valid = false
        for (let i in obj) {
            if (obj[i]) {
                valid = true
            } else {
                valid = false
            }
        }
        if (valid) {
            Toast.loading('publishing ...')
            obj.org_id = user.org_id
            obj.company = user.company
            obj.recruiter = user.nickname
            obj.recruiterPosition = user.position
            publish(obj)
        } else {
            Toast.info('please check your enter')
        }
    }
    back=()=>{
        this.props.history.replace('/my')
    }
    render() {
        console.log(this.props)
        let { pubStatus } = this.props
        if (pubStatus.ispublished) {
            return <Redirect to='/my'></Redirect>
        }
        return (
            <List renderHeader={() => '发布职位'}>
                <InputItem
                    clear
                    onChange={val => this.handelChange('position', val)}
                    placeholder="请输入职位名称"
                >职位名称</InputItem>
                <TextareaItem
                    title="职位介绍"
                    onChange={val => this.handelChange('intro', val)}
                    placeholder="请输入职位介绍"
                    autoHeight
                />
                <TextareaItem
                    title="分类"
                    autoHeight
                    onChange={val => this.handelChange('category', val)}
                    placeholder='vue,xxx,xx逗号分割'
                />
                <InputItem
                    clear
                    placeholder="请输入工作年限"
                    extra='年'
                    onChange={val => this.handelChange('experience', val)}
                >工作年限</InputItem>
                <InputItem
                    clear
                    onChange={val => this.handelChange('salary', val)}
                    placeholder="请输入薪资范围"
                    extra='k'
                >薪资范围</InputItem>
                <InputItem
                    clear
                    onChange={val => this.handelChange('education', val)}
                    placeholder="请输入学历要求"
                >学历要求</InputItem>
                <InputItem
                    clear
                    onChange={val => this.handelChange('address', val)}
                    placeholder="请输入工作地址"
                >工作地址</InputItem>
                <WhiteSpace></WhiteSpace>  <WhiteSpace></WhiteSpace>  <WhiteSpace></WhiteSpace>  <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type='primary' onClick={this.submit}>发布职位</Button>
                    <WhiteSpace></WhiteSpace> <WhiteSpace></WhiteSpace>
                    <Button onClick={this.back}>返回</Button>
                </WingBlank>
            </List>
        );
    }
}

export default connect(
    state => ({ user: state.user, pubStatus: state.pubStatus }),
    { publish }
)(Publish)