<template>

   <div class="balls-list"> 

       <router-link class="balls-item" v-for='item in list' :key='item.id' :to="'/home/ballinfo/'+item.id">
       	   <img :src="item.src">
       	   <h1 class="title">{{ item.title }}</h1>
       	   <div class="info">
       	   	   <p class="price">
       	   	   	   <span class="now">{{ item.sell_now }}</span>
       	   	   	   <span class="old">{{ item.sell_old }}</span>
       	   	   </p>
       	   	   <p class="sell">
       	   	   	   <span>热卖中</span>
       	   	   	   <span>剩{{ item.amount }}个</span>
       	   	   </p>
       	   </div>
       </router-link>
       <mt-button type="danger" size='large' @click=''>加载更多</mt-button>
   </div>
</template>

<script>
export default {
	data(){
		return {
			list:[{
				id:1,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜1',
				sell_now: '￥89',
				sell_old: '￥99',
				amount: '20',
			},{
				id:2,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜2',
				sell_now: '￥90',
				sell_old: '￥90',
				amount: '60',
			},{
				id:3,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜3',
				sell_now: '￥96',
				sell_old: '￥90',
				amount: '601',
			},{
				id:4,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/2452776068/O1CN01pcGNyT1uhBvuYX5Sn_!!2452776068.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜4',
				sell_now: '￥78',
				sell_old: '￥90',
				amount: '60',
			},{
				id:5,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜5',
				sell_now: '￥99',
				sell_old: '￥90',
				amount: '63',
			},{
				id:6,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/2452776068/O1CN01pcGNyT1uhBvuYX5Sn_!!2452776068.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜6',
				sell_now: '￥93',
				sell_old: '￥90',
				amount: '25',
			},{
				id:7,
				src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				title: '篮球威尔胜7',
				sell_now: '￥96',
				sell_old: '￥90',
				amount: '3',
			}
			]
		}
	},
	method: {

	}
}

</script>

<style lang="scss" scoped>
.balls-list{
	display: flex;
	flex-wrap: wrap;
	padding:7px;
	justify-content:space-between;
	.balls-item{
		border:1px solid #ccc;
		box-shadow:0 0 8px #ccc;
		width:49%;
		margin:4px 0;
		padding:1px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:250px;
		img{
			width:100%;
		}
		.title{
			font-size:14px;
		}
		.info{
			background: #eee;
			p{margin:0; padding:3px;}
			.price{
			    .now{color:red;font-size:16px; font-weight:bold;}
			    .old{font-size:12px; margin-left:15px; text-decoration:line-through;}
			}
			.sell{
                display:flex;
			    justify-content:space-between;
			}
			
		}
	}
}
</style>