<template>
	<view class="authorize-contain d-flex d-flex-center d-flex-column">
		<image class="img-icon" src="../../static/login-icon.png" mode=""></image>
		<view class="d-flex d-flex-center d-flex-middle btn">微信用户一键登录</view>
		<text class="center-s font1">手机号验证注册/登录</text>
		<view class="d-flex d-flex-column detail">
			<text class="font-color-g font2 center-s">若你的手机号未注册，将为你直接注册，注册即视为同意</text>
			<text class="font-color-b font2 center-s">《服务条款》</text>	
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
			
		}
	}
</script>

<style scoped>
page{
		height: 100%;
		width: 100%;	
	}
	.img-icon{
		width: 280rpx;
		height: 280rpx;
		margin: 130rpx auto 130rpx;	
	}
	.btn{
		width: 90%;
		height: 90rpx;
		background: #0093BB;
		border-radius: 20rpx;
		margin: 0 auto;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 32rpx;
	}
	.center-s{
		text-align: center;
	}
	.font-color-g{
		color: #7B7B7B;
	}
	.font-color-b{
		color: #0093BB;
	}
	.font1{
		height: 90rpx;
		line-height: 90rpx;
	}
	.font2{
		height: 40rpx;
		line-height: 40rpx;
	}
	.detail{
		position:absolute;
		bottom: 100rpx;
	}
</style>
