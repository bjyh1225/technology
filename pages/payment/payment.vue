<template>
	<view class="payment-container page-h100 d-flex d-flex-column">
		<view class="head d-flex-unShrink"></view>
		<view class="head-title d-flex d-flex-around d-flex-middle">
			<view class="font-color d-flex d-flex-column">
				<text class="font-size">确定订单后请在120分钟内付款</text>
				<text>还剩余01小时25分钟自动关闭</text>
			</view>
			<view class="">
				<image class="tupian" src="../../static/payment-icon.png" mode=""></image>
			</view>
		</view>
		<view class="list d-flex-item">
			<Address></Address>
			<!-- <text class="add-bold">收货地址</text>
			<view class="d-flex name-message">
				<text class="margin-r">王若云</text>
				<text>027-67801555</text>
			</view>
			<view class="d-flex d-flex-start">
				<view class="icon-btn">默认</view>
				<text>地址：湖北省武汉市江夏区百捷科技园A座</text>
			</view> -->
			<!-- 订单列表 -->
			<view class="order-list">
				<view class="d-flex d-flex-between order-num">
					<text class="gray">订单编号 30518745121212124</text>
				</view>
				<view class="d-flex detail d-flex-around d-flex-middle">
					<image class="img-size" src="../../static/index-nav01.png" mode=""></image>
					<view class="text-detail">
						<text class="font-weight">HyperScan 智学追踪3D扫描仪</text>
						<view class="gray small-font">
							<text>时长：1周</text>
							<text class="ma-le">数量：1</text>
						</view>
						<view class="red-bold">
							<text>押金：￥100.00</text>
							<text class="ma-le1">租金：￥100.00</text>
						</view>
					</view>
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
					<text class="blue">未分配</text>
				</view>
			</view>
			<!-- 订单明细 -->
			<view class="engin-size">
				<view class="d-flex d-flex-between li-height engin-weight">
					<text>订单明细</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>押金</text>
					<text class="engin-red engin-weight">￥100.00</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>租金</text>
					<text class="engin-red engin-weight">￥100.00</text>
				</view>
				<view class="d-flex d-flex-between li-height">
					<text>工程师</text>
					<text class="engin-red engin-weight">￥100.00</text>
				</view>
				<view class="d-flex d-flex-between li-height last-detail">
					<text>总额</text>
					<text class="engin-red engin-weight last-det-size">￥300.00</text>
				</view>
			</view>
			<!-- 订单信息 -->
			<view class="engin-size">
				<view class="li-height engin-weight">
					<text>订单信息</text>
				</view>
				<view class="li-height">
					<text>订单编号:305818745121212124</text>
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
			<view class="d-flex btn-s d-flex-middle d-flex-end">
				<view class="btn">取消订单</view>
				<view class="btn">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Address from '../../components/order/address.vue'
	export default {
		components: {
			Address
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
		background: url('~@/static/payment-head-bg.png') no-repeat 0 0;
		background-size: 100%;
	}

	.head-title {
		width: 100%;
		height: 80rpx;
		position: absolute;
		top: 80rpx;
	}

	.font-color {
		color: #FFFFFF;
	}

	.font-size {
		font-weight: bold;
		line-height: 50rpx;
		font-size: 32rpx;
	}

	.tupian {
		margin-top: 20rpx;
		width: 110rpx;
		height: 110rpx;
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

	// .add-bold {
	// 	font-weight: bold;
	// 	font-size: 32rpx;
	// }

	// .name-message {
	// 	margin-top: 30rpx;
	// 	height: 60rpx;
	// 	line-height: 60rpx;
	// 	font-weight: bold;
	// }

	// .margin-r {
	// 	margin-right: 40rpx;
	// }

	// .icon-btn {
	// 	width: 70rpx;
	// 	height: 38rpx;
	// 	border: 1px solid #FA2A2A;
	// 	color: #FF0404;
	// 	text-align: center;
	// 	font-size: 24rpx;
	// 	margin-right: 40rpx;
	// }

	.blue {
		color: #0093BB;
		// margin-right: 20rpx;
	}

	.gray {
		color: #525252;
	}

	.order-list {
		overflow: hidden;
		// padding: 0 20rpx;
		margin-top: 60rpx;

	}

	.order-num {
		margin-bottom: 40rpx;
	}

	.detail {
		height: 190rpx;
		width: 100%;
	}

	.text-detail {
		height: 190rpx;
	}

	.img-size {
		height: 140rpx;
		width: 140rpx;
	}

	.font-weight {
		font-weight: bold;
		line-height: 54rpx;
	}

	.small-font {
		font-size: 24rpx;
		line-height: 54rpx;
	}

	.red-bold {
		color: #FF0000;
		font-weight: bold;
		line-height: 70rpx;
		margin: 0 10rpx;
	}

	.ma-le {
		margin-left: 60rpx;
	}

	.ma-le1 {
		margin-left: 40rpx;
	}

	.btn-s {
		height: 70rpx;
	}

	.btn {
		width: 170rpx;
		height: 50rpx;
		border: 1px solid #0093BB;
		border-radius: 60rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		color: #0093BB;
		text-align: center;
		margin: 20rpx;
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
	
</style>
