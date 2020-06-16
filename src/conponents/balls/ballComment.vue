<template>
    <div class="cmt-container">
        <h3>评论区域</h3>
        <hr>
        <textarea placeholder="请输入内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click='postComment(id)'>发表</mt-button>
	    <div class="cmt-list" v-for="(item, i) in list[id-1].ballComments" :key="item.time">
            <div class="cmt-item">
                <div class="cmt-title">
                    <span>第{{ i+1 }}楼&nbsp;&nbsp;</span>
                    <span>用户：{{ item.name }}</span>
                    <span>时间：{{ item.time|dateFormat }}</span>
                </div>
                <div class="cmt-body">{{ item.content }}</div>
            </div>
         </div>  

         <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>  	
    </div>


</template>

<script>

import {Toast} from 'mint-ui'
export default{
	data() {
        return{
        	id:this.$route.params.id,
        	msg:'',
        	// return{
         //        id:this.$route.params.id,
    	    //     comments:[],
         //        msg:'',//评论输入的内容	
         //    }
            list:[{
                id:1,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'这球不错'
                },{
                    id:2,
                    name:'乔丹',
                    time:'2020-06-16',
                    content:'太滑'
                },{
                    id:3,
                    name:'詹姆斯',
                    time:'2020-06-17',
                    content:'这球不错'
                }],
            },{
                id:2,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }],
            },{
                id:3,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }]
            },{
                id:4,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }]
            },{
                id:5,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }]
            },{
                id:6,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }]
            },{
                id:7,
                //商品评论
                ballComments:[{
                    id:1,
                    name:'科比',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:2,
                    name:'yang',
                    time:'2020-06-15',
                    content:'买'
                },{
                    id:3,
                    name:'克6',
                    time:'2020-06-15',
                    content:'这球不错'
                }]
            }]
        }	
	},
	methods:{
        postComment(id){
            //校验是否为空
            if (this.msg.trim().length === 0 ) {
                return Toast('评论不能为空');
            } else {
                var cmt = {
                    //id:id+1,
                    name:'匿名',
                    time:Date.now(),
                    content:this.msg.trim()
                }
                this.list[id-1].ballComments.unshift(cmt)
                this.msg = ''
            }
    	},
    	//加载更多
    	getmore(){
            this.getComments()
    	},
	},
	components:{
		
	}
}

</script>

<style lang="scss" scoped>
.cmt-container{
	h3{
		font-size:16px;
	}
	textarea{
		font-size:14px;
		margin:10px 0;
		height:85px;
	}
    .cmt-list{
    	margin:5px 0;
    	.cmt-item{
    		font-size:13px;
    		.cmt-title{
    			display:flex;
    		    justify-content:space-between;
                background: #ccc;
                line-heigth:35px;
                marign:0px;
    		}
    		.cmt-body{
                line-height:35px;
                text-indent:2em;
    		}
    	}
    }
}

</style>