<template>
	<view class="confirm-head-container">
		<view v-if="!hasAddress" @click="selectAddress" class="address-not d-flex d-flex-column d-flex-middle d-flex-center">
			<image src="../../static/icon-local-grey.png"/>
			<view>您还没有收货地址，请点击添加</view>
		</view>
		<view v-else class="address-has d-flex d-flex-middle">
			<image src="../../static/icon-local.png" class="flag d-flex-unShrink"/>
			<view class="content d-flex-item d-flex d-flex-column d-flex-between">
				<view class="name">张三</view>
				<view class="address">湖北省武汉市江夏区百捷科技园</view>
			</view>
			<image src="../../static/icon-arrow-right-small.png" class="arrow d-flex-unShrink"/>
		</view>
		<view class="protocol d-flex d-flex-middle">
			<view class="content d-flex-item">
				<view class="pdf d-flex d-flex-middle"><image src="../../static/icon-pdf.png"/>工程师租用协议PDF</view>
				<view class="tips">*可复制到浏览器中打开</view>
			</view>
			<view class="d-flex-unShrink d-flex d-flex-middle">
				<view class="btn d-flex d-flex-column d-flex-middle d-flex-center">
					<image src="../../static/icon-pdf-preview.png"/>
					<view>预览</view>
				</view>
				<view class="btn d-flex d-flex-column d-flex-middle d-flex-center">
					<image src="../../static/icon-pdf-copy.png"/>
					<view>复制</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['origin','info'],
		data(){
			return {
				hasAddress:false
			}
		},
		methods:{
			selectAddress(){
				uni.navigateTo({
					url:'../../pages/address/address'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.confirm-head-container
		.address-not
			margin-bottom -10rpx
			height 180rpx
			background-color #fff
			border-radius 10rpx 10rpx 0 0
			font-size 26rpx
			color #848484
			image
				margin-bottom 18rpx
				width 60rpx
				height 76rpx
		.address-has
			margin-bottom 20rpx
			padding 0 20rpx
			height 160rpx
			background-color #fff
			border-radius 10rpx
			.flag
				margin-right 25rpx
				width 60rpx
				height 60rpx
			.content
				width 50%
				color #242424
				.name
					font-size 30rpx
					font-weight bold
				.address
					font-size 24rpx
			.arrow
				margin-left 20rpx
				width 12rpx
				height 22rpx
		.protocol
			padding 0 20rpx
			height 150rpx
			background-color #fff
			border-radius 10rpx
			.content
				width 50%
				.pdf
					font-size 30rpx
					font-weight bold
					color #333
					image
						margin-right 20rpx
						width 64rpx
						height 64rpx
				.tips
					font-size 22rpx
					color #cfcfcf
			.btn
				margin-left 60rpx
				font-size 26rpx
				color #808080
				image
					margin-bottom 10rpx
					width 52rpx
					height 52rpx
</style>
