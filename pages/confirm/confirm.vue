<template>
	<view class="confirm-container page-h100 d-flex d-flex-column">
		<view class="content d-flex-item">
			<confirm-head/>
			<view class="staff"></view>
			<template v-if="type=='product'">
				<view>
					<product-item origin="order"/>
				</view>
				<view class="staff"></view>
			</template>
			<engineer-list/>
			<view v-if="type=='engineer'" class="invoice d-flex d-flex-middle d-flex-between">
				<view class="d-flex-unShrink">发票信息</view>
				<text>请选择</text>
			</view>
		</view>
		<view class="foot d-flex-unShrink d-flex d-flex-middle d-flex-between">
			<view class="money d-flex d-flex-middle">合计金额：<text>¥2999.99</text></view>
			<view class="btn d-flex-unShrink d-flex d-flex-middle d-flex-center">去支付</view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import ConfirmHead from '../../components/confirm/head.vue'
	import EngineerList from '../../components/confirm/engineerList.vue'
	import ProductItem from '../../components/productItem.vue'
	
	export default {
		components:{
			ConfirmHead,
			EngineerList,
			ProductItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(option){
			this.type=option.type  // product===>产品租用  engineer===>工程师租用
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		height 100%
		background-color #f0f0f0
	}
	.confirm-container{
		.content{
			padding 20rpx 24rpx
			height 50%
			overflow-y auto
			.staff{
				height 20rpx
			}
			.invoice{
				margin-top 25rpx
				padding 0 22rpx
				height 76rpx
				background-color #fff
				border-radius 10rpx
				view{
					font-size 28rpx
					color #000
				}
				text{
					font-size 26rpx
					color #999
				}
			}
		}
		.foot{
			position relative
			padding 0 25rpx
			height 122rpx
			background-color #fff
			box-shadow 0 0 10rpx 0 rgba(0,0,0,.1)
			.money{
				font-size 32rpx
				font-weight bold
				color #282828
				text{
					font-size 36rpx
					color #df2d20
				}
			}
			.btn{
				margin-left 20rpx
				width 206rpx
				height 80rpx
				background-color #0093bb
				border-radius 20rpx
				font-size 30rpx
				font-weight bold
				color #fff
			}
		}
	}
</style>
