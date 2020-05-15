import { combineReducers } from 'redux';
import Cookie from 'js-cookie';

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    LOGIN,
    USERINFO,
    RESETUSER
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
            let { user_id, identity, username } = action.data
            Cookie.set('user', { user_id, identity, username, })
            return { ...action.data, redirect: '/' }
        case USERINFO:
            ////kkjugypf
            return action.data
        case RESETUSER:
            return initUser
        default:
            return state
    }
}
export default combineReducers({
    user
})