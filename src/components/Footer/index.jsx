import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import '../../assets/style.css';
import SvgIcon from '../../components/SvgIcon';
import { connect } from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { navlist } = this.props
        navlist = navlist.filter(item => !item.hide)
        let { pathname } = this.props.location
        return (

            <TabBar tintColor='#000'>
                {
                    navlist.map(item => <TabBar.Item
                        key={item.path}
                        title={item.text}
                        selected={pathname === item.path}
                        icon={<SvgIcon name={item.icon}></SvgIcon>}
                        selectedIcon={<SvgIcon name={item.selected}></SvgIcon>}
                        onPress={() => this.props.history.replace(item.path)}
                    >
                    </TabBar.Item>)
                }

            </TabBar>
        );
    }
}

export default connect(
    state => ({ user: state.user })
)(withRouter(Footer))