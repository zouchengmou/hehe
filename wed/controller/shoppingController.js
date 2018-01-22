angular.module("app")
	.controller('shoppingController',['$scope',function($scope){
		$scope.shoppingHeader = [
		{
			car:'购物车',
			write:'编辑'
		}
		]; 
		$scope.new = [
		{
			send:'雅柯直销',
			freeSend:'免运费',
			follow:'养身之选把心仪宝贝带走'
		}
		];
		$scope.product = [
		{
			state:true,
			images:'./images/index_production1.png',
			pot:'现代（HYUNDAI）便携式榨汁机',
			famliy:'家用搅拌机 榨汁杯 果汁机 QC-JB2359',
			Guarantee:'保修1年 七天保退货',
			money:'68.00',
			price:'68.00',
			number:'数量',
			dele:'-',
			sum:1,
			add:'+'
			
		},
		{
			state:true,
			images:'./images/classify1.png',
			pot:'电磁炉纤薄滑控匀',
			famliy:'火爆炒电磁灶SDHCB8E30-210J（赠汤锅+炒锅）',
			Guarantee:'保修180天 七天保退货',
			money:'99.00',
			price:'99.00',
			number:'数量',
			dele:'-',
			sum:1,
			add:'+',
			
		},
		{
			state:true,
			images:'./images/index_main9.png',
			pot:'绞肉机',
			famliy:'家用电动不锈钢搅拌机绞馅机碎肉机料理机打蛋',
			Guarantee:'保修180天 七天保退货',
			money:'108.00',
			price:'108.00',
			number:'数量',
			dele:'-',
			sum:1,
			add:'+'
			
		},
		{
			state:true,
			images:'./images/classify9.png',
			pot:'电炖锅隔水炖电炖盅',
			famliy:'智能预约煲汤锅WBZS16D白瓷三胆1.6L',
			Guarantee:'保修360天 七天保退货',
			money:'127.00',
			price:'127.00',
			number:'数量',
			dele:'-',
			sum:1,
			add:'+'
			
		}
		];
		$scope.both = [
		{
			all:'全选',
			totalMoney:'合计：7848.00',
			pay:'去结算（4）',
			name:''
		}
		]

		$scope.selectAll=true;

		$scope.all= function (item) {  
	        for(var i=0; i< $scope.product.length; i++){  
	          if(item === true){  
	              $scope.product[i].state=true;  
	          }else {  
	              $scope.product[i].state=false;  
	          }  
	          console.log(item);
	        } 
	      
	    };  


		$scope.added = function(item){
			item.sum >=10 ? 10 : item.sum++ ;
			item.money =Number(item.price) * item.sum;
			item.money = item.money.toFixed(2);
			
		}
		$scope.reduce = function(item){
			if(item.sum >0){
			   item.sum = item.sum-1;
			   item.money = Number(item.money) - Number(item.price);
			   item.money = item.money.toFixed(2);
			}else{
				item.sum = 0;
				item.money = 0.00.toFixed(2);				
			}

			
		}
		$scope.number = function(){
			var a = 0;
			for (var i = 0; i < $scope.product.length; i++) {
				b = $scope.product[i].sum
				a = a + b ;
				
			}
			return "去结算（" + a +"）" ;
		}
		$scope.total = function(){
			var a =0;
			for (var i = 0; i < $scope.product.length; i++) {
			b =$scope.product[i].price*$scope.product[i].sum;
			a = a+b;
			}
			return "总计：" + a.toFixed(2);
		}
	}])