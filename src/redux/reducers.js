import { combineReducers } from 'redux';
import Cookie from 'js-cookie';

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    LOGIN,
    USERINFO,
    RESETUSER,
    GETLIST,
    PUNLISH_SUCCESS,
    PUNLISH_ERROR,
    GETLISTFAILE
} from './action-types';

const initUser = {
    username: '',
    user_id: '',
    msg: '',
    redirect: '',
    identity: '',
    isbeauty: ''
}

function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            Cookie.set('user', { user_id: action.data.user_id })
            return { ...action.data, redirect: '/' }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case LOGIN:
            Cookie.set('user', { user_id: action.data.user_id })
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

function list(state = [], action) {
    switch (action.type) {
        case GETLIST:
            return action.data
        case GETLISTFAILE:
            return { ...state, msg: action.data }
        default:
            return state
    }
}

function pubStatus(state = { isPublished: false, msg: '' }, action) {
    switch (action.type) {
        case PUNLISH_SUCCESS:
            return action.data
        case PUNLISH_ERROR:
            if (action.data === 'init') {
                return { isPublished: false, msg: '' }
            }
            return { ...state, msg: action.data }
        default:
            return state
    }
}

export default combineReducers({
    user,
    list,
    pubStatus
})