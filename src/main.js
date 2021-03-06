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


//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//引入mui
 // import  mui from "./lib/mui/js/mui.min.js"
 // Vue.prototype.mui = mui

 //导入vue-lazyload
 import VueLazyload from 'vue-lazyload'
 Vue.use(VueLazyload)

//安装缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入vue.resource
import VueResource from 'vue-resource'
//安装vue.resource
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = ''
//设置全局post的表单数据为JSON格式
Vue.http.options.emulateJSON = true

//按需导入mint-UI的组件
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入vuex
import Vuex from 'vuex'
//注册vuex
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car' || '[]'))
//建立数据仓储对象
var store = new Vuex.Store({
	state:{
		shoppingCar:[]
	},
	mutations:{
		addToShoppingCar(state, ballinfo) {
			var flag = false
            state.shoppingCar.some(item => {
            	if(item.id == ballinfo.id) {
            		item.count += parseInt(ballinfo.count)
            		flag = true
            		return true
            	}
            })
            if(!flag) {
            	state.shoppingCar.push(ballinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.shoppingCar))
		},
		updateballinfo(state, ballinfo) {
			state.shoppingCar.some(item => {
				if( item.id == ballinfo.id) {
					return item.count = ballinfo.count 
				}
			})
			localStorage.setItem('car',JSON.stringify(state.shoppingCar))
		},
		upstate(state, index) {
			//state.shoppingCar = balls
			state.shoppingCar.splice(index,1)
			localStorage.setItem('car',JSON.stringify(state.shoppingCar))
			//console.log(index)
		},
		upselect(state, info) {
            state.shoppingCar.some(item => {
            	if(item.id == info.id) {
            		item.selected = info.select 
            	}
            })
            localStorage.setItem('car',JSON.stringify(state.shoppingCar))
		},
	},
	getters:{
		getAllCount(state){
			var n = 0
			state.shoppingCar.forEach(item => {
				n += item.count
			})
			return n
		},
		getSettle(state) {
			var settle = {
				counts:0,
				total_price:0,
			}
			state.shoppingCar.some(item => {
				if(item.selected == true){
				    settle.counts += item.count
				    settle.total_price += item.price*item.count	
				}
				
			})
			return settle
		}
	}
})

import app from './app.vue'

var vm = new Vue({
	el: '#app',
	render: c=> c(app),
	router,store

})

//console.log('ok')