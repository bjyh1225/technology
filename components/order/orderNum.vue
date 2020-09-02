<template>
	<view class="">
		<view class="d-flex d-flex-between order-num">
			<text class="gray">订单编号 </text>
			<text class="blue"></text>
		</view>
		<view class="d-flex detail d-flex-around d-flex-middle">
			<image class="img-size"  mode=""></image>
			<view class="text-detail">
				<text class="font-weight">HyperScan 智能光学追踪3D扫描仪</text>
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
	
</template>

<script>
</script>

<style scoped>
	.blue{
		color: #0093BB;
		margin-right: 20rpx;
	}
	.gray{
		color: #525252;
	}
	.order-num{
		margin-bottom: 40rpx;
	}
	.detail{
		height: 190rpx;
		width: 100%;
	}
	.text-detail{
		height: 190rpx;
	}
	.img-size{
		height: 140rpx;
		width: 140rpx;
	}
	.font-weight{
		font-weight: bold;
		line-height: 54rpx;
	}
	.small-font{
		font-size: 24rpx;
		line-height: 54rpx;
	}
	.red-bold{
		color: #FF0000;
		font-weight: bold;
		line-height: 70rpx;
		margin: 0 10rpx;
	}
	.ma-le{
		margin-left: 60rpx;
	}
	.ma-le1{
		margin-left: 40rpx;
	}
</style>
