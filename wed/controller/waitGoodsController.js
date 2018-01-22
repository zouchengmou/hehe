angular.module('app')
	.controller('waitGoodsController',['$scope',function($scope){
		
		$scope.shop = [
		{
			shopName:'雅柯商城',
			wait:'待收货'
		}
		];
		$scope.list = [
		{
			listImg:'./images/barimage.png',
			pot:'雅柯商用电磁炉  炒菜火锅',
			furnace:"电磁灶 3500",
			money:'￥188.00',
			number:'1件',
			delete:'合计：￥188.00',
			send:'（免邮费：￥0）',
			next:'欢迎在次购物',
			seeing:'查看物流',
			sure:'确认收货'
		},
		{
			listImg:'./images/index_main11.png',
			pot:'大火力智能  预约纤薄嵌入式',
			furnace:"电磁灶 3900W",
			money:'￥278.00 ',
			number:'2件',
			delete:' 合计：￥278.00 ',
			send:'（免邮费：￥0）',
			next:'欢迎在次购物',
			seeing:'查看物流',
			sure:'确认收货'
		},
		{
			listImg:'./images/index_main8.png',
			pot:'全自能果汁机 养身必备神器',
			furnace:"电磁灶 2100W",
			money:'￥157.00  ',
			number:'2件',
			delete:' 合计：￥157.00',
			send:'（免邮费：￥0）',
			next:'欢迎在次购物',
			seeing:'查看物流',
			sure:'确认收货'
		}
		];
	}])