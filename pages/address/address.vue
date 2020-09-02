<template>
	<view class="address-container">
		<view v-for="(item,index) in 10" :key="index" class="item">
			<address-item @del="del(index,$event)" @edit="edit(index)" @onSelect="onSelect(index)" :isDefault="index==0" :mode="mode"/>
		</view>
		<image src="../../static/icon-add-fill.png" class="btn"/>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import AddressItem from '../../components/addressItem.vue'
	
	export default {
		components:{
			AddressItem
		},
		data() {
			return {
				mode:'',  // 如果mode=='select' ===> 选择地址
			}
		},
		methods: {
			del(index,data){
				console.log(index,data)
			},
			edit(index){
				console.log(index)
				uni.navigateTo({
					url:'../addressEdit/addressEdit?mode=edit'
				})
			},
			onSelect(index){
				console.log(index)
			}
		},
		onLoad(option){
			this.mode=option.mode  // select===>选择
		}
	}
</script>

<style lang="stylus" scoped>
	page{
		background-color #f0f0f0
	}
	.address-container{
		padding 48rpx 24rpx 58rpx
		.item{
			margin-bottom 16rpx
		}
		.btn{
			display block
			margin 30rpx auto 0
			width 77rpx
			height 77rpx
		}
	}
</style>
