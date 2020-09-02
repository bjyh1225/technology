<template>
	<view class="confirm-engineer-list-container">
		<view class="head d-flex d-flex-middle">
			<text>工程师</text>
			<text class="center">时间</text>
			<text class="right">金额</text>
		</view>
		<view v-for="(item,index) in 5" :key="index" class="item d-flex d-flex-middle">
			<text>维修工程师</text>
			<text class="center">1天</text>
			<text class="red right">¥100.00</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.confirm-engineer-list-container
		padding 10rpx 20rpx
		background-color #fff
		border-radius 14rpx
		.center
			text-align center
		.right
			text-align right
		text
			width 33.333333%
			color #000
		.head
			height 70rpx
			font-size 30rpx
			font-weight bold
		.item
			height 56rpx
			text
				font-size 26rpx
				&.red
					color #f00
				&:first-child
					font-size 28rpx
				&:nth-child(2)
					font-weight bold
</style>
