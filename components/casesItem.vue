<template>
	<view :class="{cases:origin=='cases'}" class="cases-item-container d-flex">
		<image src="../static/img02.png" :class="{cases:origin=='cases'}" class="img d-flex-unShrink"/>
		<view :class="{cases:origin=='cases'}" class="info d-flex-item d-flex d-flex-column">
			<view class="d-flex-item">
				<view :class="{cases:origin=='cases'}" class="title d-ellipsis-single">AtlaScan在新能源汽车底板检...</view>
				<view :class="{cases:origin=='cases'}" class="desc d-ellipsis-multiple">新能源汽车是指采用非常规的车用燃料作为动力来源新能源汽车是指采用非常规的车用燃料作为动力来源</view>
			</view>
			<view class="botm d-flex-unShrink d-flex d-flex-middle d-flex-between">
				2020-06-29
				<image src="../static/icon-more.png"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['origin','info'], // origin index===>首页 , cases===>应用案例
		data(){
			return {}
		}
	}
</script>

<style lang="stylus" scoped>
	.cases-item-container
		width 100%
		height 100%
		background-color #fff
		&.cases
			background-color #f0fcff
			border-radius 10rpx
			box-shadow 0 3rpx 18rpx 0 rgba(237,237,237,.5)
		.img
			width 260rpx
			height 100%
			&.cases
				width 320rpx
				border-radius 10rpx
		.info
			padding 18rpx 24rpx 16rpx 15rpx
			width 50%
			height 100%
			box-sizing border-box
			&.cases
				padding 26rpx 24rpx 26rpx 15rpx
			.title
				font-size 26rpx
				color #4C4C4C
				&.cases
					font-size 32rpx
					color #3a3a3a
			.desc
				margin-top 4rpx
				height 56rpx
				line-height 28rpx
				-webkit-line-clamp 2
				font-size 24rpx
				color #999
				&.cases
					margin-top 30rpx
					height 70rpx
					line-height 35rpx
			.botm
				font-size 24rpx
				color #d2d1d9
				image
					width 9rpx
					height 31rpx
</style>
