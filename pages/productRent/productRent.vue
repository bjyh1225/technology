<template>
	<view class="product-rent-container page-h100 d-flex d-flex-column">
		<view class="content d-flex-item">
			<product-item origin="apply"/>
			<view style="height: 20rpx;"></view>
			<profile/>
			<view style="height: 20rpx;"></view>
			<add-engineer/>
		</view>
		<view class="foot d-flex-unShrink">
			<view @click="next" class="btn d-flex d-flex-middle d-flex-center">下一步</view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import ProductItem from '../../components/productItem.vue'
	import Profile from '../../components/profile.vue'
	import AddEngineer from '../../components/addEngineer.vue'
	
	export default {
		components:{
			ProductItem,
			Profile,
			AddEngineer
		},
		data() {
			return {
				
			}
		},
		methods: {
			next(){
				uni.navigateTo({
					url:'../rentProtocol/rentProtocol?type=product'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		height 100%
		background-color #f0f0f0
	}
	.product-rent-container{
		.content{
			padding 20rpx 24rpx
			height 50%
			overflow-y auto
		}
		.foot{
			padding 20rpx 35rpx
			background-color #fff
			.btn{
				height 80rpx
				background-color #0093bb
				border-radius 40rpx
				font-size 30rpx
				font-weight bold
				color #fff
			}
		}
	}
</style>
