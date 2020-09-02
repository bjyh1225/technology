<template>
	<view class="detail-container page-h100 d-flex d-flex-column">
		<view class="body d-flex-item">
			<banner/>
			<view class="spec">
				<spec/>
			</view>
			<view class="section">
				<view class="title">产品参数</view>
				<d-param/>
			</view>
			<view class="section">
				<view class="title">产品详情</view>
				<detail/>
			</view>
			<view class="section">
				<view class="title">视频介绍</view>
				<d-video/>
			</view>
			<cases/>
		</view>
		<view class="foot d-flex-unShrink">
			<d-bottom @rent="rent" @onClickContact="onClickContact" @onClickCollection="onClickCollection" @onClickShare="onClickShare"/>
		</view>
		<spec-pop :isShow="isShowSpec" @onClose="isShowSpec=false"/>
	</view>
</template>

<script>
	import util from '../../common/util.js'
	import Banner from '../../components/detail/banner.vue'
	import Spec from '../../components/detail/specs.vue'
	import DParam from '../../components/detail/params.vue'
	import Detail from '../../components/detail/detail.vue'
	import DVideo from '../../components/detail/video.vue'
	import Cases from '../../components/detail/cases.vue'
	import DBottom from '../../components/detail/bottom.vue'
	import SpecPop from '../../components/detail/specPop.vue'
	
	export default {
		components:{
			Banner,
			Spec,
			DParam,
			Detail,
			DVideo,
			Cases,
			DBottom,
			SpecPop
		},
		data() {
			return {
				isShowSpec:false
			}
		},
		methods: {
			onClickContact(){
				console.log('点击了 资讯')
			},
			onClickCollection(){
				console.log('点击了 收藏')
			},
			onClickShare(){
				console.log('点击了 分享')
			},
			rent(){
				// console.log('点击了 立即租用')
				this.isShowSpec=true
			}
		}
	}
</script>

<style lang="stylus" scoped>
	page
		height 100%
	.detail-container
		.body
			padding-bottom 24rpx
			height 50%
			background-color #f0f0f0
			overflow-y auto
			.spec
				padding 40rpx
			.section
				margin-bottom 24rpx
				padding 0 24rpx 24rpx
				background-color #fff
				.title
					height 80rpx
					line-height 80rpx
					font-size 30rpx
					color #151515
</style>
