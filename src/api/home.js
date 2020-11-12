import { baseUrl, parseParams } from "./config"

// 获取验证码
export function getAuthCodeApi(params) {
    let url = baseUrl+"captcha/sent"+parseParams(params);
    // console.log(url,fetch(url,{method:'GET'}))
    return fetch(url,{method:'GET'})
}

// 验证验证码
export function verifyCodeApi(params) {
    let url = baseUrl+'captcha/verify'+parseParams(params)
    return fetch(url,{method:'GET'})
}

export function passwordLoginApi(params) {
    let url = baseUrl+'login/cellphone'+parseParams(params)
    return fetch(url,{method:'GET'})
}

export function getUserInfo(params) {
    let url = baseUrl+'user/detail'+parseParams(params)
    return fetch(url,{method:'GET'})
} 