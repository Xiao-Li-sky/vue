<template>

    <div class="app-container">    
           <!-- 顶部 -->
        <mt-header fixed title="灌篮高手">
            <!-- <router-link to="home/" slot="left">
                <mt-button icon="back">back</mt-button>
                <mt-button @click="handleClose">close</mt-button>
            </router-link> -->
        </mt-header>
      
           <!-- router-view -->
        <transition>
        	<router-view></router-view>
        </transition>
       
           <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/message">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
       
       
       </div>  
</template>

<script>


</script>

<style lang='scss' scoped>

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
</style>
