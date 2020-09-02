		<template>
			<view>
				<view class="d-flex d-flex-column content">
					<text>更换绑定手机号后，下次可以使用新手机号登陆。</text>
					<text>当前绑定手机号18108617207</text>	
				</view>
				<view class="setPersonal">
					<input type="text" placeholder="请输入你要绑定的手机号">
				</view>
				<view class="setPersonal">
					<input type="text" placeholder="请输入验证码">
					<button class="btn-mini">获取验证码</button>
				</view>
				<button class="btn">确认绑定</button>
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
			.content{
				width: 100%;
				text-align: center;
				margin: 30rpx 0;
			}
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
			.font-weight{
				font-weight: bold;
			}
			.btn-mini{
				height: 80rpx;
				background: #0093BB;
				color: #FFFFFF;
				border-radius: 15rpx;
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
			}
		</style>
		