angular.module('app')
	.controller('passwordByEmailController',['$scope', 'vaildFrom', 'tip','$state', 'API', function($scope, vaildFrom, tip, $state, API){
		$scope.userInfo = {
			email:'',
			code:'',
			pwd:'',
			repwd:'',
			statusCode:''
		}
		$scope.isPass = true;

		$scope.isPhone = function(){
					$scope.isPass =	!vaildFrom.isEmail($scope.userInfo.email);
		
			}



		$scope.Gophone = function(){
			$state.go('passwordByphone');
		}

		$scope.getCode = function (){
			
			API.fetchGet('http://127.0.0.1:9000/passwordByEmail', {email:$scope.userInfo.email})
			.then((data)=>{
				$scope.data = data.data.code;
				
			})
			.catch((err)=>{
				console.log(err);
			})
		}

		
		$scope.setter = function(){
			if(!vaild()){return};
			
		}



		function vaild(){
			if(vaildFrom.isNotEmpty($scope.userInfo.email)){
						tip.showTip($scope, '邮箱不能为空');
						return false;
			}else if(!vaildFrom.isEmail($scope.userInfo.email)){
						tip.showTip($scope, '邮箱不正确');
						return false;
			}else if(vaildFrom.isNotEmpty($scope.userInfo.code)){
				tip.showTip($scope, '验证码不能为空');
				return false;
			}else if(!vaildFrom.isEmpty($scope.userInfo.code, $scope.data)){
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
