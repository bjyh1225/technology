<template>
	<view class="video-container page-h100 d-flex d-flex-column">
		<video-item></video-item>
		<text class="title">HyperScan 智能光学追踪3D扫描仪器</text>
		<view class=""  v-for="(item,index) in 5">
			<view class="detail d-flex d-flex-column">
				<text class="bold">光源</text>
				<text>红色激光光源、7对、9对或者13对十字交叉扫描激光束+1条深孔激光束</text>
			</view>
		</view>	
	</view>
</template>

<script>
	import VideoItem from "../../components/videoItem.vue"
	export default {
		components: {
			VideoItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #f0f0f0;
	}
	.title{
		padding: 0 15rpx;
		font-weight: bold;
		font-size: 36rpx;
		height: 100rpx;
		line-height: 100rpx;
	}
	.detail{
		padding: 15rpx 15rpx 20rpx 15rpx;
	}
	.bold{
		font-weight: bold;
	}
</style>
