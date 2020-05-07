import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, NavBar, List, InputItem, TextareaItem, Grid, WingBlank } from 'antd-mobile';

import './style.css'
class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listhead: '请选择头像'
        }
        this.headList = []
        for (let i = 0; i < 2; i++) {
            this.headList.push({
                text: '头像' + (i + 1),
                icon: require(`../../assets/images/headshot/头像${i + 1}.jpg`)
            })
        }
    }

    render() {
        let { listhead } = this.state
        return (
            <div>
                <List renderHeader={() => listhead} className="my-list">
                    <Grid data={this.headList} columnNum={3} activeStyle={false} />
                    <InputItem>求职岗位:</InputItem>
                    <TextareaItem
                        title="个人介绍:"
                        autoHeight
                        labelNumber={5}
                    />
                    <div className='save'>
                        <WingBlank>
                            <Button type='primary'>保存</Button>
                        </WingBlank>
                    </div>


                </List>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(UserInfo)