// import request from "@/axios/http";
// import { stringify } from 'qs'

// export function productInfo(query) {
//     return request({
//         url: `/product/info/${query.serialNumber}`,
//         method: 'get'
//             // data: query
//     })
// }

import { request, serverUrl } from "@/axios/request";
import { stringify } from 'qs'

//获取 product model
export const productInfo = data => {
    return request('get', `${serverUrl}/product/info/${data.serialNumber}`).then(result => result)
}


//claim submit
export const submitClaim = data => {
        return request('post', `${serverUrl}/service/service/call`, data).then(result => result)
    }
    //reg submit
export const submitReg = data => {
    return request('post', `${serverUrl}/service/mt/regist`, data).then(result => result)
}


export const submitSingle = data => {
        return request('post', `${serverUrl}/service/ei/register`, data).then(result => result)
    }
    //获取 amount
export const getAmount = data => {
    return request('post', `${serverUrl}/product/info/price`, data).then(result => result)
}


export const priceTab = () => {
    return request('get', `${serverUrl}/price/query`).then(result => result)
}