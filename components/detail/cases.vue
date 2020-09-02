<template>
	<view class="detail-cases-container">
		<view class="nav d-flex">
			<text class="on">产品案例</text>
			<text>行业案例</text>
		</view>
		<view class="list">
			<view class="item">
				<cases-item/>
			</view>
		</view>
	</view>
</template>

<script>
	import CasesItem from './casesItem.vue'
	
	export default {
		props:['list'],
		components:{
			CasesItem
		}
	}
</script>

<style lang="stylus" scoped>
	.detail-cases-container
		padding 34rpx 24rpx 38rpx
		background-color #fff
		.nav
			height 70rpx
			line-height 70rpx
			text-align center
			text
				margin-right 20rpx
				width 200rpx
				height 100%
				font-size 30rpx
				font-weight bold
				color #151515
				&.on
					background-color #0093bb
					border-radius 20rpx
					color #fff
		.list
			width 100%
			.item
				margin-top 20rpx
</style>
