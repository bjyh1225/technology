<template>
	<view class="index-sec-title-container d-flex d-flex-between d-flex-middle">
		<view>{{title}}</view>
		<navigator v-if="url" :url="url" :open-type="type">more+</navigator>
	</view>
</template>

<script>
	export default {
		props:{
			title:{},
			url:{},
			type:{
				type:String,
				default:'navigate'
			}
		},
		data(){
			return {}
		},
		created() {
			console.log('---------',this.type)
		}
	}
</script>

<style lang="stylus" scoped>
	.index-sec-title-container
		height 102rpx
		font-size 34rpx
		color #292929
		navigator
			font-size 28rpx
</style>
