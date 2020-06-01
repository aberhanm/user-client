import React from 'react';
import '../style.css';
import { WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class ListItem extends React.Component {
    render() {
        let { item } = this.props
        console.log(item)
        return (
            <div className='item' onClick={() => this.props.history.push(`/privateChat/${item.id}?title=${item.nickname}`)}>
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
}
export default withRouter(ListItem)
