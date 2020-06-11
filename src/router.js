import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from './conponents/tabbar/HomeContainer.vue'
import MessageContainer from './conponents/tabbar/MessageContainer.vue'
import ChatContainer from './conponents/tabbar/ChatContainer.vue'
import SearchContainer from './conponents/tabbar/SearchContainer.vue'

var router = new VueRouter({
	routes:[//配置路由规则
	    {path:'',redirect:'./home'},
	    {path:'/home',component:HomeContainer},
	    {path:'/message',component:MessageContainer},
	    {path:'/chat',component:ChatContainer},
	    {path:'/search',component:SearchContainer}
	],
	linkActiveClass:'mui-active' //覆盖默认的路由高亮
})

export default router