<template>
	<view class="certification-container page-h100 d-flex d-flex-column">
		<view class="head "></view>
		<view class="list">
			<view class="border">
			 <view>
			  <text>真实姓名</text>
			 </view>
			 <view>	
			 </view>
				<input class="text1" type="text" value="" placeholder="请输入真实姓名">
			</view>
			<view class="border">
			 <view>
			  <text >身份证号</text>
			 </view>
			 <view>	
			 </view>
				<input class="text1" type="number" value="" placeholder="请输入18位身份证号">
			</view>
		</view>
		<!-- 身份证上传 -->
		
		<view class="id-card">
			<text class="font-size">上传身份证图片</text>
			<view class="center-i">
				<view class="id-card-f">
					<image class="icom-size" @click="toFile" src="../../static/icon-cream.png"/>
					<image :src="idCardFalse" class="active" @click="toFile"></image>	
				</view>
				<text>身份证背面</text>	
			</view>
			<view class="center-i">
				<view class="id-card-f card-t">
					<image class="icom-size" @click="toFile1" src="../../static/icon-cream.png"/>
					<image :src="idCardTrue" class="active" @click="toFile1" mode=""></image>
				</view>
				<text>身份证正面</text>	
			</view>
			<view class="i-message">
				<image class="icon-message" src="../../static/icon-message.png" mode=""></image>
				<text class="font-color">证件必须是清晰彩色原件电子版本。可以是扫描件或者数码拍摄照片。仅支持jpg、png、jpeg的图片格式。</text>
			</view>
			<text class="font-size">上传营业执照</text>
			<view class="center-i">
				<view class="id-card-f card-license">
					<image class="icom-size" @click="toFile2" src="../../static/icon-cream.png"/>
					<image :src="license" class="active" mode="" @click="toFile2"></image>
				</view>
				<text>营业执照照片</text>	
			</view>
			<button type="default" class="button-size">确认上传</button>
		</view>
					
	</view>
</template>

<script>
	import util from '../../common/util.js'
	
	export default {
		components:{
			
		},
		data() {
			return {
				idCardFalse:"",
				idCardTrue:"",
				license:"",
			}
		},
		methods: {
			toFile(){
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						// tempFilePath可以作为img标签的src属性显示图片
						// const tempFilePaths = res.tempFilePaths;

						that.cardback = res.tempFilePaths[0];
						that.idCardFalse = that.cardback;
					}
				});
			},
			toFile1(){
				var that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        // console.log(JSON.stringify(res.tempFilePaths));
						that.cardface = res.tempFilePaths[0];
						that.idCardTrue = that.cardface;
					}
				});
			},
			toFile2(){
				var that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        that.licen = res.tempFilePaths[0];
						that.license = that.licen;
				    }
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page
		// height 100%
		background-color #f0f0f0
	.certification-container
		position relative
		.head
			height 550rpx
			background url('~@/static/certification-head-bg.png') no-repeat 0 0
			background-size 100%		
		.list
			left 24rpx
			right 24rpx
			top 315rpx
			padding 30rpx 24rpx 5rpx 24rpx
			height 10%
			position absolute
			background-color #FFFFFF
			border-radius 20rpx
			.border
				display flex
				justify-content flex-start
				align-items center
				width 90%
				height 60rpx
				line-height 60rpx
				margin 0 auto
				.text1
					font-size 26rpx
					margin-left 40rpx
		.id-card
			// position relative
			// top 220rpx
			.font-size
				font-weight bold
			.center-i
				width 100%
				text-align center
				.id-card-f
					width 610rpx
					height 365rpx
					background url('~@/static/id-card-f.png')
					background-size 100% 100%
					border 1px dashed #999999 
					margin  20rpx auto
					display flex
					justify-content center
					align-items center
					position relative
					
					.active
						position absolute;
						width 610rpx
						height 365rpx
						top 0;
					.icom-size
						width 170rpx
						height 170rpx
						border 1px dashed #999999 
				.card-t
					background url('~@/static/id-card-t.png')	
				.card-license
					background url('~@/static/icon-license.png')													
			.i-message
				margin 40rpx auto
			.icon-message
				height 30rpx
				width 30rpx
				vertical-align middle
			.font-color
				color #999999
				font-size 22rpx
			.button-size
				background #0093BB
				color  #FFFFFF 
				width 80%
				margin 40rpx auto
</style>
