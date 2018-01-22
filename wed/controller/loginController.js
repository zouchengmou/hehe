angular.module('app')
	.controller('loginController',['$scope','$rootScope', 'vaildFrom', 'tip','$state','API', function($scope, $rootScope, vaildFrom, tip, $state, API){
		$scope.footers = [
		'./images/icon/QQ.png',
		'./images/icon/login_wechat.png',
		'./images/icon/login_blog.png'
		]

		$scope.userInfo = {
			phone: '',
			pwd:''
		}
		$scope.register = function(){
		  	$state.go("register");

		}
		$scope.forget = function(){
		  	$state.go("passwordByEmail");
		  }		
		$rootScope.goBack = function(){
			history.go(-1);
		}

		$scope.login = function(){
			tip.loadTips.showloading()
			// if(!isValid()){return};
			
			API.fetchGet('http://127.0.0.1:9000/login', $scope.userInfo)
			.then((data)=>{
				console.log('data=>',data);
				if(data.data.statusCode === 300){
					// $state.go('layout.index');
					$rootScope.userInfo.isLogin = true;
					console.log($rootScope.userInfo);
					$rootScope.userInfo.phone = data.data.phone;
					$rootScope.userInfo.ninckName = data.data.ninckName == null ? "" : data.data.ninckName;
					}else{
						tip.showTip($scope, data.data.msg);
				}
				tip.loadTips.hideloading();
			})
			.catch((err)=>{
				console.log(err);
				tip.showTip($scope, data.data.msg);
				tip.loadTips.hideloading();
			})

		}

		function isValid(){
			if(vaildFrom.isNotEmpty($scope.userInfo.phone)){
				tip.showTip($scope,'手机号码不能为空');
				return false;
			}else if(!vaildFrom.vaildLength($scope.userInfo.phone, 11, 11)){
				tip.showTip($scope,'手机号码长度不正确');
				return false;
			}else if(!vaildFrom.vaildPhone($scope.userInfo.phone)){
				tip.showTip($scope,'手机号码格式不正确');
				return false;
			}else if(vaildFrom.isNotEmpty($scope.userInfo.pwd)){
				tip.showTip($scope,'密码不能为空');
				return false;
			}else if(!vaildFrom.vaildLength($scope.userInfo.pwd, 8, 16)){
				tip.showTip($scope,'密码长度不正确');
				return false;
			}
		}
	}])