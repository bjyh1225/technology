<template>
	<view class="index-container">
		<banner :imgs="banner"/>
		<view class="index-nav d-flex d-flex-wrap d-flex-between d-flex-align">
			<navigator v-for="(item,index) in nav" :key="index" :url="item.url" :open-type="item.type" hover-class="none" class="index-nav-item d-flex d-flex-middle">
				<image :src="item.src"/>
				{{item.text}}
			</navigator>
		</view>
		<view>
			<view class="index-product-tit">
				<sec-title title="产品租用" type="switchTab" url="../product/product"/>
			</view>
			<scroll-view scroll-x class="index-product-list scroll-view">
				<view v-for="(item,index) in product" :key="index" @click="toProductDetail" class="index-product-item">
					<product :info="item"/>
				</view>
			</scroll-view>
		</view>
		<image src="../../static/index-ad.gif" class="index-ad"/>
		<view class="index-cases">
			<sec-title title="应用案例" url="../cases/cases"/>
			<view v-for="(item,index) in cases" :key="index" class="index-cases-item">
				<cases :info="item" origin="index"/>
			</view>
		</view>
		<view class="index-video">
			<sec-title title="视频专区" url="../video/video"/>
			<view class="index-video-main d-flex d-flex-middle d-flex-between">
				<navigator url="" class="big"><image src="../../static/img01.png" class="d-img"/></navigator>
				<navigator url="" class="small"><image src="../../static/img01.png" class="d-img"/></navigator>
			</view>
			<navigator url="" class="index-video-botm d-flex d-flex-middle">
				<image src="../../static/img01.png" class="index-video-btom-img d-flex-unShrink"/>
				<view class="index-video-botm-text d-flex-item">
					<view class="title d-flex d-flex-middle"><text class="d-ellipsis-single">智能光学追踪扫描仪在文博</text>>></view>
					<text class="desc">近年来，随着三维扫描技术的快速发展</text>
				</view>
				<image src="../../static/icon-play.png" class="index-video-botm-btn d-flex-unShrink"/>
			</navigator>
		</view>
		<view class="index-power">
			<sec-title title="研发实力"/>
			<image mode="widthFix" src="../../static/index-botm.png" class="img"/>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import Banner from '../../components/banner.vue'
	import SecTitle from '../../components/indexSecTitle.vue'
	import Product from '../../components/indexProduct.vue'
	import Cases from '../../components/casesItem.vue'
	
	export default {
		components:{
			Banner,
			SecTitle,
			Product,
			Cases
		},
		data() {
			return {
				banner:['','',''],
				nav:[
					{src:'../../static/index-nav01.png',text:'产品租用',url:'../product/product',type:'switchTab'},
					{src:'../../static/index-nav02.png',text:'应用案例',url:'../cases/cases',type:'navigate'},
					{src:'../../static/index-nav03.png',text:'工程师租用',url:'../engineerRent/engineerRent',type:'navigate'},
					{src:'../../static/index-nav04.png',text:'资讯展会',url:'../information/information',type:'switchTab'}
				],
				product:['','',''],
				cases:['','','','']
			}
		},
		onLoad() {

		},
		methods: {
			toProductDetail(){
				uni.navigateTo({
					url:'../detail/detail'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page
		background-color #f5f7f9
	.index-container
		padding-bottom 56rpx
	.index-nav
		padding 40rpx 32rpx 0
		height 250rpx
		.index-nav-item
			padding-left 55rpx
			width 330rpx
			height 113rpx
			background-color #fff
			font-size 28rpx
			color #4c4c4c
			box-sizing border-box
			image
				margin-right 40rpx
				width 61rpx
				height 65rpx
	.index-product-tit
		padding 0 25rpx
	.index-product-list
		padding-bottom 40rpx
		white-space nowrap
		.index-product-item
			display inline-block
	.index-ad
		display block
		width 100%
		height 213rpx
	.index-cases
		padding 0 24rpx 6rpx
		.index-cases-item
			margin-bottom 24rpx
			height 183rpx
			border-radius 10rpx
			overflow hidden
	.index-video
		position relative
		margin-bottom 60rpx
		padding 0 24rpx 90rpx
		background-color #fff
		.index-video-main
			height 386rpx
			navigator
				border-radius 20rpx
				overflow hidden
				transition all 0.2s linear
			.big
				width 347rpx
				height 100%
			.small
				width 324rpx
				height 359rpx
		.index-video-botm
			position absolute
			left 62rpx
			right 62rpx
			bottom -66rpx
			height 94rpx
			padding 6rpx 25rpx 6rpx 10rpx
			background-color #edf9ff
			border-radius 10rpx
			box-shadow 5rpx 3rpx 7rpx 0 rgba(237,237,237,.34)
			box-sizing border-box
			.index-video-btom-img
				margin-right 20rpx
				width 87rpx
				height 81rpx
				border-radius 10rpx
			.index-video-botm-text
				width 50%
				.title
					width 100%
					font-size 30rpx
					color #4C4C4C
					text
						width 90%
				.desc
					margin-top 4rpx
					font-size 22rpx
					color #999
			.index-video-botm-btn
				margin-left 30rpx
				width 26rpx
				height 38rpx
	.index-power
		padding 0 24rpx
		.img
			width 100%
</style>
