<template>
	<view>
		<view class="setPersonal">
			<view>
				<text class="font-weight">头像</text>
			</view>
			<view>
				<image class="image-size" @click="toFile" :src="photo" mode=""></image>
				<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
			</view>

		</view>
		<view class="setPersonal ">
			<view class="uni-list ">
				<view class="uni-list-cell d-flex d-flex-between">
					<view class="uni-list-cell-left font-weight">
						性别
					</view>
					<view class="d-flex">
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
						</view>
						<view>
							<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="setPersonal">
			<view>
				<text class="font-weight">昵称</text>
			</view>
			<view class="input-line">
				<view>
					<input class="" type="text" value="" placeholder="mmigfssdfg">
				</view>
				<view>
					<image class="image-icon" src="../../static/icon-arrow-right.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				photo: require('../../static/order.png'),
				title: 'picker',
				array: ['男', '女', ],
				index: 0,
			}
		},
		methods: {
			toFile() {
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						// tempFilePath可以作为img标签的src属性显示图片
						// const tempFilePaths = res.tempFilePaths;

						that.cardback = res.tempFilePaths[0];
						that.photo = that.cardback;
					}
				});
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style scoped>
	.setPersonal {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 100rpx;
		/* line-height: 100rpx; */
		margin: 0 auto;
	}

	.font-weight {
		font-weight: bold;
	}

	.image-size {
		width: 90rpx;
		height: 90rpx;
		vertical-align: middle;
	}

	.image-icon {
		width: 14rpx;
		height: 26rpx;
		margin-left: 32rpx;
		vertical-align: middle;
	}

	.select {
		width: 50rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		color: #BBBBBB;
		border: none;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background-color: #fff;
		-webkit-appearance: none;
		-moz-appearance: none;
		outline: none;
	}

	.input-line {
		line-height: 50rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		/* color: #BBBBBB; */
	}

	.input-line view:nth-child(1) {
		text-align: right;
	}

	.uni-list {
		width: 100%;
	}

	/* .uni-list_z{
		width: 100%;
		display: flex;
		justify-content: space-between;
	} */
</style>
