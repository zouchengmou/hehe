angular.module('app')
	.factory('tip',['$ionicPopup','$ionicLoading',function($ionicPopup,  $ionicLoading){
		return{
			showTip:function(scope, msg){
				$ionicPopup.show({
				    template: '<div class="text-center">'+ msg +'</div>',
				    title: '提示',
				    scope: scope,
				    buttons: [
				      {
				        text: '<b>确认</b>',
				        type: 'button-positive',
				        
				      }
				    ]
				  });
			},
			loadTips:{
				showloading:function(){
					$ionicLoading.show({
				      template: '<ion-spinner class="spinner-energized" icon="spiral"></ion-spinner>'
				    });
				},
				hideloading:function(){
				$ionicLoading.hide();
				}
			}
		}
	}])