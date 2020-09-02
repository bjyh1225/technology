<template>
	<view>
		<view class="select">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			<product-rent-order-all v-if="TabCur===0"></product-rent-order-all>
			<hold-pay v-if="TabCur===1"></hold-pay>
			<hold-fen v-if="TabCur===2"></hold-fen>
			<fen v-if="TabCur===3"></fen>
			<!-- <view class="select-list">
				<view class="select-item" v-for="(item,index) in selectTypes" :class="{active:current==index}" :data-current="index"
				 @tap="tabChange">{{item.selecttype}}</view>
			</view>
			<view>
				<swiper class="" @change="swiperChange" :current="current">
					<swiper-item class="" v-for="(item,index) in selectinfos">{{item.selectinfo}}</swiper-item>
				</swiper>
			</view> -->
			<!-- 订单列表 -->
			<!-- <view class="order-list" v-for="item in orderList">
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
			</view> -->
		</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import ProductRentOrderAll from "../../components/productRentOrderClass/productRentOrderAll.vue"
	import HoldPay from "../../components/productRentOrderClass/holdPay.vue"
	import Fen from "../../components/productRentOrderClass/fen.vue"
	import HoldFen from "../../components/productRentOrderClass/holdFen.vue"
	export default {
		components:{
			WucTab,
			ProductRentOrderAll,
			HoldPay,
			Fen,
			HoldFen
		},
		data() {
			return {
				visible: false,
				TabCur: 0,
				tabList: [{
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待分配'
				}, {
					name: '已分配'
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

<style scoped>
/* .select-list{
	display: flex;
	height: 80rpx;
	text-align: center;
	justify-content: center;
	align-items: center;
}
.select-item{
	flex: 1;
	padding: 0 30rpx;
}
.active{
	font-weight: bold;
	padding-bottom: 12rpx;
	border-bottom: 6rpx solid #0093BB;
	align-items:flex-start;	
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
	padding: 0 20rpx;
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
} */

</style>
