<template>

<ul class="mui-table-view">
	<li class="mui-table-view-cell mui-media" v-for="" :key="">
		<router-link to="/home/newsinfo/">
			<img class="mui-media-object mui-pull-left" src="https://portrait.gitee.com/uploads/avatars/user/1636/4909645_baikaishuizhudongxi_1591855671.png!avatar30">
			<div class="mui-media-body">
							<h1>科比{{ index }}</h1>
			    <p class="mui-ellipsis">
				    <span>时间：{{ dateFormat }}</span>
				    <span>点击：</span>
				</p>
			</div>
		</router-link>
	</li>
	<li class="mui-table-view-cell mui-media">
		<router-link to="/home/newsinfo/">
			<img class="mui-media-object mui-pull-left" src="https://portrait.gitee.com/uploads/avatars/user/1636/4909645_baikaishuizhudongxi_1591855671.png!avatar30">
			<div class="mui-media-body">
							<h1>乔丹</h1>
				<p class="mui-ellipsis">
				    <span>时间：2020-06-12 09：40</span>
				    <span>点击：0次</span>
				</p>
			</div>
		</router-link>
	</li>
	<li class="mui-table-view-cell mui-media">
		<router-link to="/home/newsinfo/">
			<img class="mui-media-object mui-pull-left" src="https://portrait.gitee.com/uploads/avatars/user/1636/4909645_baikaishuizhudongxi_1591855671.png!avatar30">
			<div class="mui-media-body">
							<h1>詹姆斯</h1>
				<p class="mui-ellipsis">
				    <span>时间：2020-06-12 09：40</span>
				    <span>点击：0次</span>
				</p>
			</div>
		</router-link>
	</li>
</ul>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
	data(){
		return {
			newsList:[]
		}
	},
	created(){
		this.getNewsList()
	},
    methods:{
        getNewsList(){
        	this.$http.get("").then(result => {
        		if(result.body.status === 0) {
        			this.newsList = result.body.message;
        		} else{
                    Toast("新闻加载失败");
        		}
        	})
        }
    }
}

</script>

<style lang='scss' scoped>
.mui-table-view{
	li{
		h1{
			font-size:14px;
		}
		.mui-ellipsis{
		    font-size:12px;
		    color:#226aff;
		    display:flex;
		    justify-content:space-between;
		}
	}
}
</style>