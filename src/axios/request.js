// import 'babel-polyfill';
require('es6-promise').polyfill();
import axios from 'axios'
import { Message, Loading, MessageBox } from 'element-ui';

// 配置API接口地址
// used environment variable
export const serverUrl = process.env.API_ROOT; // 本地
// axios.defaults.withCredentials = true;


let loading
let pending = []
let loadingArr = []
let CancelToken = axios.CancelToken

let cancelPending = (config) => {
    pending.forEach((item, index) => {
        if (config) {
            if (item.UrlPath === config.url) {
                item.Cancel() // 取消请求
                pending.splice(index, 1) // 移除当前请求记录
            };
        } else {
            item.Cancel() // 取消请求
            pending.splice(index, 1) // 移除当前请求记录
        }
    })
}


let startLoading = () => { // 使用Element loading-start 方法
    loading = Loading.service({
        target: '.jobBox',
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0)'
    })
    loadingArr.push(loading)
}
let endLoading = () => { // 使用Element loading-close 方法
    // loading.close()
    loadingArr.forEach(item => item.close())
}

// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

axios.interceptors.request.use(
    config => {
        cancelPending(config)
        config.cancelToken = new CancelToken(res => {
                pending.push({ 'UrlPath': config.url, 'Cancel': res })
            })
            // startLoading()
        return config
    },
    (error, response) => {
        console.log(error)
        console.log(response)
    }
)

axios.interceptors.response.use(
    response => {
        cancelPending(response.config)
            // if (response.headers.authorization) {
            //     // console.log(sessionStorage.getItem('data'))
            //     sessionStorage.setItem('data', response.headers.authorization)
            // }
        return response
    }, (error) => {
        // console.log(error.response.status)
        // console.log(error.response.statusText)
        Message.error(error.response.statusText)
        return Promise.reject(error)
    }
)

// 参数过滤函数
export const request = (method, url, data = {}, header = {}) => {

    const dataType = method.toLocaleLowerCase() === 'get' ? 'params' : 'data'
    let options = {
        url,
        method,
        [dataType]: data,
        headers: {
            'Authorization': sessionStorage.getItem('data'),
            // 'Content-Type': 'application/json;charset=UTF-8',
            ...header,
        }
    }
    return axios(options)
        .then(result => {
            if (result.data && result.data.code === 1) {
                // console.log(result)
                return result
            }
            Message.error(result.data.msg)
        })
        .catch(err => {
            // console.log(err)
        })
}