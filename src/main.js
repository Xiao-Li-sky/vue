//入口文件
import Vue from 'vue'

//导入路由模块
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的路由模块
import router from './router.js'

//导入时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern)
})

//导入vue.resource
import VueResource from 'vue-resource'
//安装vue.resource
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = ''
//设置全局post的表单数据为JSON格式
Vue.http.options.emulateJSON = true

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入mint-UI的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)

import app from './app.vue'

var vm = new Vue({
	el: '#app',
	render: c=> c(app),
	router

})

//console.log('ok')