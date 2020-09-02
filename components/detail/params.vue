<template>
	<view class="detail-params-container d-flex d-flex-column">
		<view class="head d-flex">
			<text>名称</text>
			<text>数量</text>
			<text>备注</text>
		</view>
		<view v-for="(item,index) in 6" :key="index" class="row d-flex">
			<text>12</text>
			<text>1</text>
			<text>中观中观</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['param']
	}
</script>

<style lang="stylus" scoped>
	.detail-params-container
		border-top 1px solid #f1f1f1
		border-left 1px solid #f1f1f1
		border-bottom 1px solid #f1f1f1
		text-align center
		.head
			height 60rpx
			line-height 60rpx
			background-color #149fbf
			text
				width 33.333333%
				height 100%
				border-right 1px solid #f1f1f1
				font-size 28rpx
				color #fff
		.row
			height 60rpx
			line-height 60rpx
			&:nth-child(even)
				background-color #eee
			text
				width 33.333333%
				height 100%
				border-right 1px solid #f1f1f1
				font-size 24rpx
				color #3f3f3f
</style>
