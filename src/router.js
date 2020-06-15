import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from './conponents/tabbar/HomeContainer.vue'
import MessageContainer from './conponents/tabbar/MessageContainer.vue'
import ChatContainer from './conponents/tabbar/ChatContainer.vue'
import SearchContainer from './conponents/tabbar/SearchContainer.vue'
import newslist from './conponents/news/newslist.vue'
import newsinfo from './conponents/news/newsinfo.vue'
import picture from './conponents/photos/picture.vue'
import dunk from './conponents/photos/dunk.vue'
import ballsList from './conponents/balls/ballsList.vue'
import ballinfo from './conponents/balls/ballinfo.vue'
import ballComment from './conponents/balls/ballComment.vue'

var router = new VueRouter({
	routes:[//配置路由规则
	    {path:'',redirect:'./home'},
	    {path:'/home',component:HomeContainer},
	    {path:'/message',component:MessageContainer},
	    {path:'/chat',component:ChatContainer},
	    {path:'/search',component:SearchContainer},
	    {path:'/home/news',component:newslist},
	    {path:'/home/newsinfo/:id',component:newsinfo},
	    {path:'/home/picture',component:picture},
	    {path:'/home/picture/dunk',component:dunk},
	    {path:'/home/ballsList',component:ballsList},
	    {path:'/home/ballinfo/:id',component:ballinfo},
	    {path:'/home/ballComment/:id',component:ballComment,name:'Comment'}

	],
	linkActiveClass:'mui-active' //覆盖默认的路由高亮
})

export default router