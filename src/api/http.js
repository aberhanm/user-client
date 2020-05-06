import axios from 'axios';


export default function ajax(method, url, parmas) {
    console.log(method)
    return axios({
        method,
        url,
        data: method === 'POST' || method === 'PUT' ? parmas : null,
        params: method === 'GET' || method === 'DELETE' ? parmas : null,
    })
}