import React, { Component } from 'react';
import {Toast} from 'antd-mobile';

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillUpdate(){
    Toast.hide()
  }

  render() {
    return (
     <div>client</div>
    );
  }
}
