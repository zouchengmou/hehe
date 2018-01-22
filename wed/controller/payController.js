angular.module('app')
	.controller('payController',['$scope',function($scope){
		$scope.payHeader = [
		{
			header:'支付收银台'
		}
		];
		$scope.payProduct = [
		{
			product:'电炖锅隔水炖电炖盅',
			money:'176.00元'
		},
		{
			product:'家用电动不锈钢搅拌机',
			money:'156.00元'
		},
		{
			product:'电磁炉纤薄滑控匀',
			money:'299.00元'
		},
		{
			product:'便携式榨汁机',
			money:'127.00元'
		}
		];
		$scope.tatol = [
		{
			tatolSum:'总价明细',
			money:'合计 520.00元'
		},
		{
			tatolSum:'支付金额',
			money:'合计 512.00元'
		},
		{
			tatolSum:'选择支付方式',
		}
		];
		$scope.pay_method = [
		{
			payImg:"./images/icon/Alipay.png",
			Alipay:'支付宝钱包支付',
			newPerson:'新用户立刻减8元',
			push:'推荐',
			return:'返现'
		},
		{
			payImg:"./images/icon/weChat.png",
			Alipay:'微信支付',
			newPerson:'推荐微信用户使用',
			push:'',
			return:''
		},
		{
			payImg:"./images/icon/bank.png",
			Alipay:'银行卡支付',
			newPerson:'选择你常用的银行',
			push:'',
			return:''
		}
		];
		$scope.safe_pay =[
		{
			srue:'确定支付',
			safe:'以上支付支付宝最安全'
		}
		]
	}])