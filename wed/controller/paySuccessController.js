angular.module('app')
	.controller("paySuccessController",['$scope',function($scope){
		
		$scope.Success = [
		{
			Img:'./images/icon/paySucces.png',
			sum:'订单金额：￥2,993.00',
			paySucces:'支付成功'
		}
		];
		$scope.send = [
		{
			infromant:'送货信息',
			contact:'我们将安排尽快发货，请买家保持手机通话，以跟快递哥哥第一时间联系'
		}
		];
		$scope.shopping =[
		{
			Continue:'继续购物',
			Order:'查看订单'
		}
		];
		$scope.Prompt = [
		{
			safe:' 安全提示：雅柯集团不会以任何理由叫你提供银卡和支付宝信息，谨防钓鱼网站与诈骗电话。'
		}
		]

	}])