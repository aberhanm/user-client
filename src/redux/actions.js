import ajax from '../api/http';

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    LOGIN
} from './action-types';


//授权成功同步ACTION
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const loginSuccess = (user) => ({ type: LOGIN, data: user })
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
export const register = (user) => {
    let { username, password, identity } = user
    return dispatch => {
        ajax('POST', '/register', { username, password, identity }).then(res => {
            let result = res.data
            if (result.code === 1) {
                dispatch(authSuccess(result.data))
            } else {
                dispatch(errorMsg(result.msg))
            }
        })
    }
}
export const login = (user) => {
    return dispatch => {
        ajax('POST', '/login', user).then((result) => {
            console.log(result)
            if (result.data.code == 1) {
                dispatch(loginSuccess(result.data))
            } else {
                dispatch(errorMsg(result.msg))
            }
        })
    }
}