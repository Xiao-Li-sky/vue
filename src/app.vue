<template>

    <div class="app-container">    
           <!-- 顶部 -->
        <mt-header fixed title="灌篮高手">
            <!-- <router-link to="home/" slot="left">
                <mt-button icon="back">back</mt-button>
                <mt-button @click="handleClose">close</mt-button>
            </router-link> -->
            <span  slot="left" @click="backPage" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>
      
           <!-- router-view -->
        <transition>
        	<router-view></router-view>
        </transition>
       
           <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shop">
				<span class="mui-icon mui-icon-email">
                    <span class="mui-badge">{{ $store.getters.getAllCount }}</span>            
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
       
       
       </div>  
</template>

<script>
export default {
    data() {
        return{
            flag:false
        }
    },
    created() {
        this.flag = this.$route.path === '/home'?false:true
    },
    methods: {
        backPage() {
            this.$router.go(-1)
        }
    },
    watch: {
        "$route.path":function(newVal) {
            if (newVal === '/home') {
                this.flag = false
               // console.log(newVal)
            } else {
                this.flag = true
               // console.log(newVal)
            }
        }
    }
}

</script>

<style lang='scss' scoped>
.mint-header{
    z-index:99;
}
.app-container{
	padding-top:40px;
	padding-bottom:40px;
	overflow-x:hidden;
	margin-bottom:20px;
}

.v-enter{
	opacity:0;
	transform:translateX(100%);
}

.v-leave-to{
	opacity:0;
	transform:translatex(-100%);
	position:absolute;
}

.v-enter-active,
.v-leave-active{
	transition:all 0.5s ease;
}

//改类名，解决tabba无法切换的问题

.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
