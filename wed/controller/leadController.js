angular.module('app')
	.controller('leadController', ['$scope','$state', 
		function ($scope, $state) {


		$scope.data = [
		{
			img: './images/lead4.jpg',
			url:''
		},
		{
			img: './images/lead1.jpg',
			url:''
		},
		{
			img: './images/lead3.jpg',
			url:''
		},
		{
			img: './images/lead2.jpg',
			url:''
		}
		];
		
	$scope.jump = function(item, index){
			for (var i = 0; i < $scope.data.length; i++) {
					console.log(i);
			}
				console.log(item);
			
		
	}		
		
	}])