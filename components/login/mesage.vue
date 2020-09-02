<template>
	<view>
		<view class="setPersonal">
			<input type="text" placeholder="请输入手机号">
		</view>
		<view class="setPersonal">
			<input type="text" placeholder="短信验证码">
			<button class="btn-mini">获取验证码</button>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	.setPersonal {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
		margin: 0 auto;
		position: relative;
	}
	/* .font-weight{
		font-weight: bold;
	} */
	.btn-mini{
		height: 80rpx;
		font-size: 32rpx;
		// background: #0093BB;
		// color: #8B9DB9;
		border-radius: 15rpx;
	}
	
</style>
