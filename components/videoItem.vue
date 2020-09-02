<template>
	<view class="video-item-container">
		<view class="body">
			<video class="play-size" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v" controls>
				<cover-view class="time">12:17</cover-view>
			</video>
		</view>
		<!-- <view class="foot d-ellipsis-multiple">RigelScan 手持式蓝色激光3D扫描仪>></view> -->
	</view>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
	.video-item-container
		// width 340rpx
		background-color #fff
		border-radius 0 0 15rpx 15rpx
		box-shadow 0 0 10rpx 0 rgba(243,243,243,1)
		.body
			position relative
			// height 230rpx
			height 100%
		  .play-size
			width 100%
			.time
				position absolute
				left 0
				bottom 10rpx
				width 80rpx
				height 28rpx
				line-height 28rpx
				text-align center
				background-color rgba(0,0,0,.55)
				border-radius 0 8rpx 8rpx 0
				font-size 22rpx
				color #fff
		.foot
			padding 2rpx 6rpx 0
			height 75rpx
			line-height 37rpx
			-webkit-line-clamp 2
			font-size 24rpx
			color #2c2c2c
</style>
