angular.module('app')
	.controller('myOrder_allController',['$scope',function($scope){
		$scope.data = [
		{
			header:'我的订单'
		}
		];
		$scope.product_list =[
		{
			orderNumber:'订单号：1256546586213',
			waitDeal:'待处理'
		}
		];
		$scope.myOrder_all = [
		{
			orderImg:'./images/barimage.png',
			pot:'雅柯商用电磁炉炒菜火锅',
			furnace:'电磁灶 3500W',
			money:'￥188.00',
			number:'1件',
			delete:'取消订单',
			send:'【雅柯配送】'
		},
		{
			orderImg:'./images/myOrder.png',
			pot:'电磁炉PIT35触摸轻薄大火力 ',
			furnace:'电磁灶 4200W',
			money:'￥168.00',
			number:'1件',
			delete:'取消订单',
			send:'【雅柯配送】'
		},
		{
			orderImg:'./images/index_main11.png',
			pot:'大火力智能预约纤薄嵌入式 ',
			furnace:'电磁灶 3900W',
			money:'￥278.00',
			number:'1件',
			delete:'取消订单',
			send:'【雅柯配送】'
		}
		];
		$scope.total = [
		{
			all:'合计：',
			money:'￥951.00',
			sure:'确认订单'
		}
		];
		$scope.orderNumber =[
		{
			number:'订单号：8956546586213 ',
			comfin:'订单已完成'
		}
		];
		$scope.complete =[
		{
			completeImg:'./images/confirm.png',
			pot:'雅柯商用电磁炉  炒菜火锅',
			furnace:'电磁灶 3500W',
			money:'合计：￥188.00',
			free:'（免邮费：￥0）',
			next:'欢迎在次购物',
			seeing:'查看物流',
			sure:'确认收货',
			number:'数量：2',
			status:'己完成'
		},
		{
			completeImg:'./images/index_main8.png',
			pot:'大火力智能预约纤薄嵌入式',
			furnace:'水果机 5200W',
			money:'合计：￥99.00 ',
			free:'（免邮费：￥0）',
			next:'欢迎在次购物',
			seeing:'查看物流',
			sure:'确认收货',
			number:'数量：2',
			status:'己完成'
		}
		]

		$scope.remove = function(index){
			$scope.myOrder_all.splice(index,1);
		}

	}])