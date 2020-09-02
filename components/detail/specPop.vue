<template>
	<view class="detail-spec-pop-container">
		<view :class="{show:isShow}" class="content d-flex d-flex-column">
			<image @click="close" src="../../static/icon-close.png" class="close"/>
			<view class="list">
				<view v-for="(item,index) in 4" :key="index" class="item d-flex d-flex-middle">
					<text class="d-flex-unShrink">一天{{index}}</text>
					<view :class="{on:index==0}" class="d-flex-item d-flex d-flex-middle d-flex-center">100 元</view>
				</view>
			</view>
			<view @click="sure" class="btn d-flex d-flex-middle d-flex-center">立即租用</view>
		</view>
		<view :class="{show:isShow}" class="bg"></view>
	</view>
</template>

<script>
	export default {
		props:['isShow','info'],
		data(){
			return {
				// isShow:false
			}
		},
		methods:{
			close(){
				this.$emit('onClose')
			},
			sure(){
				uni.navigateTo({
					url:'../../pages/productRent/productRent'
				})
			}
		},
		onShow() {
			// this.isShow=true
		}
	}
</script>

<style lang="stylus" scoped>
	.detail-spec-pop-container
		
		.bg
			position fixed
			z-index 99
			top 0
			left 0
			right 0
			bottom 0
			background-color rgba(0,0,0,0)
			opacity 0
			visibility hidden
			transition all 0.2s
			&.show
				opacity 1
				visibility visible
				background-color rgba(0,0,0,.6)
		.content
			position fixed
			z-index 100
			left 0
			bottom -100%
			right 0
			max-height 750rpx
			padding 100rpx 40rpx 35rpx
			background-color #fff
			border-radius 25rpx 25rpx 0 0
			opacity 1
			visibility visible
			transition all 0.3s
			&.show
				bottom 0
			.close
				position absolute
				top 40rpx
				right 35rpx
				width 36rpx
				height 36rpx
			.list
				padding 0 16rpx
				height 50%
				overflow-y auto
				.item
					margin-bottom 40rpx
					text
						margin-right 44rpx
						font-size 26rpx
						color #282828
					view
						width 50%
						height 80rpx
						background-color #f4f4f4
						border-radius 20rpx
						font-size 30rpx
						font-weight bold
						color #282828
						&.on
							background-color #0093bb
							color #fff
			.btn
				margin-top 20rpx
				height 80rpx
				background-color #0093bb
				border-radius 20rpx
				font-size 30rpx
				font-weight bold
				color #fff
</style>
