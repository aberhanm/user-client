import React, { Component } from 'react';

import { Grid,List } from 'antd-mobile';
export default class HeadSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: null
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
        let listhead='请选择头像'
        return (
            <List renderHeader={() => listhead} className="my-list">
                <Grid data={this.headList} columnNum={3} activeStyle={false}  />
            </List>
        );
    }
}
