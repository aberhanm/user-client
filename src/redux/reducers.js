import { combineReducers } from 'redux';
import Cookie from 'js-cookie';

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    LOGIN,
    USERINFO
} from './action-types';

const initUser = {
    username: '',
    user_id: '',
    msg: '',
    redirect: '',
    identity: '',
    isbeauty: 0
}

function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...action.data, redirect: '/login' }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case LOGIN:
            let { user_id, identity, username, isbeauty } = action.data
            console.log(identity)
            Cookie.set('user', { user_id, identity, username, })
            if (isbeauty) {
                return { ...action.data, redirect: '/main' }
            } else {
                return { ...action.data, redirect: '/companyinfo' }
            }

        default:
            return state
    }
}
function info(state = { redirect: '' }, action) {
    switch (action.type) {
        case USERINFO:
            return { ...action.info, redirect: '/main' }
        default:
            return state
    }
}

export default combineReducers({
    user,
    info,
})