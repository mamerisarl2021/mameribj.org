/* eslint-disable no-param-reassign */
import axios from 'axios'
import store from '../store'

const API_URL = 'https://mameribj.org/api'
// const API_URL = 'http://mameribj.test/api'

const axiosClient = axios.create({
  baseURL: API_URL,
})
axiosClient.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = `Bearer ${store.state.token}`
  }
  config.headers.withCredentials = true

  return config
})

export default axiosClient
