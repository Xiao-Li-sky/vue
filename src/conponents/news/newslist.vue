<template>

<ul class="mui-table-view">
<!-- 	<li class="mui-table-view-cell mui-media" v-for="" :key="">
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
	</li> -->

	<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
		<router-link :to="'/home/newsinfo/'+item.id">
			<img class="mui-media-object mui-pull-left" :src="item.src">
			<div class="mui-media-body">
							<h1>{{ item.name }}</h1>
				<p class="mui-ellipsis">
				    <span>时间：{{ item.time|dateFormat }}</span>
				    <span>点击：{{ item.clickNum }}次</span>
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
			newsList:[],
			list:[{
				id:1,
				src:'https://portrait.gitee.com/uploads/avatars/user/1636/4909645_baikaishuizhudongxi_1591855671.png!avatar30',
				name:'科比',
				time:'2020-06-11 12:20:47',
				clickNum:'2',
			},{
				id:2,
				src:'https://inews.gtimg.com/newsapp_bt/0/11304268823/1000',
				name:'科比',
				time:'2020-06-12 03:15:01',
				clickNum:'666',
			},{
				id:3,
				src:'https://k.sinaimg.cn/n/sports/transform/20160321/m5HH-fxqpchx6402354.jpg/w570e1d.jpg',
				name:'科比',
				time:'2020-06-14 06:42:20',
				clickNum:'2',
			}]
		}
	},
	created(){
		//this.getNewsList()
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