import axios from 'axios'
import { Message, Loading } from 'element-ui'
// 初始地址
let loadingInstance = null

export default function ({ $axios, redirect }) {
  // 基本配置
  $axios.defaults.timeout = 10000
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  $axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
  $axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded'

  $axios.onRequest(config => {
    Message.success("aaaa")
  })

  $axios.onResponse(response => {
    const res = response.data
  })

  $axios.onError(error => {
    console.log("error --->" +error)
    const code = parseInt(error.response && error.response.status)
  })

  $axios.onRequestError(err =>{
    console.log("onRequestError --->" +err)
  })
  $axios.onResponseError(err =>{
    console.log("onResponseError --->" +err)
  })
}



// 封装get请求
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

// 封装post请求
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    })
      .then(response => resolve(response))
      .then(error => reject(error))
  })
}
