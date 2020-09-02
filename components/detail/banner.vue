<template>
	<view class="detail-banner-container">
		<swiper @change="onSwiper" :interval="3000" :duration="1000" class="swiper">
			<swiper-item>
				<image src="../../static/ban01.png" class="d-img"/>
			</swiper-item>
		</swiper>
		<view class="pagination">1/2</view>
	</view>
</template>

<script>
	export default {
		props:['imgs'],
		methods:{
			onSwiper(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.detail-banner-container
		position relative
		width 100%
		height 562rpx
		.swiper
			width 100%
			height 100%
		.pagination
			position absolute
			right 12rpx
			bottom 24rpx
			width 100rpx
			height 48rpx
			line-height 48rpx
			text-align center
			background-color #949494
			border-radius 25rpx
			font-size 28rpx
			color #fff
			overflow hidden
</style>
