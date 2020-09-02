<template>
	<view class="rent-protocol-container page-h100 d-flex d-flex-column">
		<view class="content d-flex-item">
			<view class="pdf d-flex d-flex-middle">
				<image src="../../static/icon-pdf.png" class="img d-flex-unShrink"/>
				<view class="title d-flex-item">工程师租用协议PDF</view>
				<view class="prev d-flex-unShrink d-flex d-flex-column d-flex-middle">
					<image src="../../static/icon-pdf-preview.png"/>
					<view>预览</view>
				</view>
			</view>
		</view>
		<view class="foot d-flex-unShrink">
			<view @click="toSignature" class="btn d-flex d-flex-middle d-flex-center">去签名</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toSignature(){
				uni.navigateTo({
					url:'../signature/signature?type='+this.type
				})
			}
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
	.rent-protocol-container{
		.content{
			padding 145rpx 75rpx 50rpx
			height 50%
			overflow-y auto
			.pdf{
				padding 28rpx 60rpx 28rpx 35rpx
				background-color #fff
				.img{
					margin-right 18rpx
					height 96rpx
					width 96rpx
				}
				.title{
					width 50%
					font-size 34rpx
					color #111
				}
				.prev{
					margin-left 40rpx
					font-size 26rpx
					color #808080
					image{
						margin-bottom 4rpx
						width 42rpx
						height 42rpx
					}
				}
			}
		}
		.foot{
			padding 20rpx 24rpx
			background-color #fff
			.btn{
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
