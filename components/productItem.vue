<template>
	<view class="product-item-container d-flex d-flex-column">
		<image @click="toDetail" src="../static/img01.png" class="img"/>
		<view @click="toDetail" class="title d-ellipsis-single">AtlaScan 多模式多功能量测3D扫描仪</view>
		<view class="d-flex d-flex-middle d-flex-between">
			<view class="module">型号123456</view>
			<view v-if="origin=='product'" class="star d-flex d-flex-middle"><image src="../static/icon-star.png"/>33</view>
			<view v-else-if="origin=='apply'" class="pledge d-flex d-flex-middle"><image src="../static/icon-pledge.png"/><text>¥</text>600.00</view>
		</view>
		<template v-if="origin=='order'">
			<view class="money d-flex d-flex-middle d-flex-between">
				<view>押金</view>
				<text>¥600.00</text>
			</view>
			<view class="money d-flex d-flex-middle d-flex-between">
				<view>租金/月</view>
				<text>¥2000.00</text>
			</view>
		</template>
	</view>
</template>

<script>
	/* 产品租用列表、产品租用申请、产品租用合计  引用了这个组件*/
	export default {
		props:['origin','info'], // origin ： product===>产品列表 apply===>租用申请 order===>租用付款
		data(){
			return {}
		},
		methods:{
			toDetail(){
				this.$emit('toDetail')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.product-item-container
		padding 20rpx 20rpx 30rpx
		background-color #fff
		border-radius 14rpx
		.img
			width 100%
			height 450rpx
			border 1px solid #f2f2f2
			border-radius 12rpx
			box-sizing border-box
		.title
			margin 30rpx 0 28rpx
			font-size 34rpx
			color #212121
		.module
			font-size 26rpx
			color #454545
		.star
			font-size 24rpx
			color #939393
			image
				margin-right 8rpx
				width 32rpx
				height 32rpx
		.pledge
			font-size 36rpx
			font-weight bold
			color #f00
			image
				margin-right 15rpx
				width 17rpx
				height 17rpx
			text
				font-size 30rpx
		.money
			margin-top 30rpx
			font-size 28rpx
			color #000
			text
				font-size 26rpx
				font-weight bold
				color #f00
</style>
