import axios from 'axios'
import { Message, Loading } from 'element-ui'
// 初始地址
let ConfigBaseURL = 'http://www.baudi.com'
let loadingInstance = null

//axios 对象
const instance = axios.create({
  baseURL: ConfigBaseURL,
  timeout: 7000
  //     headers:{}
})

//request拦截器
instance.interceptors.request.use(
  config => {
    //loading
    // store.dispatch('openLoading', true)
    loadingInstance = Loading.service({
      lock: true,
      text: 'loading...'
    })
    // 设置 token header
    // getToken() && (config.headers['token'] = token)

    // 这个是微信登录中需要用到 header
    config.headers['deviceType'] = 'school_admin_web'
    return config
  },
  error => {
    const { response } = error
    // 这里可以根据自己的业务做一些操作，比如说全局提示
    Promise.reject(error)
  }
)
// respone拦截器
instance.interceptors.response.use(
  response => {
    // !!! 关闭 loading !!!
    // store.dispatch('SetLoading', false)
    loadingInstance.close()
    // const res = response.data
    // if (res.code !== 200) {
    //     // 这里可以做一些全局性的错误提示，这样就没必要在每个请求都再写一个else,再重复代码提示
    //     alert(res.message)
    //     // 不是真的alert啊
    // }
    return response.data
  },
  error => {
    // !!! 关闭 loading !!!
    // store.dispatch('closeLoading', true)
    Message({
      message: '网络错误',
      type: 'error',
      duration: 3 * 1000
    })
    loadingInstance.close()

    // const {response} = error
    // 这里可以根据自己的业务做一些操作，比如说强制登出
    return Promise.reject(error)
  }
)
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
export const post = (url, data, congfig = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...congfig
    })
      .then(response => resolve(response))
      .then(error => reject(error))
  })
}
