<template>
    <div>
    	<!-- 轮播图 -->
    	<swipe :list="list"></swipe>

    	<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home">
		        <span class="mui-icon mui-icon-home"></span>
		        <div class="mui-media-body">Home</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
		        <div class="mui-media-body">Player</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picture">
		        <span class="mui-icon mui-icon-image"></span>
		        <div class="mui-media-body">Picture</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/ballsList">
		        <span class="mui-icon mui-icon-search"></span>
		        <div class="mui-media-body">Basketball</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-email" ></span>
		        <div class="mui-media-body">location</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		        <span class="mui-icon mui-icon-phone"></span>
		        <div class="mui-media-body">Phone</div></router-link></li>
		</ul>
    </div>	
</template>


<script>

import { Toast } from 'mint-ui'
import swipe from '../subComponents/swipe.vue'

export default {
	data() {
		return {
			swipeList: [],
			list:[{
				id:1,
				src:'https://thumb210.jfcdns.com/n3313rc2anto16rjc41/16f5cef341311da3.jpeg'
			},{
				id:2,
				src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU'
			},{
				id:3,
				src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU'
			},{
				id:4,
				src:'https://p1.pstatp.com/large/pgc-image/8ef9047342be473baee3cb49e8234889'
			}],

		}
	},
	created() {
		//this.getSwipe();
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
	},
	components:{
		swipe
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