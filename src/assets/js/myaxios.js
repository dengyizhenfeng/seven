import axios from 'axios'
// 创建一个 插件对象
var myaxios = {}
// 添加一个方法
myaxios.install = function (Vue) {
  // 设置统一路径
  axios.defaults.baseURL = 'http://192.168.1.142:8080'
  // 将axios作为实例方法添加到 vue 中
  // 直接通过this.$http来使用axios
  Vue.prototype.$http = axios
}

// 导出
export default myaxios
