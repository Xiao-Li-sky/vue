<template>
	<div>
		<div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
					<div class="mui-scroll" >
						<a :class="['mui-control-item',item.id == 1 ? 'mui-active' :''] " v-for="item in list" :key="item.id" @click='getId(item.id)'>
							{{ item.title }}
						</a>
						
						<router-link class="mui-control-item1" to="/home/picture/dunk" data-wid="tab-top-subpage-2.html">缩略图</router-link>
					</div>
			</div>
		</div>
		 
        <!-- 图片区域 -->
        <div class="img-list">
            <ul id="ul-container">
                <li v-for="img in list[num].img">
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
        	num:'',
        	list: [
        	    {
        		id:1,
        		title:'推荐',
        		img:[
        			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',
        			//图片地址
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAieSuy0uVI-t8M-WT-WghsYMnzl-o-uJxD9_8E611OlBVgPzb&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
        	        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU'
        		]},
        		{
        		id:2,
        		title:'后仰',
        		img:[
        			'https://p1-tt.byteimg.com/large/pgc-image/78d74ef16d3a45b8a545b813be818804',//图片地址
        	        'https://5b0988e595225.cdn.sohucs.com/images/20190124/3234d344ba3a491995d4261b30c9d38e.jpeg',
        	        'https://07.imgmini.eastday.com/mobile/20170930/5f4b56ed8d4b84ca2490aef08dfd6e5d.jpeg',
        	        'https://www.rensheng2.com/upload/2015/04/13/ca0cc269-0e0e-4545-8058-021054e44f4c.jpg',
        	        'https://i3.sinaimg.cn/ty/k/p/2008-05-28/U2686P6T12D3687077F44DT20080528144640.jpg'
        		]},
        		{
        		id:3,
        		title:'扣篮',
        		img:[
        		    'https://5b0988e595225.cdn.sohucs.com/images/20200405/42107c359fe04e13b22e843c7f642183.jpeg',
        			'https://inews.gtimg.com/newsapp_bt/0/11304268823/1000',//图片地址
        	        'https://5b0988e595225.cdn.sohucs.com/images/20170619/544f3a44d09b474dae17b274d490d66f.png',
        	        'https://n.sinaimg.cn/sinakd10121/600/w640h760/20200524/b4a2-itzixrs8990476.png',
        	        'https://k.sinaimg.cn/n/sports/transform/20160321/m5HH-fxqpchx6402354.jpg/w570e1d.jpg',
        	        'https://www.sinaimg.cn/dy/slidenews/2_img/2010_30/786_132406_857162.jpg'
        		]},
        		{
        		id:4,
        		title:'低位',
        		img:[
        			'https://vpic.video.qq.com/3388556/b14143in781_ori_3.jpg',//图片地址
        	        'https://lh3.googleusercontent.com/proxy/Dig_DsejvLAqz4mPNdUt5s4bbW1wA7_ouaduYkBrsVaeQ_xgEs9_kEhzqO92w_VTi8hDSymYp3mgBH5M77rDI-s1_DlOK4hq_wBII_hk7nl9CUZ7EspdfWnDbrkWFbXeb3Y',
        	        'https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600%3B/sign=4531776c017b02080c9c37e557e9dee5/5fdf8db1cb1349542214b7ad5d4e9258d0094af4.jpg',
        	        'https://n.sinaimg.cn/sinakd20200424ac/271/w640h431/20200424/564f-isqivxh8047394.png',
        	        'https://5b0988e595225.cdn.sohucs.com/images/20190725/01a1e202790e47c496e6c4bc74c9a655.jpeg'
        		]},
        		{
        		id:5,
        		title:'绝杀',
        		img:[
        			'https://5b0988e595225.cdn.sohucs.com/images/20170721/3729cd49fb0c4b9698e2e5f5c2e769db.jpeg',//图片地址
        	        'https://img1.gtimg.com/chinanba/pics/hv1/82/202/2284/148568692.jpg',
        	        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=616119250,990309853&fm=26&gp=0.jpg',
        	        'https://www.nocang.com/wp-content/uploads/kebi-2.jpg',
        	        'https://5b0988e595225.cdn.sohucs.com/images/20190220/<46b04c4df6124b57b1c8532ef2fa62cd class="jpeg"></46b04c4df6124b57b1c8532ef2fa62cd>'
        		]},
        		{
        		id:6,
        		title:'包夹',
        		img:[
        			'https://5b0988e595225.cdn.sohucs.com/images/20181015/aceed610595740fdaa8666f45037ae96.jpeg',//图片地址
        	        'https://inews.gtimg.com/newsapp_match/0/10403664184/0',
        	        'https://5b0988e595225.cdn.sohucs.com/images/20200405/42107c359fe04e13b22e843c7f642183.jpeg',
        	        'https://dingyue.ws.126.net/9AHrR2VLSwUp7s8gZ68GEaPs7rYb8=98=G7syufFuDDrU1551162872629compressflag.jpg',
        	        'https://n.sinaimg.cn/sinacn10121/632/w274h358/20190822/20c5-icqznfz8317651.png',
        	        'https://file-qtt.ccqq.net/uploads/uploads/2019/08/25/0000005/201908252232394969532dc-size1018x1024_thum_w-500_h-0_m-1_f-0_c-0.jpg',
        	        'https://pic4.zhimg.com/80/v2-6990530ea21b61e8968adbdfb92685a3_1440w.jpg',
        		]}
        	]
        }
	},
	created(){
        this.getId(1)
	},
	mounted(){
		//mui.init()
        mui('.mui-scroll-wrapper').scroll({
        	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
	},
	methods:{
        getId(id){
        	return this.num = id-1;
        }
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