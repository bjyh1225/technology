<template>
	<view class="information-container page-h100 d-flex d-flex-column">
		<view class="head d-flex-unShrink">
			<view class="nav d-flex">
				<text class="on">展会动态</text>
				<text>行业资讯</text>
				<text>公司新闻</text>
			</view>
		</view>
		<view class="list d-flex-item">
			<view v-for="(item,index) in 10" :key="index" class="item">
				<info-item :info="item"/>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import InfoItem from '../../components/informationItem.vue'
	
	export default {
		components:{
			InfoItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	page
		height 100%
		background-color #f0f0f0
	.information-container
		.head
			position relative
			margin-bottom 60rpx
			height 350rpx
			background url('~@/static/information-head-bg.png') no-repeat 0 0
			background-size 100%
			.nav
				position absolute
				left 24rpx
				right 24rpx
				bottom -50rpx
				padding 0 15rpx
				height 90rpx
				line-height 90rpx
				background-color #fff
				border-radius 20rpx
				box-shadow 0 1px 3px 0 rgba(94,133,255,.08)
				text
					margin-right 30rpx
					height 100%
					font-size 30rpx
					font-weight bold
					color #292929
					&.on
						position relative
						font-size 34rpx
						color #0093bb
						&::after
							content ''
							position absolute
							left 50%
							bottom 0
							width 40rpx
							height 12rpx
							margin-left -20rpx
							background-color #ff8c04
							border-radius 20rpx
		.list
			padding 10rpx 24rpx
			height 50%
			overflow-y auto
			.item
				margin-bottom 24rpx
</style>
