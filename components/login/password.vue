<template>
	<view>
		<view class="setPersonal">
			<input type="text" placeholder="请输入手机号">
		</view>
		<view class="setPersonal">
			<input type="text" placeholder="请输入登录密码">
			<text class="text-col">忘记密码</text>
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
	
	.text-col{
		color: #81C5D8;
		position: absolute;
		top: 80%;
		right: 10%;
		font-size: 30rpx;
	}
</style>
