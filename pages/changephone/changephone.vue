<template>
	<view class="contain d-flex d-flex-column d-flex-center">
		<image class="img-pos" src="../../static/change-phone.png" mode=""></image>
		<text>当前绑定的手机号是：181****7207</text>
		<button class="btn" @click="changePh">去更换绑定手机号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			changePh() {
				uni.navigateTo({
					url: '../chageNewPhone/chageNewPhone'
				});
			}
		}
	}
</script>

<style scoped>
	.contain {
		width: 100%;
		text-align: center;
		/* margin: 0 auto; */
	}

	.img-pos {
		margin: 0 auto;
		margin-bottom: 40rpx;
	}

	.font-weight {
		font-weight: bold;
	}

	.btn-mini {
		height: 80rpx;
		background: #0093BB;
		color: #FFFFFF;
		border-radius: 15rpx;
	}

	.btn {
		position: relative;
		top: 80rpx;
		width: 90%;
		margin: 0 auto;
		height: 80rpx;
		background: #0093BB;
		color: #FFFFFF;
		border-radius: 15rpx;
	}
</style>
