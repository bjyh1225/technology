<template>
	<view class="cases-container page-h100 d-flex d-flex-column">
		<view class="head d-flex-unShrink">
			<view class="text">
				<view>始终处于行业</view>
				<view>技术较前沿</view>
			</view>
			<view class="nav">
				<view class="nav-type d-flex">
					<text class="on">应用案例</text>
					<text>行业案例</text>
				</view>
				<scroll-view scroll-x class="nav-category scroll-view">
					<text class="on">逆向设计</text>
					<text>逆向设计</text>
					<text>逆向设计</text>
					<text>逆向设计</text>
					<text>逆向设计</text>
					<text>逆向设计</text>
				</scroll-view>
			</view>
		</view>
		<view class="list d-flex-item">
			<view v-for="(item,index) in 10" :key="index" class="item">
				<cases-item origin="cases" :info="item"/>
			</view>
		</view>
	</view>
</template>

<script>
	import CasesItem from '../../components/casesItem.vue'
	
	export default {
		components:{
			CasesItem
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
	.cases-container
		.head
			position relative
			margin-bottom 20rpx
			padding 50rpx 0 0 50rpx
			height 400rpx
			background url('~@/static/cases-head-bg01.png') no-repeat 0 0
			background-size 100% 100%
			.text
				position relative
				font-size 40rpx
				font-weight bold
				color #fff
				&::after
					content ''
					position absolute
					left 0
					bottom -30rpx
					width 62rpx
					height 12rpx
					background-color #fff
			.nav
				position absolute
				left 0
				bottom 0
				right 0
				background-color #fff
				border-radius 40rpx 40rpx 0 0
				overflow hidden
				.nav-type
					padding 0 24rpx
					height 88rpx
					line-height 88rpx
					border-bottom 1px solid #f2f2f2
					text
						margin-right 56rpx
						height 100%
						font-size 32rpx
						color #2d2c37
						&.on
							position relative
							font-size 34rpx
							font-weight 600
							&::after
								content ''
								position absolute
								left 50%
								bottom 0
								width 40rpx
								height 12rpx
								margin-left -20rpx
								background-color #ff8c04
								border-radius 10rpx
				.nav-category
					height 72rpx
					line-height 72rpx
					white-space nowrap
					text
						margin 0 10rpx
						padding 0 20rpx
						height 40rpx
						line-height 40rpx
						background-color #f1f1f1
						border-radius 10rpx
						font-size 26rpx
						font-weight bold
						color #2d2c37
						&.on
							background-color rgba(0,147,187,.15)
							color #0093bb
		.list
			padding 20rpx 24rpx 10rpx
			height 50%
			overflow-y auto
			.item
				margin-bottom 30rpx
				height 256rpx
</style>
