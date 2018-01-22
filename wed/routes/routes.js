angular.module('app')
 	.config(['$stateProvider','$urlRouterProvider',
 		function($stateProvider,$urlRouterProvider){
 			$urlRouterProvider.otherwise('/login');
 			$stateProvider
 				.state('layout',{
 					url:'',
 					templateUrl:'./views/layout.html',
 					abstruct:true,
 					controller:'indexController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('index');
 						}]
 					}
 				})
 				
 				.state('layout.index',{
 					url:'/index',
 					templateUrl:'./views/index.html',
 					controller:'indexController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('index');
 						}]
 					}
 				})
 				.state('thressRoutes',{
 					url:'',
 					templateUrl:'./views/thressRoutes.html',
 					controller:'myOrderController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('myOrder');
 						}]
 					}
 				})
 				.state('layout.classify',{
 					url:'',
 					abstruct:true,
 					templateUrl:'./views/classify.html',
 					controller:'classifyController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('classify');
 						}]
 					}
 				})
 				.state('layout.classify.lvtworoutes',{
 					url:'/lvtworoutes',
 					templateUrl:'./views/lvtworoutes.html',
 					//controller:'lvtworoutesController',
 					// resolve:{
 					// 	des:['$ocLazyLoad',function($ocLazyLoad){
 					// 		return $ocLazyLoad.load('lvtworoutes');
 					// 	}]
 					// }
 				})
 				.state('layout.shopping',{
 					url:'/shopping',
 					templateUrl:'./views/shopping.html',
 					controller:'shoppingController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('shopping');
 						}]
 					}
 				})
 				.state('address',{
 					url:'/address',
 					templateUrl:'./views/address.html',
 					controller:'addressController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('address');
 						}]
 					}
 				})
 				.state('layout.Boutique',{
 					url:'/Boutique',
 					templateUrl:'./views/Boutique.html',
 					controller:'BoutiqueController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('Boutique');
 						}]
 					}
 				})
 				.state('thressRoutes.myOrder',{
 					url:'/myOrder',
 					templateUrl:'./views/myOrder.html',
 					controller:'myOrderController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('myOrder');
 						}]
 					}
 				})
 				.state('layout.mycenter',{
 					url:'/mycenter',
 					templateUrl:'./views/mycenter.html',
 					controller:'mycenterController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('mycenter');
 						}]
 					}
 				})
 				.state('thressRoutes.waitpay',{
 					url:'/waitpay',
 					templateUrl:'./views/waitpay.html',
 					controller:'waitpayController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('waitpay');
 						}]
 					}
 				})
 				.state('lead',{
 					url:'/lead',
 					templateUrl:'./views/lead.html',
 					controller:'leadController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('lead');
 						}]
 					}
 				})
 				.state('loaing',{
 					url:'/loaing',
 					templateUrl:'./views/loaing.html',
 					controller:'loaingController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('loaing');
 						}]
 					}
 				})
 				.state('register',{
 					url:'/register',
 					templateUrl:'./views/register.html',
 					controller:'registerController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('register');
 						}]
 					}
 				})
 				.state('login',{
 					url:'/login',
 					templateUrl:'./views/login.html',
 					controller:'loginController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('login');
 						}]
 					}
 				})
 				.state('thressRoutes.confirm',{
 					url:'/confirm',
 					templateUrl:'./views/confirm.html',
 					controller:'confirmController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('confirm');
 						}]
 					}
 				})
 				.state('classify-Health',{
 					url:'/classify-Health',
 					templateUrl:'./views/classify-Health.html',
 					controller:'classify-HealthController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('classify-Health');
 						}]
 					}
 				})
 				.state('Logistics',{
 					url:'/Logistics',
 					templateUrl:'./views/Logistics.html',
 					controller:'LogisticsController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('Logistics');
 						}]
 					}
 				})
 				.state('mycoupon',{
 					url:'/mycoupon',
 					templateUrl:'./views/mycoupon.html',
 					controller:'mycouponController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('mycoupon');
 						}]
 					}
 				})
 				.state('thressRoutes.myOrder_all',{
 					url:'/myOrder_all',
 					templateUrl:'./views/myOrder_all.html',
 					controller:'myOrder_allController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('myOrder_all');
 						}]
 					}
 				})
 				.state('thressRoutes.waitGoods',{
 					url:'/waitGoods',
 					templateUrl:'./views/waitGoods.html',
 					controller:'waitGoodsController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('waitGoods');
 						}]
 					}
 				})
 				.state('setting_number',{
 					url:'/setting_number',
 					templateUrl:'./views/setting_number.html',
 					controller:'setting_numberController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('setting_number');
 						}]
 					}
 				})
 				.state('pay',{
 					url:'/pay',
 					templateUrl:'./views/pay.html',
 					controller:'payController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('pay');
 						}]
 					}
 				})
 				.state('paySuccess',{
 					url:'/paySuccess',
 					templateUrl:'./views/paySuccess.html',
 					controller:'paySuccessController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('paySuccess');
 						}]
 					}
 				})
 				.state('productionDetail',{
 					url:'/productionDetail',
 					templateUrl:'./views/productionDetail.html',
 					controller:'productionDetailController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('productionDetail');
 						}]
 					}
 				})
 				.state('comment',{
 					url:'/comment',
 					templateUrl:'./views/comment.html',
 					controller:'commentController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('comment');
 						}]
 					}
 				})
 				.state('seeing',{
 					url:'/seeing',
 					templateUrl:'./views/seeing.html',
 					controller:'seeingController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('seeing');
 						}]
 					}
 				})
 				.state('phone',{
 					url:'/phone',
 					templateUrl:'./views/phone.html',
 					controller:'phoneController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('phone');
 						}]
 					}
 				})
 				.state('rePayment',{
 					url:'/rePayment',
 					templateUrl:'./views/rePayment.html',
 					controller:'rePaymentController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('rePayment');
 						}]
 					}
 				})
 				.state('addressEdit',{
 					url:'/addressEdit',
 					templateUrl:'./views/addressEdit.html',
 					controller:'addressEditController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('addressEdit');
 						}]
 					}
 				})
 				.state('passwordByEmail',{
 					url:'/passwordByEmail',
 					templateUrl:'./views/passwordByEmail.html',
 					controller:'passwordByEmailController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('passwordByEmail');
 						}]
 					}
 				})
 				.state('passwordByphone',{
 					url:'/passwordByphone',
 					templateUrl:'./views/passwordByphone.html',
 					controller:'passwordByphoneController',
 					resolve:{
 						des:['$ocLazyLoad',function($ocLazyLoad){
 							return $ocLazyLoad.load('passwordByphone');
 						}]
 					}
 				})
 				
 	}])
 	