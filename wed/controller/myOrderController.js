angular.module('app') 
	.controller('myOrderController',['$scope',function($scope){
		
		$scope.common = [
		{
			all:'全部' ,
			round:'thressRoutes.myOrder_all'
		}, 
		{
			all:'待付款',
			round:'thressRoutes.waitpay'
		},
		{
			all:'待收货',
			round:'thressRoutes.waitGoods'
		},
		{
			all:'已完成',
			round:'thressRoutes.confirm'
		}
		]
	}])