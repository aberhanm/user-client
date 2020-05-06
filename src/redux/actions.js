import ajax from '../api/http';

import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types';


//授权成功同步ACTION
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
export const register = (user) => {
    let { username, password, identity } = user
    console.dir('dispatch')
    return dispatch => {
        ajax('POST', '/register', {username,password,identity}).then(res => {
            let result = res.data
            if (result.code == 1) {
                dispatch(authSuccess(result.data))
            } else {
                dispatch(errorMsg(result.msg))
            }
        })


    }
}

export const login = (user) => {
    return async dispatch => {
        let response = await ajax('POST', '/login', user)
        let result = response.data
        if (result.code == 1) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(authSuccess(result.data))
        }

    }
}