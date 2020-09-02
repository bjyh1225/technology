<template>
	<view class="profile-container">
		<view class="sec d-flex d-flex-middle">
			<text class="label d-flex-unShrink">公司/个人名称</text>
			<input class="input d-flex-item" type="text" placeholder="请输入公司/个人名称"/>
		</view>
		<view class="sec d-flex d-flex-middle">
			<text class="label d-flex-unShrink">地址</text>
			<view @click="selectAddress" class="address d-flex-item d-flex d-flex-middle d-flex-end">{{address}}</view>
			<image src="../static/icon-arrow-right.png" class="arrow d-flex-unShrink"/>
		</view>
		<view v-if="origin=='engineer'" class="detail d-flex">
			<text class="label d-flex-unShrink">详细地址</text>
			<textarea v-model.trim="detail" placeholder="请输入详细地址" class="text d-flex-item"></textarea>
		</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#0093bb"/>
	</view>
</template>

<script>
	/* 城市选择插件 ：https://ext.dcloud.net.cn/plugin?id=1084 */
	/* 产品/工程师租用申请 页面引用了这个组件 */
	import SimpleAddress from './simple-address/simple-address.vue'
	export default {
		props:['origin'],  // origin  product===>产品租用申请  engineer===>工程师租用申请
		components:{
			SimpleAddress
		},
		data(){
			return {
				cityPickerValueDefault: [0, 0, 1],
				address:'请选择地址',
				detail:''
			}
		},
		methods:{
			selectAddress(){
				this.$refs.simpleAddress.open();
			},
			onConfirm(e){
				console.log(e)
				this.address=e.label
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.profile-container
		padding 16rpx
		background-color #fff
		border-radius 10rpx
		.label
			margin-right 30rpx
			line-height 88rpx
			font-size 28rpx
			font-weight bold
			color #000
		.sec
			height 88rpx
			border-bottom 1px solid #f2f2f2
			&:last-child
				border-bottom 0
			.input
				width 50%
				height 100%
				text-align right
				font-size 30rpx
				color #333
			.address
				width 50%
				height 100%
				text-align right
				font-size 26rpx
				color #333
			.arrow
				margin-left 14rpx
				width 14rpx
				height 26rpx
		.detail
			.text
				padding-top 28rpx
				width 50%
				height 80rpx
				resize none
				font-size 26rpx
				color #333
</style>
