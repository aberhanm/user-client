import React from 'react';
import { WingBlank } from 'antd-mobile';
import '../style.css'
export default function ListItem(props) {
    let { item } = props
    return (
        <div className='item'>
            <WingBlank>
                <div className='title'>
                    <h3 className='h3'>{item.position}</h3>
                    <div className='salary'>11-18k</div>
                </div>
                <div className='category'>
                    {
                        item.category.map((cate, key) => <span key={key}>{cate}</span>)
                    }
                </div>
                <div className='listinfo'>
                    <span>{item.company}</span>
                    <span>{item.education}</span>
                    <span>{item.experience}年</span>
                </div>
                <div className='userinfo'>
                    <span>{item.recruiter}-{item.recruiterPosition}</span>
                </div>

            </WingBlank>
        </div>


    )
}