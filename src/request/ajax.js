import axios from 'axios'
import { requestFailFunc, requestSuccessFunc, responseFailFunc, responseSuccessFunc } from "./interceptors";
import { AXIOS_DEFAULT_CONFIG } from "../config";
const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

const parseCookie = cookies => {
    if (!cookies) return;
    let cookie = ''
    Object.keys(cookies).forEach(item => {
        cookie+= item + '=' + cookies[item] + '; '
    })
    return cookie
}

export default function ajax (url) {
    let _ = {}
    _.post = function (params) {
        return _axios(url, {
            ...params,
            method: 'POST'
        })
    }
    _.get = function (params) {
        return _axios(url, {
            ...params,
            method: 'GET'
        })
    }
    return _
}

function _axios(url, params) {
    let ctx = {}
    ctx.url = url
    const method = ctx.method || 'GET'
    const post = method.toUpperCase() === 'POST' && ctx.data
    const get = method.toUpperCase() === 'GET' && ctx.data
    const cookie = parseCookie(params.cookies)
    let headers = params.headers || AXIOS_DEFAULT_CONFIG.header
    headers = cookie ? {
        cookie,
        ...headers
    } : headers
    console.log(headers)
    console.log(AXIOS_DEFAULT_CONFIG)
    return axiosInstance({
        url: ctx.url,
        method: method,
        params: get,
        data: post,
        headers
    })
}
export {
    axiosInstance
}