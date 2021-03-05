import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
Vue.prototype.$http=axios;   
axios.defaults.headers={'Content-Type': 'text/html;charset=gb2312;'}  
Vue.use(elementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
