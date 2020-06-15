<template>
    <div class="container">
    	
    	<!-- 商品轮播图 -->
        <div class="mui-card">
        	<div class="mui-card-content">
					<div class="mui-card-content-inner" style="background-color:#eee ">
						<swipe  :list="ballList[id-1].img"></swipe>
					</div>
				</div>
			
		</div>
    	<!-- 商品购买 -->
    	<div class="mui-card">
			<div class="mui-card-header">{{ ballList[id-1].message[0].title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价：<del>￥{{ ballList[id-1].message[0].sell_market }}</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价: <span class="now">￥{{ ballList[id-1].message[0].sell_now }} </span>
						</p>
						<p>购买数量：
						   	<div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
					            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					            <input class="mui-input-numbox" type="number">
					            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
						</p>

						<p>
							<mt-button type='primary' size='small'>立即购买</mt-button>
							<mt-button type='danger' size='small'>加入购物车</mt-button>
						</p>
					</div>
				</div>
		</div>
        
        <!-- 商品参数 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ ballList[id-1].message[0].num }}</p>
						<p>库存情况：{{ ballList[id-1].message[0].amount }}个</p>
						<p>上架时间：{{ ballList[id-1].message[0].add_time | dateFormat}}</p>
					</div>
				</div>
			<div class="mui-card-footer">
				<mt-button type='primary' size='large' plain @click="goComment(id)">商品评论</mt-button>
			</div>
		</div>
    </div>	

</template>

<script >
import swipe from '../subComponents/swipe.vue'	
import mui from '../../lib/mui/js/mui.min.js'

export default {
	data() {
        return {
        	id:this.$route.params.id,
        	ballList:[{
        		id:1,
        		message:[
        		    {
			    	id:1,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-01',
				    amount: '20',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/i1/2166048459/O1CN01FrPCPT2CMGtZ0E5G9_!!0-item_pic.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/i1/2166048459/O1CN01PsnEPO2CMGtXeTluW_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01aQgGxB2CMGtW5Yl5t_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01YwUuTN2CMGtYwUbfd_!!2166048459.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:2,
        		message:[
        		    {
			    	id:2,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-02',
				    amount: '60',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/i2/2968585758/TB14_kmaAyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i4/2968585758/O1CN01jI2tS81sPD9QISDTr_!!2968585758-0-lubanu-s.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i4/2968585758/TB2nsdVaK7EWeJjSZFMXXX00FXa_!!2968585758.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:3,
        		message:[
        		    {
			    	id:3,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-01',
				    amount: '601',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/i1/2166048459/O1CN01FrPCPT2CMGtZ0E5G9_!!0-item_pic.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/i1/2166048459/O1CN01PsnEPO2CMGtXeTluW_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01aQgGxB2CMGtW5Yl5t_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01YwUuTN2CMGtYwUbfd_!!2166048459.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:4,
        		message:[
        		    {
			    	id:4,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-03',
				    amount: '60',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2452776068/O1CN019A5ku91uhBvq1k2Wu_!!2452776068.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2452776068/O1CN01Ir5IUp1uhBo01o629_!!2452776068.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2452776068/O1CN01XJCQqY1uhBnz1Nzpp_!!2452776068.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2452776068/O1CN01pjC8Wf1uhBo0TEcSA_!!2452776068.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:5,
        		message:[
        		    {
			    	id:5,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-02',
				    amount: '63',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/i3/2968585758/O1CN01IOXWLu1sPD9TD0RZo_!!0-item_pic.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/i2/2968585758/TB14_kmaAyWBuNjy0FpXXassXXa_!!0-item_pic.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i4/2968585758/O1CN01jI2tS81sPD9QISDTr_!!2968585758-0-lubanu-s.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i4/2968585758/TB2nsdVaK7EWeJjSZFMXXX00FXa_!!2968585758.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:6,
        		message:[
        		    {
			    	id:6,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-03',
				    amount: '25',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2452776068/O1CN019A5ku91uhBvq1k2Wu_!!2452776068.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2452776068/O1CN01Ir5IUp1uhBo01o629_!!2452776068.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2452776068/O1CN01XJCQqY1uhBnz1Nzpp_!!2452776068.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2452776068/O1CN01pjC8Wf1uhBo0TEcSA_!!2452776068.jpg_430x430q90.jpg'
                    },
        		 ],
            },{
        		id:7,
        		message:[
        		    {
			    	id:7,
			    	src: 'https://gaitaobao1.alicdn.com/tfscom/i4/1713424658/O1CN01vzdOli1kHPTpQynAD_!!1713424658.jpg_240x240xz.jpg_.webp',
				    title: '篮球威尔胜',
				    sell_now: '89',
				    sell_market: '99',
                    num:'ball-01',
				    amount: '3',
				    add_time:'2020-06-15'
			        },
        		],
        		img:[
        		    {
                    src:"https://img.alicdn.com/imgextra/i1/2166048459/O1CN01FrPCPT2CMGtZ0E5G9_!!0-item_pic.jpg_430x430q90.jpg",
                    }, {
                    src: 'https://img.alicdn.com/imgextra/i1/2166048459/O1CN01PsnEPO2CMGtXeTluW_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01aQgGxB2CMGtW5Yl5t_!!2166048459.jpg_430x430q90.jpg',
                    },{
                    src: 'https://img.alicdn.com/imgextra/i3/2166048459/O1CN01YwUuTN2CMGtYwUbfd_!!2166048459.jpg_430x430q90.jpg'
                    },
        		 ],
            }],
            list:[]
        }
	},
	created(){
		// this.getBall_photos(1,ballList)
  //       this.getBall_info(1,ballList)
 // console.log(this.ballList[1])
        
	},
	methods:{
        // getBall(id) {
        //     this.get(id).then(result => {
        //     	if (result.body.status ===0) {
        //     		this.list = result.body.message;
        //     	}
        //     })
        // },
        // getBall_info(id,ballList){
        // 	//查数组ballList,匹配id
        //     if (id == ballList.id) {
        //     	return this.list = ballList.message;
        //     }
        // },
        // getBall_photos(id,ballList) {
        // 	if (id == ballList.id) {
        //         return this.list = ballList.img;
        // 	}
        // }
        goComment(id) {
            this.$router.push({ name: "Comment", params: { id } });
        }
	},
	mounted() {
        mui('.mui-numbox').numbox()
	},
	components: {
		swipe
	}
}
</script>

<style lang="scss" scoped>
.container{
	background-color: #eee;
	.now{
		color:red;
		font-weight:bold;
		font-size:16px;
	}
	.mui-card-footer{
        button{
		margin:15px;
	}
	}
}

</style>