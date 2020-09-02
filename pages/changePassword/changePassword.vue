<template>
	<view>
		<view class="setPersonal">
			<text class="font-weight">原登录密码</text>
			<input class="text-dir" type="password" value="">
		</view>
		<view class="setPersonal">
			<text class="font-weight">请输入新密码</text>
			<input class="text-dir" type="password" value="">
		</view>
		<view class="setPersonal">
			<text class="font-weight">再次输入</text>
			<input class="text-dir" type="password" value="">
		</view>
		<button class="btn">
			保存
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.setPersonal {
		display: flex;
		/* justify-content: space-between; */
		justify-content: flex-start;
		align-items: center;
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
		margin: 0 auto;
		position: relative;
	}
	.font-weight{
		font-weight: bold;
	}
	.text-dir{
		width: 400rpx;
		position: absolute;
		right: 60rpx;
	}
	.btn{
		position: relative;
		top: 80rpx;
		width: 90%;
		margin: 0 auto;
		height: 80rpx;
		background: #0093BB;
		color: #FFFFFF;
		border-radius: 15rpx;
		letter-spacing: 20rpx;
	}
</style>
