<template>
	<div>
		<div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
					<div class="mui-scroll" >
						<a class="mui-control-item mui-active" href ="/home" >
							推荐
						</a>
						
						<router-link class="mui-control-item1" to="/home/picture/dunk" data-wid="tab-top-subpage-2.html">
							扣篮

						</router-link>
						<router-link class="mui-control-item" to="/home/picture/three" data-wid="tab-top-subpage-3.html">
							三分
						</router-link>
						<router-link class="mui-control-item" to="/home/picture/jumper" data-wid="tab-top-subpage-4.html">
							后仰
						</router-link>
						<router-link class="mui-control-item" to="/home/picture/jumper" data-wid="tab-top-subpage-5.html">
							后仰
						</router-link>
						<router-link class="mui-control-item" to="/home/picture/jumper" data-wid="tab-top-subpage-6.html">
							后仰
						</router-link>
					</div>
			</div>
		</div>
		 
        <!-- 图片区域 -->
        <div class="img-list">
            <ul id="ul-container">
                <li v-for="img in list[index]">
                    <img v-lazy="img">
                </li>
            </ul>
         </div>

	</div>
</template>

<script>
import  mui from "../../lib/mui/js/mui.min.js"
import dunk from './dunk.vue'

export default {
	data(){
        return {
        	list: [{
        		id:1,
        		title:'',
        		img:[{
        			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',
        			//图片地址
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU'
        		}],[{
        		id:1,
        		title:'',
        		img:[{
        			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',//图片地址
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU'
        		}]
        	}]
        };
	},
	mounted(){
		//mui.init()
        mui('.mui-scroll-wrapper').scroll({
        	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
	},
	methods:{

	},
	components:{
        "dunk":dunk
	}
}

</script>

<style lang="scss" scoped>
* {
	touch-action: pan-y;
}
.mui-segmented-control.mui-scroll-wrapper .mui-control-item1 {
    display: inline-block;
    width: auto;
    padding: 0 20px;
    border: 0;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item1 {
    color: inherit;
    border: 0;
}
.mui-segmented-control .mui-control-item1 {
    line-height: 38px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    border-color: #007aff;
    border-left: 1px solid #007aff;
}

#ul-container{
	list-style:none;
	text-align:center;
	margin:0;
	padding:10px;
	li{
		background-color: #ccc;
		box-shadow:0 0 8px;
		margin-bottom: 10px;
		img{
			width:100%;
			vertical-align:middle;
		}
		img [lazy="loading"] {
		    width:40px;
		    height:300px;
		    margin:auto;	
		}
	}
}
</style>