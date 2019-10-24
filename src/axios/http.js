/**axios封装
 * 请求拦截、响应拦截、错误统一处理
 * Auther: 杨磊
 * Create date: 2018/10/10
 */

import Axios from 'axios'
import { Message, Loading, MessageBox } from 'element-ui';
let axios = Axios.create({
    baseURL: process.env.API_ROOT,
    timeout: 1000 * 12,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

/** 
 * 提示函数 
 */
const tip = msg => {
    Message.error(msg)
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    switch (status) {
        case 403:
            tip('登录过期，请重新登录');
            // 清除token
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            // setTimeout(() => {
            //     toLogin();
            // }, 1000);
            break;
        case 404:
            tip('网络请求不存在');
            break;
        default:
            tip(other);
    }
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么(后期在这里加上token)
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);  
        // Vue.$indicator.open();
        console.log(1111111)
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    // 请求成功
    (res) => {
        // Vue.$indicator.open();
        if (res.status === 200) {
            if (res.data.code !== '0' && res.data.msg) {
                tip(res.data.msg);
            }
            Promise.resolve(res)
        } else {
            Promise.reject(res)
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在200的范围 
            errorHandle(response.status, response.data.msg);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
        }
    }
)

export default axios;