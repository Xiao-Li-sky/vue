<template>
	<div>
		<mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key='item.src'>
            	<img :src="item.src">
            </mt-swipe-item>
        </mt-swipe>
	</div>

</template>

<script> 
export default{
	data() {
		return {

		}
	},
	methods:{
        
	},
	props:["list"]
}
</script>


<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item {
        text-align:center;
    	img{
    		height:100%;
    	}
    }
}

</style>