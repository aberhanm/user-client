import React, { Component } from 'react';

import './info.css'
export default class Info extends Component {
    state = {
        info: ''
    }
    componentWillMount() {
        this.setState({ info: this.props.info })
        setTimeout(() => {
            this.setState({ info: '' })
        }, 2500);
    }
    render() {
        let { info } = this.state
        return (
            <div>
                {
                    info ? <div className='info'>{info}</div> : null
                }
            </div>
        )
    }
}

