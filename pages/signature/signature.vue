<template>
	<view class="signature-container page-h100 d-flex d-flex-middle">
		<view class="title d-flex-unShrink d-flex d-flex-middle d-flex-center">手写板</view>
		<view class="handCenter d-flex-item">
			<canvas class="handWriting" disable-scroll="true" @touchstart="uploadScaleStart" @touchmove="uploadScaleMove"
			  @touchend="uploadScaleEnd" canvas-id="handWriting">
			</canvas>
		</view>
		<view class="foot d-flex-unShrink d-flex d-flex-center d-flex-middle">
			<view class="con d-flex">
				<text @click="done" class="d-flex d-flex-middle d-flex-center">完成</text>
				<text @click="cancel" class="d-flex d-flex-middle d-flex-center">取消</text>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import Handwriting from '../../js_sdk/signature/signature.js'
	
	export default {
		data() {
			return {
				lineColor:'black',
				slideValue:0,
			}
		},
		methods: {
			// 完成
			done(){
				util.showLoading();
				this.handwriting.saveCanvas().then(res => {
					console.log('图片：',res)
					uni.navigateTo({
						url:'../confirm/confirm?type='+this.type
					})
					/* uni.previewImage({
						urls:[res],
						success:() => {
							// 可以预览
							console.log('预览成功')
						},
						fail:err => {
							console.log('预览失败：',err)
						}
					}) */
					// setTimeout(() => {
					// 	util.hideLoading()
					// },1000)
					util.hideLoading()
				}).catch(err => {
					console.log(err)
					util.hideLoading()
				})
			},
			// 取消
			cancel(){
				this.handwriting.retDraw()
				util.back()
			},
			uploadScaleStart(event){
			  this.handwriting.uploadScaleStart(event)
			},
			uploadScaleMove(event){
			  this.handwriting.uploadScaleMove(event)
			},
			uploadScaleEnd(event){
			  this.handwriting.uploadScaleEnd(event)
			}
		},
		mounted(){
			// 初始化需传入三个参数 
			// lineColor  字体颜色 默认#1A1A1A 
			// slideValue 字体粗细 默认50（内置 0，25，50, 75, 100 5档粗细）
			// canvasName canvas的id名 canvas-id
			this.handwriting = new Handwriting({
			  lineColor: this.lineColor,
			  slideValue: this.slideValue, // 0, 25, 50, 75, 100
			  canvasName: 'handWriting',
			})
		},
		onLoad(option){
			this.type=option.type  // product===>产品租用  engineer===>工程师租用
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		height 100%
		background-color #fbfbfb
	}
	.signature-container{
		padding 30rpx 0
		box-sizing border-box
		flex-direction row-reverse
		.title{
			transform rotate(90deg)
			font-size 30rpx
			color #333
		}
		.handCenter{
			width 50%
			height 100%
			border 3rpx dashed #ccc
			background-color #fff
			box-sizing border-box
			.handWriting{
				width 100%
				height 100%
			}
		}
		.foot{
			width 115rpx
			.con{
				transform rotate(90deg)
				text{
					margin 0 16rpx
					width 112rpx
					height 70rpx
					background-color #f8f8f8
					border 1px solid #dcdcdc
					border-radius 10rpx
					font-size 26rpx
					color #666
				}
			}
			
		}
	}
</style>
