'use strict'

import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'http://101.132.35.81:3141'
  : 'http://localhost:3141'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求过滤器，主要是用来加token的
axios.interceptors.request.use(
  function (config) {
    let token = store.state.token
    config.headers.Authorization = `bearer ${token}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应过滤器，主要是用来集中捕获错误
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
