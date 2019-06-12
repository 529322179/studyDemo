import Vue from "vue"
import axios from 'axios'

Vue.prototype.$axios=axios
// window.axios = axios
// ajax request拦截
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
// ajax response拦截
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  });

export default axios
