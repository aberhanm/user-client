import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, List } from 'antd-mobile';
import './style.css'

export default class HeadSelector extends Component {
    static propTypes = {
        headselect: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            icon: null
        }
        this.headList = []
        for (let i = 0; i < 9; i++) {
            this.headList.push({
                text: '头像' + (i + 1),
                icon: require(`../../assets/images/headshot/头像${i + 1}.jpg`)
            })
        }
    }
    handelchange = ({text,icon}) => {
        this.setState({icon})
        this.props.headselect(text)
    }

    render() {
     
        let {icon}=this.state
        let listhead =icon? '已选择头像':'请选择头像'
        return (
            <List renderHeader={() => (
                <p className='head'>{listhead}
                {
                    icon? <img src={icon} className='icon' alt=''></img>:null
                }</p>
            )} className="my-list">
                <Grid data={this.headList} columnNum={5} activeStyle={false} onClick={this.handelchange} />
            </List>
        );
    }
}
