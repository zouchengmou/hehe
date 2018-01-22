angular.module('LoadingApp', ['ionic'])
	.controller('LoadingCtrl', function($scope, $ionicLoading) {
		$scope.show = function() {
		    $ionicLoading.show({
		      template: 'Loading...'
		    });
		  };
		  $scope.hide = function(){
		    $ionicLoading.hide();
		  };
		$scope.loaing_false=[{
			flases:'加载失败',
			Loaing_banner:'./images/icon/Loaing.png',
			loaing_txt:'页面飞去太空了...',
			loaing_return:'请重新加载网页',
		}]
	}])