import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import MyAxios from '@/assets/js/myaxios.js'
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import moment from 'moment'
import {deep} from '@/assets/js/utils.js'

// 全局注册eventBus
window.eventBus = new Vue()
Vue.use(vueEventCalendar, {locale: 'en'}) //可以设置语言，支持中文和英文

Vue.prototype.$moment = moment
Vue.use(ElementUI)
Vue.use(MyAxios)
// this.$http.defaults.withCredentials = true;

// 关闭生产环境的警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
