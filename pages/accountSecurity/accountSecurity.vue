<template>
	<view>
		<navigator class="setPersonal" url="../changePassword/changePassword">
			<view>
				<text class="font-weight">修改登录密码</text>
			</view>
			<view>
				<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
			</view>
		</navigator>
		<navigator class="setPersonal" url="../bindPhone/bindPhone">
			<view>
				<text class="font-weight">绑定手机号</text>
			</view>
			<view>
				<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
			</view>
		</navigator>

		<navigator class="setPersonal">
			<view>
				<text class="font-weight">注销账户</text>
			</view>
			<view class="input-line">
				<view>
					<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
				</view>
			</view>
		</navigator>
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
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
		margin: 0 auto;
	}
	.font-weight{
		font-weight: bold;
	}
	.image-size {
		width: 90rpx;
		height: 90rpx;
		vertical-align: middle;
	}

	.image-icon {
		width: 14rpx;
		height: 26rpx;
		margin-left: 32rpx;
		vertical-align: middle;
	}

	.input-line {
		line-height: 50rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: #BBBBBB;
	}

	.input-line view:nth-child(1) {
		text-align: right;
	}
</style>
