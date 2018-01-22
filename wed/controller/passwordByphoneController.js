angular.module('app')
	.controller('passwordByphoneController',
		['$scope', '$state','vaildFrom', 'tip', 'API', '$interval',
		function($scope, $state, vaildFrom, tip, API, $interval){
		$scope.userInfo = {
			phone:'',
			code:'',
			pwd:'',
			repwd:'',
			statusCode:''
		}

		$scope.btn = [
		{
			code:'获取验证码',
		}
		]

		$scope.isPass = true;
		$scope.changes = function(){
			$scope.isPass = !vaildFrom.vaildPhone($scope.userInfo.phone);
		}

 		$scope.GoEmail = function(){
			$state.go('passwordByEmail');
		}

		$scope.getCode = function(){



			API.fetchGet('http://127.0.0.1:9000/message',{phone:$scope.userInfo.phone})
				.then((data)=>{
					$scope.code = data.data.code;
					console.log($scope.code);
				})
				.catch((err)=>{
					console.log('服务器出错了');
				})
		}

		


		$scope.setter = function(){
			// console.log($scope.userInfo);
			// if(!vaild()){return};
			API.fetchGet('http://127.0.0.1:9000/passwordByphone', $scope.userInfo)
					.then((data)=>{
						console.log('data=>',data);
					})
					.catch((err)=>{
						console.log('err=>',err)
					})
		}


		function vaild(){
				if(vaildFrom.isNotEmpty($scope.userInfo.phone)){
						tip.showTip($scope, '手机号码不能为空');
						return false;
					}else if(!vaildFrom.vaildLength($scope.userInfo.phone, 11, 11)){
						tip.showTip($scope, '手机号码长度不正确');
							return false;
					}else if(!vaildFrom.vaildPhone($scope.userInfo.phone)){
						tip.showTip($scope, '手机格式不正确');
							return false;
					}else if(vaildFrom.isNotEmpty($scope.userInfo.code)){
						tip.showTip($scope, '验证码不能为空');
						return false;
					}else if(!vaildFrom.isEmpty($scope.userInfo.code, $scope.code)){
						tip.showTip($scope, '验证码错误');
						return false;
					}else if(vaildFrom.isNotEmpty($scope.userInfo.pwd)){
						tip.showTip($scope, '密码不能为空');
						return false;
					}else if(!vaildFrom.vaildLength($scope.userInfo.pwd, 8, 16)){
						tip.showTip($scope, '密码长度不正确');
							return false;
					}else if(!vaildFrom.isEmpty($scope.userInfo.pwd, $scope.userInfo.repwd)){
						tip.showTip($scope, '密码不一致');
						return false;
					}
					return true;
		}
	}])