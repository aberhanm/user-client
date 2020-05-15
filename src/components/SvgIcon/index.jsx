import React from 'react';
import './index.css'
//批量require数据
const req = require.context('../../assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)


export default function SvgIcon(props) {
    let name = `#icon-` + props.name
    return (
        <svg className="svgClass" aria-hidden="true">
            <use xlinkHref={name} />
        </svg>
    )
}