<template>
	<view>
		<image src="../../static/cases-head-bg.png" mode="" class="bg-img">
			<view class="my_order">
				<image src="../../static/order.png" mode="" class="my_order_left"></image>
				<text style="position: absolute;top: 10rpx;left: 150rpx;">lemon</text>
				<text class="my_order_right">
				未认证
				</text>
			</view>
		</image>
		<!-- 产品租用 -->
		<view class="rendorder">
			<view class="rendorder_left">
				<text class="rendorder_left_left">产品租用订单</text>
				<navigator url="../productRentOrder/productRentOrder" class="rendorder_left_right">
					<text>全部订单</text>
					<image src="../../static/fanhui.png" mode="" style="width: 15rpx;height: 24rpx;line-height: 110rpx;padding-left: 10rpx;"></image>
				</navigator>
			</view>
			<view class="rendorder_right">
				<navigator url="../payment/payment" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/drop-mony.png" mode="" class="drop-mony"></image>
					<text class="drop_text">待付款</text>
				</navigator>
				<navigator url="../consignment/consignment" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/drop-shoping.png" mode="" class="drop-mony"></image>
					<text class="drop_text">待发货</text>
				</navigator>
				<navigator url="../delivered/delivered" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/receiving.png" mode="" class="drop-mony"></image>
					<text class="drop_text">待收货</text>
				</navigator>
				<navigator url="../logistics/logistics" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/success.png" mode="" class="drop-mony"></image>
					<text class="drop_text">租用中</text>
				</navigator>
				
			</view>
		</view>
		<!-- 工程师租用 -->
		<view class="rendorder_order">
			<view class="rendorder_left_order">
				<text class="rendorder_order_left">工程师租用订单</text>
				<navigator url="../engineerOrder/engineerOrder" class="rendorder_order_right">
					<text>全部订单</text>
					<image src="../../static/fanhui.png" mode="" style="width: 15rpx;height: 24rpx;line-height: 110rpx;padding-left: 10rpx;"></image>
				</navigator>
			</view>
			<view class="rendorder_right">
				<navigator url="../payment/payment" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/drop-mony.png" mode="" class="drop-mony"></image>
					<text class="drop_text">待付款</text>
				</navigator>
				<navigator url="../unallocated/unallocated" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/drop-shoping.png" mode="" class="drop-mony"></image>
					<text class="drop_text">待分配</text>
				</navigator>
				<navigator url="../allocated/allocated" style="display: flex; flex-direction: column;flex:25%; padding: 20rpx;">
					<image src="../../static/receiving.png" mode="" class="drop-mony"></image>
					<!-- <image src="" mode="" class="drop-mony"></image> -->
					<text class="drop_text">已分配</text>
				</navigator>
			</view>
		</view>
		<!-- 基本信息 -->
		<view class="footer">
			<navigator url="../generalInfo/generalInfo" class="footer_left">
				<image src="../../static/shezhi.png" mode="" class="shezhi"></image>
				<text class="information" @click="">基本信息</text>
				<image src="../../static/fanhui.png" mode="" class="fanhui"></image>
			</navigator>
			<navigator url="../certification/certification" class="footer_left">
				<image src="../../static/myuser.png" mode="" class="shezhi"></image>
				<text class="information" @click="">实名认证</text>
				<image src="../../static/fanhui.png" mode="" class="fanhui"></image>
			</navigator>
			<navigator url="../address/address" class="footer_left">
				<image src="../../static/shipping-address.png" mode="" class="shezhi"></image>
				<text class="information" @click="">收货地址</text>
				<image src="../../static/fanhui.png" mode="" class="fanhui"></image>
			</navigator>
			<navigator url="../collect/collect" class="footer_left">
				<image src="../../static/integral.png" mode="" class="shezhi"></image>
				<text class="information" @click="">我的收藏</text>
				<image src="../../static/fanhui.png" mode="" class="fanhui"></image>
			</navigator>
			<navigator url="../accountSecurity/accountSecurity" class="footer_left">
				<image src="../../static/music.png" mode="" class="shezhi"></image>
				<text class="information">账户与安全</text>
				<image src="../../static/fanhui.png" mode="" class="fanhui"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.bg-img{
		position: relative;
		width: 100%;
		height: 400rpx;
		
	}
	.my_order{
		position: absolute;
		top: 154rpx;
		left: 30rpx;
		width: 120rpx;
		height: 120rpx;
	}
	.my_order_left{
		width: 120rpx;
		height: 120rpx;
	}
	.my_order_right{
		position: absolute;
		top: 70rpx;
		left: 150rpx;
		width:110rpx;
		height:40rpx;
		background:rgba(255,255,255,1);
		border-radius:6rpx;
		font-size: 26rpx;
		color: #AFB0B2;
		text-align: center;
		
	}
	/* 产品租用 */
	.rendorder{
		display: flex;
		width: 702rpx;
		height: 265rpx;
		background-color: #F5F5F5;
		margin: 0rpx auto;
		flex-direction: column;
		border-radius: 10rpx;
	}
	.rendorder_left{
		height: 110rpx;
		display: flex;
		border-bottom: 1rpx solid #ccc;
	}
	.rendorder_left_left{
		font-size:34rpx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(112,112,112,1);
		line-height: 110rpx;
		padding-left: 20rpx;
	}
	.rendorder_left_right{
		font-size: 24rpx;
		color: #9A9A9A;
		padding-left: 340rpx;
		line-height: 110rpx;
	}
	.rendorder_right{
		display: flex;
	}
	.drop-mony{
		width: 60rpx;
		height: 60rpx;
		margin: auto auto;
		padding: 5rpx;
		
	}
	.drop_text{
		font-size: 24rpx;
		text-align: center;

	}
	/* 工程师租用 */
	.rendorder_order{
		display: flex;
		width: 702rpx;
		height: 265rpx;
		background-color: #F5F5F5;
		margin: 32rpx auto;
		flex-direction: column;
		border-radius: 10rpx;
	}
	.rendorder_order_left{
		font-size:34rpx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(112,112,112,1);
		line-height: 110rpx;
		padding-left: 20rpx;
	}
	.rendorder_left_order{
		height: 110rpx;
		display: flex;
	}
	.rendorder_order_right{
		font-size: 24rpx;
		color: #9A9A9A;
		padding-left: 310rpx;
		line-height: 110rpx;
	}
	/* 基本信息 */
	.footer{
		width: 702rpx;
		height: 500rpx;
		background-color: #F5F5F5;
		margin: 30rpx auto ;
	}
	.footer_left{
		display: flex;
		height: 100rpx;
		border-bottom: 1rpx solid #CCCCCC;
		
	}
	.shezhi{
		width: 50rpx;
		height: 50rpx;
		padding: 25rpx 10rpx;
	}
	.information{
		font-size: 29rpx;
		padding-left: 15rpx;
		line-height: 100rpx;
		line-height: 100rpx;
		color: #343434;
	}
	.fanhui{
		width: 19rpx;
		height: 24rpx;
		padding: 40rpx 0rpx 25rpx 450rpx;		
	}
</style>
