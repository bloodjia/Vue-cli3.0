import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from './pages/home.vue'
import Vcrud from './pages/Vcrud.vue'
 
Vue.use(Router)
 
var Routes = [
	{ path: '/', redirect: home },  
	{ path: '/pages/home', name: 'home', component: home },
  { path: '/pages/Vcrud', name: 'Vcrud', component: Vcrud },
  ]

export default new Router({ 
	mode:'history',
  routes: Routes
})