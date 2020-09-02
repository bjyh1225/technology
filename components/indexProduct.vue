<template>
	<view class="index-product-container d-flex d-flex-column">
		<image src="../static/img01.png" class="img"/>
		<view class="desc">
			<view class="title d-ellipsis-single">智能光学追踪3D扫描仪</view>
			<view class="spec d-ellipsis-single">HyperScan</view>
			<view class="price d-flex d-flex-between d-flex-middle">
				<view>¥19,999</view>
				<image src="../static/icon-star-fill.png" class="d-flex-unShrink"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info'],
		data(){
			return {}
		}
	}
</script>

<style lang="stylus" scoped>
	.index-product-container
		margin 0 25rpx
		width 430rpx
		height 478rpx
		background-color #fff
		border-radius 20rpx
		overflow hidden
		.img
			width 100%
			height 324rpx
			border 1px solid #f2f2f2
			border-radius 20rpx
			box-sizing border-box
		.desc
			padding 20rpx 16rpx
			.title
				font-size 30rpx
				font-weight bold
				color #c4c4c4
			.spec
				margin-top 10rpx
				font-size 24rpx
				color #c9c9c9
			.price
				margin-top 10rpx
				font-size 26rpx
				font-weight bold
				color #ff002a
				image
					width 36rpx
					height 34rpx
</style>
