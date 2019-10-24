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
    return request('get', `/product/info/${data.serialNumber}`).then(result => result)
}


//reg submit
export const submit = data => {
    return request('post', `/service/call`, data).then(result => result)
}