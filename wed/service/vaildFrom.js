angular.module('app')
	.factory('vaildFrom',[function(){
		return{
			//验证手机号码
			vaildPhone:function(val){
				var reg = /^1[35678]\d{9}$/;
				return reg.test(val);
			},
			//非空
			isNotEmpty:function(val){
				return val == '' ? true : false;
			},
			//长度验证
			vaildLength:function(val, min, max){
				return val.length >= min && val.length <= max ? true :false ;
			},
			//两值相等
			isEmpty:function(v1, v2){
				return v1 === v2 ? true :false;
			},
			//邮箱
			isEmail:function(val){
				var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				return	  reg.test(val) ;		 
			}
		}
	}])