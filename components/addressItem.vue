<template>
	<view class="address-item-container">
		<view @click="select" class="body">
			<view class="name d-flex d-flex-between">
				<view>收货人：王若云</view>
				<text>027-67801555</text>
			</view>
			<view class="address">收货地址：湖北省武汉市百捷科技园A座</view>
		</view>
		<view class="foot d-flex d-flex-middle d-flex-between">
			<view v-if="isDefault" class="default d-flex d-flex-middle d-flex-center">默认</view>
			<view v-else></view>
			<view class="d-flex d-flex-middle">
				<view @click="del" class="btn d-flex d-flex-bottom"><image src="../static/icon-trush.png"/>删除</view>
				<view @click="edit" class="btn d-flex d-flex-bottom"><image src="../static/icon-edit.png"/>编辑</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['isDefault','mode'],  // 如果有mode值，则为选择地址
		methods:{
			del(){
				this.$emit('del','123')
			},
			edit(){
				this.$emit('edit')
			},
			select(){
				if(this.mode){
					this.$emit('onSelect')
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.address-item-container
		padding 0 22rpx 0 8rpx
		background-color #fff
		border-radius 10rpx
		box-shadow 0 2px 10rpx 0 rgba(0,111,255,.1)
		.body
			padding 28rpx 16rpx 22rpx 24rpx
			.name
				font-size 30rpx
				font-weight bold
				color #202020
				text
					font-size 28rpx
					color #111
			.address
				margin-top 18rpx
				font-size 26rpx
				font-weight bold
				color #202020
		.foot
			padding 18rpx 16rpx 44rpx 24rpx
			border-top 1px solid #f5f5f5
			.default
				width 66rpx
				height 32rpx
				border 1px solid #fa2a2a
				border-radius 4rpx
				font-size 24rpx
				font-weight bold
				color #ff0404
			.btn
				margin-left 50rpx
				font-size 24rpx
				color #8c8c8c
				image
					margin-right 4rpx
					width 32rpx
					height 32rpx
</style>
