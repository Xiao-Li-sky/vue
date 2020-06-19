<template>
    <div class="container">
    	<div class="mui-card" v-for="(item,index) in balls">
	    	<div class="mui-card-content">
	    		<div class="mui-card-content-inner ballList">
						<mt-switch v-model="item.selected" @change="selectChange(item.id,item.selected)"></mt-switch>
						<img :src="item.src" width="60" height="60">
						<div class="info">
							<h3>{{ item.title }}</h3>
							
								<span class="price"> ￥{{ item.price }} </span>
								<Num :initCount='item.count' :id='item.id'></Num>
				                <a href="#" @click.prevent="deleteBall(index)">删除</a>
							
						</div>
		    	</div>
		    </div>
   	    </div>

   	    <!-- 结算 -->
   	    <div class="mui-card">
	 	    <div class="mui-card-content ">
	 	    	<div class="mui-card-content-inner settle ">
	 	    		<div>
	 	    			<p>总计：</p>
				        <p>已勾选商品：<span class="red">{{ $store.getters.getSettle.counts }}</span>件，总价：<span class="red">￥{{ $store.getters.getSettle.total_price }}</span></p>
	 	    		</div>
				    
				    <mt-button type='danger'>去结算</mt-button>
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
		deleteBall(index) {
           // this.balls.splice(id-1,1)
            this.$store.commit('upstate',index)
            
            //console.log(index)
		},
        selectChange(id,select) {
        	//console.log(id+'--'+select)
        	this.$store.commit('upselect',{id,select})
        }
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
	.settle{
		display:flex;
		justify-content:space-between;
		align-items:center;
		.red{
			color:red;
			font-size:16px;
			font-weight:bold;
		}
	}
}

</style>