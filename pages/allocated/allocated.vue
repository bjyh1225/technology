<template>
	<view class="payment-container page-h100 d-flex d-flex-column">
		<view class="head d-flex-unShrink"></view>
		<view class="head-title d-flex d-flex-around d-flex-middle">
			<view class="font-color d-flex d-flex-column">
				<text class="font-size">工程师已经分配</text>
			</view>
			<view class="">
				<image class="tupian" src="../../static/order-engin-icon.png" mode=""></image>
			</view>
		</view>
		<view class="list d-flex-item">
			<text class="add-bold">收货地址</text>
			<view class="d-flex name-message">
				<text class="margin-r">王若云</text>
				<text>027-67801555</text>
			</view>
			<view class="d-flex d-flex-start">
				<view class="icon-btn">默认</view>
				<text>地址：湖北省武汉市江夏区百捷科技园A座</text>
			</view>
			
			<!-- 工程师类别 -->
			<view class="engin-size">
				<view class="d-flex d-flex-between li-height engin-weight">
					<text>工程师类别</text>
					<text>应用工程师</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>人数</text>
					<text class="engin-weight">1人</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>时间</text>
					<text class="engin-weight">一周</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>金额</text>
					<text class="engin-red engin-weight">￥100.00</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>分配状态</text>
					<text class="blue engin-weight">已分配</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>工程师姓名</text>
					<text>联系方式</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text class="engin-weight">张三</text>
					<text class="engin-weight">18108617207</text>
				</view>
			</view>
			<!-- 工程师类别 -->
			<view class="engin-size">
				<view class="d-flex d-flex-between li-height engin-weight">
					<text>工程师类别</text>
					<text>应用工程师</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>人数</text>
					<text class="engin-weight">1人</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>时间</text>
					<text class="engin-weight">一周</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>金额</text>
					<text class="engin-red engin-weight">￥100.00</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>分配状态</text>
					<text class="blue engin-weight">已分配</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>工程师姓名</text>
					<text>联系方式</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text class="engin-weight">李四</text>
					<text class="engin-weight">18108617207</text>
				</view>
			</view>
			<!-- 订单明细 -->
			<view class="engin-size">
				<view class="d-flex d-flex-between li-height engin-weight">
					<text>订单明细</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>工程师费用</text>
					<text class="engin-red engin-weight">￥200.00</text>
				</view>
				<view class="d-flex d-flex-between li-height last-detail">
					<text>总额</text>
					<text class="engin-red engin-weight">￥200.00</text>
				</view>
			</view>
			<!-- 订单信息 -->
			<view class="engin-size">
				<view class="li-height engin-weight">
					<text>订单信息</text>
				</view>
				<view class="li-height">
					<text>订单编号: 305818745121212124</text>
				</view>
				<view class="li-height">
					<text>创建时间：2020-06-29</text>
				</view>
				<view class="li-height">
					<text>付款时间：2020-06-29</text>
				</view>
				<view class="d-flex d-flex-around pay-link d-flex-middle">
					<view class="d-flex d-flex-center d-flex-middle">
						<image class="pay-icon" src="../../static/payment-message.png" mode=""></image>
						<text class="ma-le1">联系买家</text>
					</view>
					<view class="d-flex d-flex-center d-flex-middle">
						<image class="pay-icon" src="../../static/payment-phone.png" mode=""></image>
						<text class="ma-le1">拨打电话</text>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="stylus" scoped>
	page {
		height: 100%;
		background-color #f0f0f0
	}

	.payment-container {
		position: relative;
	}

	.head {
		height: 350rpx;
		background: url('~@/static/order-head-bg.png') no-repeat 0 0;
		background-size: 100%;
	}

	.head-title {
		width: 100%;
		height: 80rpx;
		position: absolute;
		top: 70rpx;
	}

	.font-color {
		color: #FFFFFF;
	}

	.font-size {
		font-weight: bold;
		line-height: 50rpx;
		font-size: 36rpx;
	}

	.tupian {
		width: 120rpx;
		height: 120rpx;
	}

	.list {
		left: 24rpx;
		right: 24rpx;
		top: 210rpx;
		padding: 30rpx 24rpx 5rpx 24rpx;
		// height: 95%;
		overflow-y: auto;
		position: absolute;
		background-color: #FFFFFF;
		border-radius: 20rpx;
	}

	.add-bold {
		font-weight: bold;
		font-size: 32rpx;
	}

	.name-message {
		margin-top: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-weight: bold;
	}

	.margin-r {
		margin-right: 40rpx;
	}

	.icon-btn {
		width: 70rpx;
		height: 38rpx;
		border: 1px solid #FA2A2A;
		color: #FF0404;
		text-align: center;
		font-size: 24rpx;
		margin-right: 40rpx;
	}

	.blue {
		color: #0093BB;
		// margin-right: 20rpx;
	}

	.gray {
		color: #525252;
	}
	
	.engin-size {
		margin 40rpx 0
	}

	.li-height {
		height: 60rpx;
		line-height 60rpx;
	}

	.engin-weight {
		font-weight bold
	}

	.engin-red {
		color: #FF0000;

	}

	.last-detail {
		margin-top: 10rpx;
	}

	.last-det-size {
		font-size: 30rpx;
	}

	.pay-icon {
		width: 50rpx;
		height: 50rpx;
	}

	.pay-link {
		margin-top: 30rpx;
		height: 100rpx;
	}
	.ma-le1 {
		margin-left: 20rpx;
	}
</style>
