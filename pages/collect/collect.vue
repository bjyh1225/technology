<template>
	<view class="collect-container page-h100 d-flex d-flex-column">
		<view class="head d-flex-unShrink"></view>
		<view class="list d-flex-item">
			<view class="list-size">
				<view v-for="(item,index) in 10" :key="index" class="item">
					<!-- <info-item :info="item"/> -->
					<view class="list-item">
						<view><image class="item-img" src="../../static/ban01.png" mode=""></image></view>
						<view class="font-border">
							<view><text class="item-font1">dg国反倒是柔肤水倒是第三方公司的风格对方公司的库接收不到伐水电费sfgs</text><text>>></text></text></view>
							<view><text class="item-font2">hdd沙对方公司的发上</text></view>
							<view><image class="icon-size" src="../../static/icon-collect.png" mode=""></image><text class="item-font3">thw按时按是的时ee</text></view>
						</view>
					</view>
						
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import InfoItem from '../../components/informationItem.vue'
	
	export default {
		components:{
			InfoItem
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
		background-color #f0f0f0
	.collect-container
		position relative
		.head
			height 350rpx
			background url('~@/static/collect-head-bg.png') no-repeat 0 0
			background-size 100%			
		.list
			left 24rpx
			right 24rpx
			top 280rpx
			padding 30rpx 24rpx 5rpx 24rpx
			height 77%
			overflow-y auto
			position absolute
			background-color #FFFFFF
			border-radius 20rpx
			.list-size
			    position absolute
				left 24rpx
				right 24rpx
				border-radius 20rpx 
				.list-item
					display: flex;
					justify-content: space-around
					align-items: center
					.item-img 
						width:160rpx
						height 179rpx
					.font-border
						width 372rpx
						.item-font2
							font-size 20rpx
							color #0093BA
						.icon-size
							width 26rpx
							height 26rpx
							vertical-align middle
						.item-font3
							font-size 30rpx
							color #A0A0A0
							margin-left 10rpx 
			.item
				margin-bottom 24rpx
</style>
