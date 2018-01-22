angular.module('app')
	.controller('LogisticsController',['$scope',function($scope){
		$scope.Logistics_header = [
		{
			details:'物流详情'
		}
		];
		$scope.Logistics_img = [
		{
			LogisticsImg:'./images/Logistics.png'
		}
		]
		$scope.Submit = [
		{
			order:'订单已提交',
			wait:'你的订单已提交 请耐心等待'
		},
		{
			order:'广州市天河区车陂北街收入',
			wait:'2017-09-16  12：28'
		},
		{
			order:'佛山市南海区发往广州',
			wait:'2017-09-15  11：36'
		},
		{
			order:'深圳市中转站收入',
			wait:'2017-09-14  18：32'
		},
		{
			order:'深圳市雅柯商城已发货',
			wait:'2017-09-14  12：18'
		}
		]
	}])