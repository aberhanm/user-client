import axios from 'axios';

axios.create({
    baseURL: `http://localhost:8080`
})

axios.interceptors.request.use(
    config => {
        console.log(config)
    },
    err => {
        console.log(err)
        return Promise.reject(err);
    }
)

axios.interceptors.response.use(

    response => {
        console.log(response)
        return response
    },
    errors => {
        if (errors.response) {
            switch (errors.response.status) {
                case 200:
                    console.log(200)
                    break;
                case 401:
                    console.log('401')
                    break;
                case 404:
                    console.log('404')
                    break;
                case 500:
                    console.log('500')
                    break;
                default:
                    return

            }
        }
        return Promise.reject(error.response.data.msg) // 返回接口返回的错误信息
    },

)