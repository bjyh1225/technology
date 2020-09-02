<template>
	<view class="banner-container">
		<swiper indicator-dots indicator-color="#fff" indicator-active-color="#0093bb" :interval="3000" :duration="1000" class="wrap">
			<swiper-item v-for="(item,index) in imgs" :key="index" class="item">
				<image src="../static/ban01.png" class="d-img"/>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:['imgs'],
		data(){
			return {}
		},
	}
</script>

<style lang="stylus" scoped>
	.banner-container
		width 100%
		height 680rpx
		.wrap
			width 100%
			height 100%
			.item
				height 100%
</style>
