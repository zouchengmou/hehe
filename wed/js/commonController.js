angular.module('app')
	.controller('homeController', ['$rootScope',function($rootScope){
		//保存登录用户信息
		$rootScope.userInfo = {
			phone:'',
			isLogin:false,
			ninckName:''
		}
		
	}])