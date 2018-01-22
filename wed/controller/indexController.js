angular.module('app')
	.controller('indexController',['$scope',
		function($scope){
		$scope.index_header = [
		{
			placeholder:'请输入电器名称',
		}
		];
		
		$scope.index_banner= [
		{
			bannerImg:'./images/banner2.png'
		},
		{
			bannerImg:'./images/banner3.png'
		},
		{
			bannerImg:'./images/banner4.png'
		}
		];
		$scope.data = [
		{
			productImg:'./images/icon/index2.png',
			productTxt:'养生'
		},
		{
			productImg:'./images/icon/index_main1.png',
			productTxt:'新产品'
		},
		{
			productImg:'./images/icon/index3.png',
			productTxt:'全自动'
		},
		{
			productImg:'./images/icon/index4.png',
			productTxt:'更多'
		}
		];
		$scope.Health_product = [
		{
			Health:'养身电器',
			new:'最新',
			Go:'养身之选把心仪宝贝带走！',
		}
		];
		$scope.Soybean_machine = [
		{	
			SoybeanImg:'./images/index_main1.png',
			Soybean_machine:'豆类机 玫红色',
			price:'活动价',
			money:'￥68.00',
			moneyed:'￥52.90',
			buying:'立刻购买',
		},
		{	
			SoybeanImg:'./images/index_main2.png',
			Soybean_machine:'豆类机 玫红色',
			price:'活动价',
			money:'￥68.00',
			moneyed:'￥52.90',
			buying:'立刻购买',
		},
		{	
			SoybeanImg:'./images/index_main3.png',
			Soybean_machine:'豆类机 玫红色',
			price:'活动价',
			money:'￥68.00',
			moneyed:'￥52.90',
			buying:'立刻购买',
		}
		];
		$scope.automation=[
		{
			automation_product:'全自动化',
			strong:'最强',
			our:"科技引领集中团购带走我们！",
		}
		];
		$scope.hot_selling = [
		{
			sellingImg:'./images/index_main4.png',
			ground_buy:'团购价',
			Discount:"7.8折",
			blank:'全能自动 酷黑色',
			money:'￥79.00',
			moneyed:'￥66.90',

		},
		{
			sellingImg:'./images/index_main5.png',
			ground_buy:'团购价',
			Discount:"7.8折",
			blank:'全能自动 酷黑色',
			money:'￥79.00',
			moneyed:'￥66.90',
			
		},
		{
			sellingImg:'./images/index_main6.png',
			ground_buy:'团购价',
			Discount:"7.8折",
			blank:'全能自动 酷黑色',
			money:'￥79.00',
			moneyed:'￥66.90',
			
		}
		];
		$scope.hot = [
		{
			hot:'热销系列',
			hotest:'最热',
			fllow:'趁火打劫都带走我们！',
		}
		];
		$scope.Juicer =[
		{
			Health:'榨汁机 营养均衡',
			price:'￥79.00',
			old_price:'￥66.9',
			JuicerImg:'./images/index_main7.png',
		},
		{
			Health:'榨汁机 营养均衡',
			price:'￥79.00',
			old_price:'￥66.9',
			JuicerImg:'./images/index_main8.png',
		},
		{
			Health:'榨汁机 营养均衡',
			price:'￥79.00',
			old_price:'￥66.9',
			JuicerImg:'./images/index_main9.png',
		}
		];
		$scope.footer=[
 
		{
			icon_off:'icon ion-ios-home-outline',
			icon_on:'icon ion-ios-home',
			round:'layout.index',
			home:'首页'
		},
		{
			icon_off:'icon ion-ios-keypad-outline',
			icon_on:'icon ion-ios-keypad',
			round:'layout.classify.lvtworoutes',
			home:'分类'
		},
		{
			icon_off:'icon ion-ios-star-outline',
			icon_on:'icon ion-ios-star',
			round:'layout.Boutique',
			home:'精品'
		},
		{
			icon_off:'icon ion-ios-cart-outline',
			icon_on:'icon ion-ios-cart',
			round:'layout.shopping',
			home:'购物车'
		},
		{
			icon_off:'icon ion-ios-person-outline',
			icon_on:'icon ion-ios-person',
			round:'layout.mycenter',
			home:'个人中心'
		}
		
		];
		$scope.slide = {
			doesContinue: true,
			autoPlay: true,
			intervalTime: 2000,
			showPager: true
		}

	}])