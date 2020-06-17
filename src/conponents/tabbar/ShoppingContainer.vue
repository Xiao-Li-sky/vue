<template>
    <div class="container">
    	<div class="mui-card" v-for="item in balls">
	    	<div class="mui-card-content">
	    		<div class="mui-card-content-inner ballList">
						<mt-switch ></mt-switch>
						<img :src="item.src" width="60" height="60">
						<div class="info">
							<h3>{{ item.title }}</h3>
							
								<span class="price"> ￥{{ item.price }} </span>
								<Num :initCount='item.count' :id='item.id'></Num>
				                <a href="">删除</a>
							
						</div>
		    	</div>
		    </div>
   	    </div>
   	    <div class="mui-card">
	 	    <div class="mui-card-content">
	 	    	<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
	    		</div>
	    	</div>
	    </div>
    </div>
</template>


<script>
//import mui from '../../lib/mui/js/mui.min.js'
import Num from '../subComponents/shopcar_num.vue'
export default {
	data() {
		return {
			balls:[],
			list:[{
				id:1,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥99',
				amount: '20',
			},{
				id:2,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '60',
			},{
				id:3,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '601',
			},{
				id:4,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/2452776068/O1CN01pcGNyT1uhBvuYX5Sn_!!2452776068.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '60',
			},{
				id:5,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '63',
			},{
				id:6,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/2452776068/O1CN01pcGNyT1uhBvuYX5Sn_!!2452776068.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '25',
			},{
				id:7,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜',
				sell_now: '￥89',
				sell_old: '￥90',
				amount: '3',
			}
			]
		}
	},
	created() {
        this.getBallList()
	},
	methods:{
		// countChange() {
  //          console.log(this.$refs.numbox[1].value)
  //       },
		getBallList() {
            //var idList = []
            // this.$store.state.shoppingCar.forEach(item => idList.push(item.id));
            this.balls = this.$store.state.shoppingCar
            //console.log(this.balls.src)
            //console.log(this.balls)
		},

	},
	mounted() {
        //mui('.mui-numbox').numbox()
	},
	components:{
		Num
	}
}

</script>

<style lang="scss" scoped>
.container{
	overflow:hidden;
	.ballList{
		display:flex;
		align-items:center;
		h3{
			font-size:14px;
			margin-bottom:10px;
			padding-left:9px;
		}
		.info{
            .price{
            	color:red;
            	font-weight:blod;
            }
            .mui-numbox{
            	width:115px;
            	height:30px;
            }
		}
	}
}

</style>