<template>
    <div class="cmt-container">
    	<h3>评论区域</h3>
        <hr>
        <textarea placeholder="请输入内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click='postComment'>发表</mt-button>

        <div class="cmt-list">
        	<div class="cmt-item">
        		<div class="cmt-title">
        		    <span>第一楼&nbsp;&nbsp;</span>
        		    <span>用户：匿名</span>
        		    <span>时间：2020-06-12</span>
        		</div>
                <div class="cmt-body">老大</div>
        	</div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data() {
    	return{
    	    comments:[],
            msg:''//评论输入的内容	
    	}
    },
    created(){
        this.getComments()
    },
    methods:{
    	//获取评论
    	getComments(){
    		this.$http.get("").then(result => {
    			if (result.body.status === 0){
    				this.comments = this.comments.cancat(result.body.message) 
    			} else {
    				Toast("评论加载失败")
    			}
    		})
    	},
    	//加载更多
    	getmore(){
            this.getComments()
    	},
    	postComment(){
    		//校验是否为空
    		if (this.msg.trim().length === 0 ) {
    			return Toast('评论不能为空');
    		}
    		this.$http.post('',{
    			content:this.msg.trim()
    		}).then(function(result) {
    			if(result.body.status === 0) {
                    //拼接一个评论对象
                    var cmt = {
                    	user_name : "匿名用户",
                    	add_time : Date.now(),
                    	content: this.msg.trim()
                    };
                    this.comments.unshift(cmt);
                    this.msg = ''
    			}
    		})
    	}
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
		margin:0;
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