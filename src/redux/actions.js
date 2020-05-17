import ajax from '../api/http';

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


//授权成功同步ACTION
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const loginSuccess = (user) => ({ type: LOGIN, data: user })
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
const userdetail = (info) => ({ type: USERINFO, data: info })
const resetUser = () => ({ type: RESETUSER })
const getListinfo = (list) => ({ type: GETLIST, data: list })
const getinfofail = (msg) => ({ type: GETLISTFAILE, data: msg })
const pubSuccess = (info) => ({ type: PUNLISH_SUCCESS, data: info })
const pubError = (msg) => ({ type: PUNLISH_ERROR, data: msg })
export const register = (user) => {
    let { username, password, identity } = user
    return dispatch => {
        ajax('POST', '/register', { username, password, identity }).then(result => {
            if (result.data.code === 1) {
                dispatch(authSuccess(result.data))
            } else {
                dispatch(errorMsg(result.data.msg))
            }
        })
    }
}
export const login = (user) => {
    return dispatch => {
        ajax('POST', '/login', user).then((result) => {
            if (result.data.code === 1) {
                dispatch(loginSuccess(result.data))
            } else {
                dispatch(errorMsg(result.data.msg))
            }
        })
    }
}
export const reset = () => {
    return dispatch => {
        dispatch(resetUser())
    }
}
export const userinfo = (info) => {
    return dispatch => {
        ajax('POST', '/users/userDetail', info).then(result => {
            console.log(result)
            if (result.data.code === 1) {
                dispatch(userdetail(result.data.data))
            } else {
                dispatch(resetUser())
            }
        })

    }
}

export const getuser = () => {
    return dispatch => {
        ajax('GET', '/users/getuser').then(result => {
            if (result.data.code === 1) {
                dispatch(userdetail(result.data.data))
            } else {
                dispatch(errorMsg(result.data.msg))
            }
        })
    }
}
export const publish = (data) => {
    return dispatch => {
        ajax('POST', '/users/publishPosition', data).then(result => {
            if (result.data.code === 1) {
                dispatch(pubSuccess(result.data))
            } else {
                dispatch(pubError(result.data.msg))
            }
        })
    }
}

export const getList = (identity) => {
    return dispatch => {
        ajax('GET', '/users/getHomelist').then(result => {
            if (result.data.code == 1) {
                dispatch(getListinfo(result.data.data))
            } else {
                dispatch(getinfofail(result.data.msg))
            }
        })
    }
}