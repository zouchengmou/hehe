angular.module('app')
	.controller('waitpayController',["$scope", function($scope){
		
		$scope.header_list = ['全部','待付款','待收货','已完成'];
		$scope.waitpayNumbers =[
		{
			orderNumber:'订单号：1256546586213 ',
			deal:'待处理'
		}
		];
		$scope.waitpay_lists=[
		{
			thumbnail_Img:'./images/barimage.png',
			thumbnail_text:'雅柯商用电磁炉       炒菜火锅',
			power:'电磁灶 3500W',
			money:188.00,
			number:'1件',
			dele:'取消订单',
			carry:'【雅柯配送】',
		},
		{
			thumbnail_Img:'./images/myOrder.png',
			thumbnail_text:'电磁炉PIT35触摸轻薄大火力',
			power:'电磁灶 4200W',
			money:168.00,
			number:'1件',
			dele:'取消订单',
			carry:'【雅柯配送】',
		},
		{
			thumbnail_Img:'./images/index_main11.png',
			thumbnail_text:'大火力智能预约纤薄嵌入式',
			power:'电磁灶 3900W',
			money:278.00 ,
			number:'1件',
			dele:'取消订单',
			carry:'【雅柯配送】',
		}
		];
		$scope.totals= [
		{
			sum:'合计：',
			money:'￥951.00',
			sure:'确认订单'
		}
		]
		$scope.remove = function(index){
			$scope.waitpay_lists.splice(index,1)	
		}
		$scope.all = function(){
			var x = 0;
			for(var i = 0; i < $scope.waitpay_lists.length; i++){
				x =Number($scope.waitpay_lists[i].money) + x;
			}
			return "￥" + x +".00";
		}
	}])