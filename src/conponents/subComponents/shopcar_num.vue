<template>
	<div class="mui-numbox" data-numbox-min="0" data-numbox-max=" 20 ">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input class="mui-input-numbox" type="number" :value='initCount'  @change='countChange' ref='numbox' readonly @click='upCount'>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'	
export default {
	mounted() {
        mui('.mui-numbox').numbox()
	},
	data() {
		return {}
	},
	methods: {
        countChange(id) {
          // console.log(this.$refs.numbox.value)
          var ballinfo = {
        		id:this.id,
        		count:parseInt(this.$refs.numbox.value),
        	}
        	//console.log(this.id)
        	this.$store.commit('updateballinfo',ballinfo)

        },
        upCount(id) {
        	console.log(this.id)
        	// var ballinfo = {
        	// 	id:this.id,
        	// 	count:this.$refs.numbox.value,
        	// }
        	//this.$store.commit('updateballinfo',ballinfo)
        	//console.log(ballinfo)

        }
	},
	props:['initCount','id'],
}
</script>

<style lang="scss" scoped>
	

</style>