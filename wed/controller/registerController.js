angular.module('app')
	.controller('registerController',['$scope','vaildFrom', 'tip','API', 'formatTime','$state',
		function($scope, vaildFrom, tip, API, formatTime, $state){
		$scope.info = {
			userName:'',
			phone:'',
			code:'',
			pwd:'',
			repwd:'',
			agree:'',
			registerTime:''
		}


		$scope.isPass = true;
		//验证按钮显示
		$scope.isPhone = function(){
			$scope.isPass = !vaildFrom.vaildPhone($scope.info.phone) ;

		}

		$scope.register = function(){
			if(!isValid()){return};
			
			
			$scope.info.registerTime = formatTime.format(new Date(),"yyyy-MM-dd hh:mm:ss");

			tip.loadTips.showloading();

			API.fetchGet('http://127.0.0.1:9000/register', $scope.info)
				.then((data)=>{
					tip.loadTips.hideloading();
					console.log(data);
					console.log(data.data.statusCode);
					if(data.data.statusCode == 201){
						tip.showTip($scope, data.data.msg);
					}else{
						$state.go('login')
					}
				})
				.catch((err)=>{
					tip.loadTips.hideloading();
					console.log(err);
				})
		} 

		

		$scope.getCode = function(){
			API.fetchGet('http://127.0.0.1:9000/message',{phone:$scope.info.phone})
				.then((data)=>{
					$scope.code = data.data.code;
					console.log($scope.code);
					})
				.catch((err)=>{
					console.log('服务器出错了');
				})
		}

		function isValid(){
			if(vaildFrom.isNotEmpty($scope.info.userName)){
				tip.showTip($scope, '用户名不能为空');
				return false;
			} else if(!vaildFrom.vaildLength($scope.info.userName, 6, 10)){
				tip.showTip($scope, '请输入6-10数字英文组合会员名称');
				return false;
			} else if(vaildFrom.isNotEmpty($scope.info.phone)){
				tip.showTip($scope, '手机号码不能为空');
				return false;
			} else if(!vaildFrom.vaildLength($scope.info.phone, 11, 11)){
				tip.showTip($scope, '手机号码长度不正确');
				return false;
			} else if(vaildFrom.isNotEmpty($scope.info.code)){
				tip.showTip($scope, '验证码不能为空');
				return false;
			}else if (!vaildFrom.isEmpty($scope.code,  $scope.info.code)){
				tip.showTip($scope, '验证码错误');
				return false;
			}else if (vaildFrom.isNotEmpty($scope.info.pwd)){
				tip.showTip($scope, '密码不能为空');
				return false;
			}else if(!vaildFrom.vaildLength($scope.info.pwd, 8, 21)){
				tip.showTip($scope, '密码长度为8~21位');
				return false;
			} else if (!vaildFrom.isEmpty($scope.info.pwd,  $scope.info.repwd)){
				tip.showTip($scope, '前后密码不一致');
				return false;
			}
			

			return true ; 
		}

	}])
