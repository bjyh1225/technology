<template>
	<view class="list">
		<!-- 订单列表 -->
		<view class="order-list" v-for="item in orderList">
			<!-- <OrderNum1></OrderNum1> -->
			<view class="d-flex d-flex-between order-num">
				<text class="gray">订单编号 {{item.orderNum}}</text>
				<text class="blue">{{item.shipStatus}}</text>
			</view>
			<view class="d-flex detail d-flex-around d-flex-middle">
				<image class="img-size" :src="item.orderImage" mode=""></image>
				<view class="text-detail">
					<text class="font-weight">{{item.orderTitle}}</text>
					<view class="gray small-font">
						<text>时长：{{item.orderTime}}</text>
						<text class="ma-le">数量：{{item.orderPeople}}</text>
					</view>
					<view class="red-bold">
						<text>押金：￥{{item.orderDeposit}}</text>
						<text class="ma-le1">租金：￥{{item.orderRent}}</text>
					</view>
				</view>
			</view>
			<view class="d-flex btn-s d-flex-middle  d-flex-end">
				<view class="btn">查看物流</view>
				<view class="btn">确认收货</view>
			</view>
			<view class="total d-flex d-flex-end d-flex-middle">
				<text class="total-r">合计:<text class="total-size">￥{{item.orderTotal}}</text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
						{
							orderNum: "4547888457884",
							shipStatus:"已发货",
							orderImage:"../../static/index-nav01.png",
							orderTitle: "HyperScan 智能光学追踪3D扫描仪",
							orderTime: "一周",
							orderPeople: "1",
							orderDeposit:"100.00",
							orderRent: "100.00",
							orderTotal: "1000.00"
						},
						{
							orderNum: "4547888457885",
							shipStatus:"已关闭",
							orderImage:"../../static/index-nav03.png",
							orderTitle: "HyperScan 智光学追踪3D扫描仪",
							orderTime:'二周',
							orderPeople:"2",
							orderDeposit:"200.00",
							orderRent:"200.00",
							orderTotal:"2000.00"
						},
						{
							orderNum: "4547888457886",
							shipStatus:"待支付",
							orderImage:"../../static/index-nav01.png",
							orderTitle: "HyperScan 智学追踪3D扫描仪",
							orderTime:'三周',
							orderPeople:"3",
							orderDeposit:"200.00",
							orderRent:"300.00",
							orderTotal:"3000.00"
						},
						{
							orderNum: "4547888457887",
							shipStatus:"待发货",
							orderImage:"../../static/index-nav03.png",
							orderTitle: "HyperScan 智追踪3D扫描仪",
							orderTime:'四周',
							orderPeople:"4",
							orderDeposit:"400.00",
							orderRent:"400.00",
							orderTotal:"4000.00"
						},
						{
							orderNum: "4547888457887",
							shipStatus:"已完成",
							orderImage:"../../static/index-nav01.png",
							orderTitle: "HyperScan 智能光学3D扫描仪",
							orderTime:'五周',
							orderPeople:"5",
							orderDeposit:"500.00",
							orderRent:"500.00",
							orderTotal:"500.00"
						}
					]
				}
			}
	}
</script>

<style scoped>
.page{
		height: 100%;
	}
	.list {
		left: 24rpx;
		right: 24rpx;
		padding: 30rpx 24rpx 5rpx 24rpx;
		overflow-y: auto;
		position: absolute;
		background-color: #FFFFFF;
		border-radius: 20rpx;
	}
	
.blue{
	color: #0093BB;
	margin-right: 20rpx;
}
.gray{
	color: #525252;
}
.order-list{
	overflow: hidden;
	/* padding: 0 20rpx; */
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
.btn-s{
	height: 70rpx;
}
.btn{
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
.total{
	height: 70rpx;	
	margin-bottom: 30rpx;
}
.total-r{
	margin-right: 20rpx;
}
.total-size{
	color: #FF0000;
	font-weight: bold;
	font-size: 36rpx;
}

</style>
