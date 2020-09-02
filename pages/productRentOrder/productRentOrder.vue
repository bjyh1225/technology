<template>
	<view class="page">
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<product-rent-order-all v-if="TabCur===0"></product-rent-order-all>
		<hold-pay v-if="TabCur===1"></hold-pay>
		<hold-fa v-if="TabCur===2"></hold-fa>
		<hold-so v-if="TabCur===3"></hold-so>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import ProductRentOrderAll from "../../components/productRentOrderClass/productRentOrderAll.vue"
	import HoldPay from "../../components/productRentOrderClass/holdPay.vue"
	import HoldFa from "../../components/productRentOrderClass/holdFa.vue"
	import HoldSo from "../../components/productRentOrderClass/holdSo.vue"

	export default {
		components: {
			ProductRentOrderAll,
			WucTab,
			HoldPay,
			HoldFa,
			HoldSo
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
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '租用中'
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
	.page {
		height: 100%;
	}

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
.sw{
	height: 100%;
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
