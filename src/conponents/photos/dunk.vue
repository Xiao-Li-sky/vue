<template>
	<div class="container">
		<h1>缩略图:点击放大</h1>
		<vue-preview :slides="list" ></vue-preview>
	</div>

</template>

<script>
export default {
	data() {
		return {
			list: [{
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
                    msrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU',
                    w: 600,
                    h: 400
                    }, {
                    src: 'https://05imgmini.eastday.com/mobile/20190417/20190417184455_c91608a27f20b541cd86fe2a766f5599_4.jpeg',
                    msrc:'https://05imgmini.eastday.com/mobile/20190417/20190417184455_c91608a27f20b541cd86fe2a766f5599_4.jpeg',
                    w: 600,
                    w: 1200,
                    h: 900
                    },{
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU"',
                    msrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU"',
                    w: 600,
                    w: 1200,
                    h: 900
                    },{
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU"',
                    msrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX0PkFY_Ur4zuOt3o5NPKU2WOHuHA55xjwcFbIXg_mFSYh6uT&usqp=CAU"',
                    w: 600,
                    w: 1200,
                    h: 900
                    }]

		};
	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>
.container{
	background: #ccc;
	text-align: center;
	img{
		width:300px;
		height:300px;
	}
}
</style>