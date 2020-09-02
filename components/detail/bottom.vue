<template>
	<view class="detail-bottom-container d-flex d-flex-middle">
		<view class="list d-flex-item d-flex d-flex-between d-flex-middle">
			<view v-for="(item,index) in list" :key="index" @click="onClick(index)" class="item d-flex d-flex-column d-flex-middle d-flex-center">
				<image :src="item.isActive?item.on:item.src"/>
				<view>{{item.text}}</view>
			</view>
		</view>
		<view @click="rent" class="btn d-flex d-flex-middle d-flex-center">立即租用</view>
	</view>
</template>

<script>
	export default {
		props:['isCollection'],
		data(){
			return {
				list:[
					{src:'../../static/icon-contact.png',on:'',text:'咨询',isActive:false},
					{src:'../../static/icon-collection.png',on:'../../static/icon-collection.png',text:'收藏',isActive:false},
					{src:'../../static/icon-share.png',on:'',text:'分享',isActive:false}
				]
			}
		},
		watch:{
			isCollection:{
				handler(val){
					if(val!=undefined){
						this.list[1].isActive=val
					}
				},
				immediate:true
			}
		},
		methods:{
			onClick(index){
				if(index==0){
					this.$emit('onClickContact')
				}else if(index==1){
					this.list[1].isActive=!this.list[1].isActive
					this.$emit('onClickCollection')
				}else if(index==2){
					this.$emit('onClickShare')
				}
			},
			// 立即租用
			rent(){
				this.$emit('rent')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.detail-bottom-container
		padding-right 25rpx
		height 100rpx
		background-color #fff
		.list
			width 30%
			height 100%
			.item
				width 100rpx
				height 100%
				font-size 24rpx
				color #151515
				image
					margin-bottom 2rpx
					width 38rpx
					height 38rpx
		.btn
			margin-left 50rpx
			width 350rpx
			height 68rpx
			background-color #0093bb
			border-radius 20rpx
			font-size 30rpx
			color #fff
</style>
