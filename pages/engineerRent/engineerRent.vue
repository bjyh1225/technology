<template>
	<view class="engineer-rent-container page-h100 d-flex d-flex-column">
		<view class="content d-flex-item">
			<profile origin="engineer"/>
			<view style="height: 20rpx;"></view>
			<!-- <view class="info">
				<view class="sec d-flex d-flex-middle">
					<text class="label d-flex-unShrink">公司/个人名称</text>
					<input class="input d-flex-item" type="text" placeholder="请输入公司/个人名称"/>
				</view>
				<view class="sec d-flex d-flex-middle">
					<text class="label d-flex-unShrink">地址</text>
					<view class="address d-flex-item d-flex d-flex-middle d-flex-end">请填写地址</view>
					<image src="../../static/icon-arrow-right.png" class="arrow d-flex-unShrink"/>
				</view>
				<view class="detail d-flex">
					<text class="label d-flex-unShrink">详细地址</text>
					<textarea placeholder="请输入详细地址" class="text d-flex-item"></textarea>
				</view>
			</view> -->
			<add-engineer/>
			<!-- <view class="engineer">
				<view class="head d-flex d-flex-middle">
					<text class="label">增加工程师</text>
					<view class="head-btn d-flex d-flex-middle"><image src="../../static/icon-add.png"/>添加</view>
				</view>
				<view class="item d-flex d-flex-middle d-flex-between">
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
			</view> -->
		</view>
		<view class="foot d-flex-unShrink">
			<view @click="next" class="btn d-flex d-flex-middle d-flex-center">下一步</view>
		</view>
	</view>
</template>

<script>
	
	import util from '../../common/util.js'
	import Profile from '../../components/profile.vue'
	import AddEngineer from '../../components/addEngineer.vue'
	
	export default {
		components:{
			Profile,
			AddEngineer
		},
		data() {
			return {
				
			}
		},
		methods: {
			// 下一步
			next(){
				uni.navigateTo({
					url:'../rentProtocol/rentProtocol?type=engineer'
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
	.engineer-rent-container{
		.content{
			padding 40rpx 24rpx
			height 50%
			overflow-y auto
			/* .info{
				margin-bottom 24rpx
				padding 16rpx
				background-color #fff
				border-radius 10rpx
				.label{
					margin-right 30rpx
					line-height 88rpx
					font-size 28rpx
					font-weight bold
					color #000
				}
				.sec{
					height 88rpx
					border-bottom 1px solid #f2f2f2
					.input{
						width 50%
						height 100%
						text-align right
						font-size 30rpx
						color #333
					}
					.address{
						width 50%
						height 100%
						text-align right
						font-size 26rpx
						color #333
					}
					.arrow{
						margin-left 14rpx
						width 14rpx
						height 26rpx
					}
				}
				.detail{
					.text{
						padding-top 28rpx
						width 50%
						height 80rpx
						resize none
						font-size 26rpx
						color #333
					}
				}
			}
			.engineer{
				padding 16rpx
				background-color #fff
				border-radius 10rpx
				.head{
					height 88rpx
					.label{
						font-size 30rpx
					}
					.head-btn{
						font-size 24rpx
						color #929292
						image{
							margin-right 8rpx
							width 34rpx
							height 34rpx
						}
					}
				}
				.item{
					margin 20rpx 0
					color #000
					.name{
						font-size 26rpx
					}
					.money{
						font-size 24rpx
						font-weight bold
						.num{
							margin-left 18rpx
							width 215rpx
							height 60rpx
							border 4rpx solid #f3f3f3
							border-radius 30rpx
							box-sizing border-box
							.btn{
								width 30%
								height 100%
								&.minus{
									background url('~@/static/icon-minus.png') no-repeat center center
									background-size 16rpx 16rpx
								}
								&.plus{
									background url('~@/static/icon-plus.png') no-repeat center center
									background-size 16rpx 16rpx
								}
							}
							.day{
								width 40%
								height 100%
								border-left 2rpx solid #f3f3f3
								border-right 2rpx solid #f3f3f3
								box-sizing border-box
							}
						}
					}
				}
			} */
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
