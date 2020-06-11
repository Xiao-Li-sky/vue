//入口文件
import Vue from 'vue'

//导入路由模块
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的路由模块
import router from './router.js'

//导入vue.resource
import VueResource from 'vue-resource'
//安装vue.resource
Vue.use(VueResource)

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入mint-UI的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import app from './app.vue'

var vm = new Vue({
	el: '#app',
	render: c=> c(app),
	router

})

//console.log('ok')