angular.module('app')
	.controller('addressEditController',["$scope",function($scope){
		$scope.address_add=[
		{
			name:'收货人',
			last_name:'张三',
			phone:'联系人电话:',
			real:'130*******31',
			adderss_default:'默认地址：',
			address_house:'所住地址:',
			real_adderss:'广州市越秀区上下九荔湾冲北街10栋1601房',
			right:'false'
		}
		];
	}])