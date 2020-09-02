<template>
	<view class="detail-specs-container">
		<view class="title">AtlaScan 多模式多功能量测3D扫描仪</view>
		<view>激光颜色：白色</view>
		<view>激光线束：11线</view>
		<view>精度要求：0.03</view>
		<view>测孔功能：否</view>
		<view>贴点扫描：跟踪+贴点扫描</view>
	</view>
</template>

<script>
	export default {
		props:['specs']
	}
</script>

<style lang="stylus" scoped>
	.detail-specs-container
		padding 40rpx 30rpx
		background-color #fff
		border-radius 10rpx
		color #151515
		view
			margin-top 25rpx
			text-align center
			font-size 28rpx
		.title
			margin 0
			font-size 26rpx
			font-weight bold
</style>
