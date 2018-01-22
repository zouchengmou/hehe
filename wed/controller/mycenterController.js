angular.module('app')
	.controller('mycenterController',['$scope',function($scope){
		$scope.mycenterheader =[
		{
			header:'个人中心'
		}
		];
		$scope.banner = [
		{
			bannerBigImg:'./images/mycenter_banner.png',
			bannersmallImg:'./images/icon/mycenter_iconheader.png'
		}
		];
		$scope.bannerList = [
		{
			name:'Sulakj klids',
			Record:'购买记录',
			buyNumber:'18',
			Collection:'收藏商品',
			CollectionNumber:'52',
			seeing:'浏览记录',
			seeingNumber:'78'
		}
		];
		$scope.list = [
		{
			icon:'icon ion-cash',
			wait:'待付款',
			url:'thressRoutes.waitpay'
		},
		{
			icon:'icon ion-android-plane',
			wait:'待发货',
			url:''
		},
		{
			icon:'icon ion-ios-paper-outline',
			wait:'待收货',
			url:''
		},
		{
			icon:'icon ion-social-bitcoin-outline',
			wait:'退款区',
			url:''
		}
		];
		$scope.data = [
		{
			icon:'icon ion-ios-paper-outline',
			myOrder:'我的订单',
			backIcon:'icon ion-ios-arrow-forward',
			url:'thressRoutes.myOrder'
		},
		{
			icon:'icon  ion-android-star-outline',
			myOrder:'我的收藏',
			backIcon:'icon ion-ios-arrow-forward',
			url:''
		},
		{
			icon:'icon  ion-android-phone-portrait',
			myOrder:'手机绑定',
			backIcon:'icon ion-ios-arrow-forward',
			url:'phone'
		},
		{
			icon:'icon  ion-ios-chatbubble-outline',
			myOrder:'我的评论',
			backIcon:'icon ion-ios-arrow-forward',
			url:'comment'
		},
		{
			icon:'icon  ion-android-pin',
			myOrder:'修改收货地址',
			backIcon:'icon ion-ios-arrow-forward',
			url:'address'
		},
		{
			icon:'icon  ion-android-person',
			myOrder:'修改个人资料',
			backIcon:'icon ion-ios-arrow-forward',
			url:''
		}
		]
	}])