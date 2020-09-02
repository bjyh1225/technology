<template>
	<view class="login-contant d-flex d-flex-column d-flex-center">
		<image class="icon-size" src="../../static/login-icon.png" mode=""></image>
		<view class="login">
			<tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></tab>
			<mesage v-if="TabCur===0"></mesage>
			<password v-if="TabCur===1"></password>
			<button class="btn">登陆/注册</button>
			<view class="d-flex d-flex-column text-ce">
				<text>未注册的手机号验证后将自动登录</text>
				<text>登录即表示同意《服务协议》</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Tab from '@/components/tab.vue';
	import Mesage from '@/components/login/mesage.vue';
	import Password from '@/components/login/password.vue';
	export default {
		components:{
			Tab,
			Mesage,
			Password
		},
		data() {
			return {
				visible: false,
				TabCur: 0,
				tabList: [{
					name: '短信登陆注册'
				}, {
					name: '密码登陆'
				}],
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		height: 100%;
		width: 100%;
		background: url('~@/static/login-bg.png') no-repeat 0 0;
		background-size: 100%; 
		position: relative;
	}
	.icon-size{
		width 160rpx;
		height 160rpx;
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translate(-50%,-30%);
		z-index: 9;
	}
	.login{
		padding-top:30rpx; 
		width: 90%;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0 0;
		position: absolute;
		top: 26%;
		left: 5%;
	}
	
	.btn{
		position: relative;
		top: 80rpx;
		width: 80%;
		margin: 0 auto;
		height: 80rpx;
		background: #0093BB;
		color: #FFFFFF;
		border-radius: 80rpx;
		margin: 0 auto;
	}
	.text-ce{
		margin: 0 auto;
		color: #999999 ;
		position: relative;
		margin-top: 20%;
		text-align: center;
	}
	
</style>
