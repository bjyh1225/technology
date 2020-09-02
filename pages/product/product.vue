<template>
	<view class="product-container page-h100 d-flex d-flex-column">
		<view class="product-head d-flex-unShrink d-flex d-flex-middle">
			<view class="product-search d-flex-item d-flex d-flex-middle">
				<image src="../../static/icon-search.png"/>
				<input type="text" placeholder="请输入产品名称"/>
			</view>
			<view @click="isShowFilter=true" class="product-filter d-flex-unShrink d-flex d-flex-middle"><image src="../../static/icon-filter.png"/>筛选</view>
		</view>
		<view class="product-list d-flex-item">
			<view v-for="(item,index) in list" :key="index" class="product-item">
				<product-item origin="product" @toDetail="toDetail" :info="item"/>
			</view>
		</view>
		<filter-pop @sure="sure" @cancel="cancel" :isShow="isShowFilter"/>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import ProductItem from '../../components/productItem.vue'
	import FilterPop from '../../components/filter.vue'
	
	export default {
		components:{
			ProductItem,
			FilterPop
		},
		data() {
			return {
				list:['','',''],
				isShowFilter:false
			}
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'../detail/detail'
				})
			},
			sure(){
				this.isShowFilter=false
			},
			cancel(){
				this.isShowFilter=false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page
		height 100%
		background-color #f0f0f0
	.product-container
		.product-head
			position relative
			z-index 1
			padding 30rpx 24rpx
			background-color #fff
			box-shadow 0 0 10rpx 0 rgba(0,0,0,.1)
			.product-search
				width 50%
				height 62rpx
				background-color #f0f0f0
				border-radius 35rpx
				image
					padding 16rpx 18rpx 16rpx 26rpx
					width 30rpx
					height 30rpx
					box-sizing content-box
				input
					padding-right 20rpx
					width 50%
					height 100%
					font-size 26rpx
					color #333
			.product-filter
				margin-left 30rpx
				font-size 30rpx
				color #0093bb
				image
					margin-right 8rpx
					width 19rpx
					height 20rpx
		.product-list
			padding 24rpx
			height 50%
			overflow-y auto
			.product-item
				margin-bottom 24rpx
</style>
