<template>
    <div>
    	<!-- 轮播图 -->
    	<mt-swipe :auto="4000">
            <mt-swipe-item >
            	<img src="https://thumb210.jfcdns.com/n3313rc2anto16rjc41/16f5cef341311da3.jpeg">
            </mt-swipe-item>
            <mt-swipe-item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU"></mt-swipe-item>
            <mt-swipe-item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU"></mt-swipe-item>
        </mt-swipe>
    	<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-home"></span>
		        <div class="mui-media-body">Home</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
		        <div class="mui-media-body">Email</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-chatbubble"></span>
		        <div class="mui-media-body">Chat</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-location"></span>
		        <div class="mui-media-body">location</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-search"></span>
		        <div class="mui-media-body">Search</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-phone"></span>
		        <div class="mui-media-body">Phone</div></router-link></li>
		    
		</ul>
    </div>	
</template>


<script>

import { Toast } from 'mint-ui'

export default {
	data() {
		return {
			swipeList: []
		}
	},
	created() {
		this.getSwipe();
	},
	methods: {
        getSwipe() {
        	//获取轮播图数据的方法
        	this.$http.get("").then(result => {
        		if (result.body.status === 0 ){
        			this.swpeList = result.body.message;
        		} else {
                    Toast(" 加载轮播图失败 ");
        		}
        	});
        }
	}
}

</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item {
        text-align:center;
    	img{
    		height:100%;
    	}
    }
}

</style>