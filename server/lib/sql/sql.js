class SQL {

	constructor(){}
	//注册
	registerSQL (o) {
		return "INSERT INTO `t_user` (`userName`, `phone`, `pwd`,  `registerTime`) VALUES ('"+ o.userName +"','"+ o.phone +"','"+ o.pwd +"','"+ o.registerTime +"')";
	}

	//查询t_user
	findOneSQL(o, field){
		return "SELECT `"+ field +"` FROM `t_user` WHERE `"+ field +"` = '"+ o[field] +"'";
	}

	//登录
	loginSQL(o){
		return "SELECT `phone`, `pwd`, `ninckName` FROM `t_user` WHERE `phone` = '"+ o.phone +"' AND `pwd` = '"+ o.pwd +"'"
	}

	//修改登录状态
	updateloginstatusSQL(o, val){
		return "UPDATE `t_user` SET `loginStatus` = '"+ val +"' WHERE `phone` = '"+ o.phone +"'"
	}

	//用手机号修改密码
	updatepasswordSQL(o, val){
		return "UPDATE `t_user` SET `pwd` = '"+ val +"' WHERE `phone` = '"+ o.phone +"' "
	}



}

module.exports = new SQL();