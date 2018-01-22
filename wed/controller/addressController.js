angular.module('app')
	.controller('addressController',['$scope',function($scope){
		$scope.address_header = [
		{
			login:'收货地址',
		}
		];
		$scope.address_main = [
		{
			name:'周星驰',
			phone:'137****5021',
			adderss_default:'默认地址',
			addre:'广州市天河区车陂北街2号大院10栋502房',
			delete:'删除',
			edit:'编辑',
			isEdit: false
		},
		{
			name:'陈礼金',
			phone:'137****8585',
			adderss_default:'默认地址',
			addre:'广州市天河区珠江新城花城汇南方大夏502房',
			delete:'删除',
			edit:'编辑',
			isEdit: false
		},
		{
			name:'周波豪',
			phone:'136****4987',
			adderss_default:'默认地址',
			addre:'广州市越秀区上下九恒宝广场12栋有1208房',
			delete:'删除',
			edit:'编辑',
			isEdit: false
		},
		{
			name:'陈关系',
			phone:'136****5895',
			adderss_default:'默认地址',
			addre:'广州市越秀区上下九荔湾冲北街10栋1601房',
			delete:'删除',
			edit:'编辑',
			isEdit: false
		},
		];
		
		$scope.addadress = [
		{
			add:'添加地址',
		}
		];

        $scope.aa=0;

		$scope.piont = function(item){
			item.isEdit = !item.isEdit;
		}

		$scope.cutOff = function(index){
			$scope.address_main.splice(index,1);
			
		}

		$scope.appending = function(){
			var item = {
			name:'周星驰',
			phone:'137****5021',
			adderss_default:'默认地址',
			addre:'广州市天河区车陂北街2号大院10栋502房',
			delete:'删除',
			edit:'编辑',
			isEdit: false
			}
			$scope.address_main.push(item);
		}


	}])