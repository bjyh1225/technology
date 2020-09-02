<template>
	<view class="product-filter-container">
		<view :class="{show:isShow}" class="content d-flex d-flex-column">
			<view class="list d-flex-item">
				<view v-for="(item,index) in 7" :key="index" class="item">
					<view class="title">激光颜色</view>
					<view class="param d-flex d-flex-wrap">
						<text class="d-flex d-flex-middle d-flex-center">蓝光</text>
						<text class="d-flex d-flex-middle d-flex-center">红光</text>
						<text class="d-flex d-flex-middle d-flex-center">白光</text>
						<text class="d-flex d-flex-middle d-flex-center">白光1111</text>
					</view>
				</view>
			</view>
			<view class="foot d-flex-unShrink d-flex d-flex-end d-flex-middle">
				<view class="reset d-flex d-flex-middle d-flex-center">重置</view>
				<view @click="sure" class="sure d-flex d-flex-middle d-flex-center">确认</view>
			</view>
		</view>
		<view @click="cancel" :class="{show:isShow}" class="bg"></view>
	</view>
</template>

<script>
	export default {
		props:['isShow','info'],
		methods:{
			sure(){
				this.$emit('sure')
			},
			cancel(){
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.product-filter-container
		.content
			position fixed
			z-index 100
			top var(--window-top)
			right -100%
			bottom var(--window-bottom)
			padding 2rpx 0 55rpx 40rpx
			width 610rpx
			background-color #fff
			border-radius 10rpx 0 0 10rpx
			box-sizing border-box
			transition all 0.3s
			&.show
				right 0
			.list
				height 50%
				overflow-y auto
				.item
					margin 60rpx 0 10rpx
					.title
						font-size 26rpx
						font-weight bold
						color #191919
					.param
						padding-top 5rpx
						text
							margin 16rpx 16rpx 0 0
							width 170rpx
							height 88rpx
							background-color #f8f8f8
							border-radius 6rpx
							font-size 28rpx
							color #666
							&.on
								background-color #0093BB
								color #fff
			.foot
				margin-top 40rpx
				view
					margin-right 24rpx
					width 192rpx
					height 60rpx
					border-radius 20rpx
					font-size 26rpx
					box-sizing border-box
					&.reset
						border 1px solid #0093BB
						color #0093BB
					&.sure
						background-color #0093BB
						color #fff
		.bg
			position fixed
			z-index 99
			left 0
			top 0
			right 0
			bottom 0
			background-color rgba(0,0,0,.8)
			transition all 0.3s
			visibility hidden
			opacity 0
			&.show
				visibility visible
				opacity 1
</style>
