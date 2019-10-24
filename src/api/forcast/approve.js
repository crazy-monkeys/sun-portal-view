import { request, serverUrl } from "../../axios/request";
import { stringify } from 'qs'

//列表
export const getList = data => {
    return request('get', `${serverUrl}/forecast/approval/data/query`, data).then(result => result)
}
export const rejectList = data => {
    return request('get', `${serverUrl}/forecast/agency/data/reject`, data).then(result => result)
}

export const submit = data => {
    return request('get', `${serverUrl}/forecast/agency/data/submit?${stringify(data)}`).then(result => result)
}

export const pass = data => {
    return request('get', `${serverUrl}/forecast/approval/data/pass?${stringify(data)}`).then(result => result)
}

export const reject = data => {
    return request('get', `${serverUrl}/forecast/approval/data/reject?${stringify(data)}`).then(result => result)
}
export const mod = data => {
    return request('post', `${serverUrl}/forecast/approval/single/update`, data).then(result => result)
}