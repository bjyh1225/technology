<template>
	<view class="address-edit-container">
		<view class="form">
			<view class="item d-flex d-flex-middle">
				<text class="d-flex-unShrink">收货人</text>
				<input class="d-flex-item" type="text" placeholder="请输入您的姓名"/>
			</view>
			<view class="item d-flex d-flex-middle">
				<text class="d-flex-unShrink">手机号</text>
				<input class="d-flex-item" type="text" placeholder="请输入您的电话"/>
			</view>
			<view class="item d-flex d-flex-middle">
				<text class="d-flex-unShrink">所在地区</text>
				<view @click="selectAddress" class="d-flex-item">请选择您的所在地区</view>
				<image src="../../static/icon-arrow-right.png" class="d-flex-unShrink"/>
			</view>
			<view class="item d-flex d-flex-middle">
				<text class="d-flex-unShrink">详细地址</text>
				<textarea class="d-flex-item" placeholder="请填写您的详细街道门牌号信息"></textarea>
			</view>
		</view>
		<view class="default d-flex d-flex-middle d-flex-between">
			<view>设置为默认地址</view>
			<switch @change="setDefault" color="#0093bb"/>
		</view>
		<view class="foot">
			<view class="btn d-flex d-flex-middle d-flex-center">保存收货地址</view>
		</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#0093bb"/>
	</view>
</template>

<script>
	/* 城市选择插件 ：https://ext.dcloud.net.cn/plugin?id=1084 */
	import SimpleAddress from '../../components/simple-address/simple-address.vue'
	export default {
		components:{
			SimpleAddress
		},
		data() {
			return {
				cityPickerValueDefault: [0, 0, 1],
			}
		},
		methods: {
			selectAddress(){
				this.$refs.simpleAddress.open();
			},
			onConfirm(e){
				console.log(e)
				this.address=e.label
			},
			setDefault(e){
				console.log(e.detail.value)
			}
		},
		onLoad(option){
			var title=option.mode=='edit'?'编辑收货地址':'新增收货地址'
			uni.setNavigationBarTitle({
				title:title
			})
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		background-color #f0f0f0
	}
	.address-edit-container{
		padding 50rpx 0
		.form{
			padding 0 24rpx 30rpx 40rpx
			background-color #fff
			border-radius 20rpx
			box-shadow 0 2px 16rpx 0 rgba(0,111,255,.08)
			.item{
				height 120rpx
				border-bottom 1px solid #f2f2f2
				text{
					width 240rpx
					font-size 30rpx
					font-weight bold
					color #000
				}
				input{
					width 50%
					height 80rpx
					font-size 28rpx
					font-weight bold
					color #333
				}
				view{
					width 50%
					font-size 28rpx
					font-weight bold
					color #333
				}
				image{
					margin-left 20rpx
					width 14rpx
					height 26rpx
				}
				textarea{
					padding-top 30rpx
					width 50%
					height 80rpx
					font-size 28rpx
					font-weight bold
					color #333
				}
			}
		}
		.default{
			margin-top 32rpx
			padding 0 24rpx 0 50rpx
			height 88rpx
			background-color #fff
			border-radius 20rpx
			box-shadow 0 2px 16rpx 0 rgba(0,111,255,.08)
			font-size 28rpx
			font-weight bold
			color #000
		}
		.foot{
			padding 150rpx 24rpx 0
			.btn{
				height 82rpx
				background-color #0093bb
				border-radius 20rpx
				font-size 36rpx
				font-weight bold
				color #fff
			}
		}
	}
</style>
