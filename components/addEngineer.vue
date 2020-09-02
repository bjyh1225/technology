<template>
	<view class="add-engineer-container">
		<view class="head d-flex d-flex-middle">
			<text class="label">增加工程师</text>
			<view class="head-btn d-flex d-flex-middle"><image src="../static/icon-add.png"/>添加</view>
		</view>
		<view v-for="(item,index) in 3" :key="index" class="item d-flex d-flex-middle d-flex-between">
			<view class="name">维修工程师</view>
			<view class="money d-flex d-flex-middle">
				¥100元
				<view class="num d-flex d-flex-middle">
					<view class="minus btn"></view>
					<view class="day d-flex d-flex-center d-flex-middle">1天</view>
					<view class="plus btn"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.add-engineer-container
		padding 16rpx
		background-color #fff
		border-radius 10rpx
		.head
			height 88rpx
			.label
				margin-right 30rpx
				line-height 88rpx
				font-size 30rpx
				font-weight bold
				color #000
			.head-btn
				font-size 24rpx
				color #929292
				image
					margin-right 8rpx
					width 34rpx
					height 34rpx
		.item
			margin 20rpx 0
			color #000
			.name
				font-size 26rpx
			.money
				font-size 24rpx
				font-weight bold
				.num
					margin-left 18rpx
					width 215rpx
					height 60rpx
					border 4rpx solid #f3f3f3
					border-radius 30rpx
					box-sizing border-box
					.btn
						width 30%
						height 100%
						&.minus
							background url('~@/static/icon-minus.png') no-repeat center center
							background-size 16rpx 16rpx
						&.plus
							background url('~@/static/icon-plus.png') no-repeat center center
							background-size 16rpx 16rpx
					.day
						width 40%
						height 100%
						border-left 2rpx solid #f3f3f3
						border-right 2rpx solid #f3f3f3
						box-sizing border-box
</style>
