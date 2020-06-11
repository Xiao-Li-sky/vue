<template>
    <div>
    	<!-- 轮播图 -->
    	<mt-swipe :auto="4000">
            <mt-swipe-item v-for="" :key="">1
            	<img src="">
            </mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>
    	<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-home"></span>
		        <div class="mui-media-body">Home</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		        <div class="mui-media-body">Email</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-chatbubble"></span>
		        <div class="mui-media-body">Chat</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-location"></span>
		        <div class="mui-media-body">location</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-search"></span>
		        <div class="mui-media-body">Search</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
		        <span class="mui-icon mui-icon-phone"></span>
		        <div class="mui-media-body">Phone</div></a></li>
		    
		</ul>
    </div>	
</template>


<script>

import { Toast } from 'mint-ui'

export default {
	data() {
		return {
			//lunbotuList: []
		}
	},
	created() {
		//this.getSwipe();
	},
	method: {
        /*getSwipe() {
        	//获取轮播图数据的方法
        	this.$http.get("http://").then(result => {
        		if (result.body.status === 0 ){
        			this.lunbotuList = result.body.message;
        		} else {
                    Toast{' 加载轮播图失败 '}
        		}
        	})；
        }*/
	}
}

</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item {
    	img{
    		width: 100%;
    		height: 100%;
    	}
    }
}

</style>