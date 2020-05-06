import React from 'react';

import './logo.css'
import logo from '../../assets/images/logo512.png';

export default function Logo() {
    return (
        <div className='logoContainer'>
            <img src={logo} alt="" className='logo-img'/>
        </div>
    )
}