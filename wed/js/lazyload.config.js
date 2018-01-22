(function () {
var app = angular.module('app');

app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", 
	function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
			 		name: 'index',
			 		files: [
			 			'./controller/indexController.js',
			 			'./css/index.css'
			 		]
			 	},
			 	{
			 		name: 'layout',
			 		files: [
			 			'./controller/indexController.js',
			 			'./css/index.css'
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./controller/classifyController.js',
			 			'./css/classify.css'
			 		]
			 	},
			 	{
			 		name: 'shopping',
			 		files: [
			 			'./controller/shoppingController.js',
			 			'./css/shopping.css'
			 		]
			 	},
			 	{
			 		name: 'mycenter',
			 		files: [
			 			'./controller/mycenterController.js',
			 			'./css/mycenter.css'
			 		]
			 	},
			 	{
			 		name: 'address',
			 		files: [
			 			'./controller/addressController.js',
			 			'./css/address.css'
			 		]
			 	},
			 	{
			 		name: 'Boutique',
			 		files: [
			 			'./controller/BoutiqueController.js',
			 			'./css/Boutique.css'
			 		]
			 	},
			 	{
			 		name: 'waitpay',
			 		files: [
			 			'./controller/waitpayController.js',
			 			'./css/waitpay.css'
			 		]
			 	},
			 	{
			 		name: 'lead',
			 		files: [
			 			'./controller/leadController.js',
			 			
			 		]
			 	},
			 	{
			 		name: 'loaing',
			 		files: [
			 			'./controller/loaingController.js',
			 			'./css/loaing.css'
			 		]
			 	},
			 	{
			 		name: 'register',
			 		files: [
			 			'./controller/registerController.js',
			 			'./css/register.css'
			 		]
			 	},
			 	{
			 		name: 'login',
			 		files: [
			 			'./controller/loginController.js',
			 			'./css/login.css'
			 		]
			 	},
			 	{
			 		name: 'confirm',
			 		files: [
			 			'./controller/confirmController.js',
			 			'./css/confirm.css'
			 		]
			 	},
			 	{
			 		name: 'classify-Health',
			 		files: [
			 			'./controller/classify-HealthController.js',
			 			'./css/classify-Health.css'
			 		]
			 	},
			 	{
			 		name: 'Logistics',
			 		files: [
			 			'./controller/LogisticsController.js',
			 			'./css/Logistics.css'
			 		]
			 	},
			 	{
			 		name: 'mycoupon',
			 		files: [
			 			'./controller/mycouponController.js',
			 			'./css/mycoupon.css'
			 		]
			 	},
			 	{
			 		name: 'myOrder',
			 		files: [
			 			'./controller/myOrderController.js',
			 			'./css/myOrder.css'
			 		]
			 	},
			 	{
			 		name: 'myOrder_all',
			 		files: [
			 			'./controller/myOrder_allController.js',
			 			'./css/myOrder_all.css'
			 		]
			 	},
			 	{
			 		name: 'waitGoods',
			 		files: [
			 			'./controller/waitGoodsController.js',
			 			'./css/waitGoods.css'
			 		]
			 	},
			 	{
			 		name: 'setting_number',
			 		files: [
			 			'./controller/setting_numberController.js',
			 			'./css/setting_number.css'
			 		]
			 	},
			 	{
			 		name: 'pay',
			 		files: [
			 			'./controller/payController.js',
			 			'./css/pay.css'
			 		]
			 	},
			 	{
			 		name: 'paySuccess',
			 		files: [
			 			'./controller/paySuccessController.js',
			 			'./css/paySuccess.css'
			 		]
			 	},
			 	{
			 		name: 'productionDetail',
			 		files: [
			 			'./controller/productionDetailController.js',
			 			'./css/productionDetail.css'
			 		]
			 	},
			 	{
			 		name: 'comment',
			 		files: [
			 			'./controller/commentController.js',
			 			'./css/comment.css'
			 		]
			 	},
			 	{
			 		name: 'seeing',
			 		files: [
			 			'./controller/seeingController.js',
			 			'./css/seeing.css'
			 		]
			 	},
			 	{
			 		name: 'phone',
			 		files: [
			 			'./controller/phoneController.js',
			 			'./css/phone.css'
			 		]
			 	},
			 	{
			 		name: 'rePayment',
			 		files: [
			 			'./controller/rePaymentController.js',
			 			'./css/rePayment.css'
			 		]
			 	},
			 	{
			 		name: 'addressEdit',
			 		files: [
			 			'./controller/addressEditController.js',
			 			'./css/addressEdit.css'
			 		]
			 	},
			 	{
			 		name: 'passwordByEmail',
			 		files: [
			 			'./controller/passwordByEmailController.js',
			 			'./css/passwordByEmail.css'
			 		]
			 	},
			 	{
			 		name: 'passwordByphone',
			 		files: [
			 			'./controller/passwordByphoneController.js',
			 			'./css/passwordByphone.css'
			 		]
			 	},
	 		]
 		});
	}]);
	
})();