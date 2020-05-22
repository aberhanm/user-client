import React from 'react';
import '../style.css';
import { WingBlank } from 'antd-mobile';
export default function ListItem(props) {
    let { item } = props
    return (
        <div className='item'>
            <WingBlank>
                <div>
                    <div className='title'>
                        <h3 className='h3'>
                            <img src={require(`../../../assets/images/headshot/${item.head}.jpg`)} alt="" />
                            {item.nickname}</h3>
                        <div className='salary'>{item.salary}k</div>
                    </div>
                    <div className='category'>
                        <span>{item.gratuated}</span>
                        <span>{item.position}</span>
                        <span>{item.exprience}年</span>
                    </div>
                    <div className='self-desc'>
                        {item.desc}
                    </div>
                </div>
            </WingBlank>

        </div>
    )
}
