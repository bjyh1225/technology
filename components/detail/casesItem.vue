<template>
	<view class="detail-cases-item-container d-flex">
		<image src="../../static/img02.png" class="img d-flex-unShrink"/>
		<view class="text d-flex-item">
			<view class="title d-ellipsis-single">案例 | 三维扫描在航天航空中...</view>
			<view class="date">2020-07-08</view>
			<view class="desc d-ellipsis-multiple">飞机机身和零部件在使用过程中难免 会发生损坏，这类大型设备很难做...</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.detail-cases-item-container
		width 100%
		.img
			margin-right 25rpx
			width 260rpx
			height 190rpx
		.text
			padding 10rpx 0
			width 50%
			.title
				font-size 30rpx
				color #151515
			.date
				margin-top 15rpx
				font-size 24rpx
				color #515151
			.desc
				margin-top 20rpx
				height 70rpx
				line-height 35rpx
				-webkit-line-clamp 2
				font-size 26rpx
				color #151515
</style>
