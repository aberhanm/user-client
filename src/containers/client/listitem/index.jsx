import React from 'react';
import { WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import '../style.css'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { item } = this.props
        return (
            <div className='item' onClick={() => this.props.history.push(`/privateChat/${item.recruiter_id}?title=${item.recruiter}&d=0`)}>
                <WingBlank>
                    <div className='title'>
                        <h3 className='h3'>{item.position}</h3>
                        <div className='salary'>{item.salary}k</div>
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
        );
    }
}
export default withRouter(ListItem)

