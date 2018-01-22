const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename +'/common/common.js');

class RouteController {
			constructor () {}

			//短信验证码功能
			sendMessageController(req, res){
				
				//随机生成验证码		
				let time = new Date().getTime().toString();
				let code = time.slice(time.length - 6);

				res.json({code:code});
				Utils.sendMessage(req.query.phone, code)
						.then((data)=> {
						    let {Code} = data ;
						    if (Code === 'OK') {
						        //处理返回参数
						        res.json({code:code, msg:'发送短信验证码成功', status:1})
						    }
						})
						.catch((err) => {
					    console.log(err);
					    res.json({msg:'发送短信验证码错误', status: 0})
					})
					
			}

			//注册功能
			registerController (req, res) {

				//查询手机号是否被注册
				let selectSQL = SQL.findOneSQL(req.query, 'phone');

				API.query(selectSQL)

					.then((result)=>{
						if(result[0].length === 1){
							res.json(common.register.info);
						}else{
							// 加密功能
							Utils.addCrypto(req.query, 'pwd');

							let sql = SQL.registerSQL(req.query);
								API.query(sql)
									.then((data)=>{
										res.json(common.register.success);
									})
									.catch((err)=>{
										res.json(common.register.error);
									})

						}
					})
					.catch((err)=>{
						res.json(common.register.error);
					})	
			}

			//登录功能
			loginController (req, res){

				// 加密功能
				Utils.addCrypto(req.query, 'pwd');
				let loginSQL = SQL.loginSQL(req.query);

				API.query(loginSQL)
					.then((result)=>{
							if(result[0].length === 1){
								common.login.success.phone = result[0][0].phone;
								common.login.success.ninckName = result[0][0].ninckName;
								res.send(common.login.success);
								console.log(common.login.success);

								let updatesql = SQL.updateloginstatusSQL(req.query, 1)
								API.query(updatesql)
										.then((result)=>{
											console.log(result);
										})
										.catch((err)=>{
											console.log(err);
										})
							}else{
								res.send(common.login.info);
							}
					})
					.catch((err)=>{
						res.json(common.login.error);
					})
			}

			//邮箱
			passwordByEmailController(req, res){
					//随机生成验证码		
					let time = new Date().getTime().toString();
					let code = time.slice(time.length - 6);
					res.send({code:code});
					let options = {
						from: '13078280252@163.com', //发件地址
						to: req.query.email, //收件地址
						subject: '修改密码', //主题标题
						text: '验证码',
						html: '<b>您的验证码是: ' + code + ',一切向您索取验证码都是骗子</b>' //邮件内容模板
					}
						console.log(req.query.email);
					Utils.sendEmail(options, function(){
							res.json({msg:'成功了',statusCode:700});
						
							})

				}

				//手机号找回密码
			passwoedByphoneController(req, res){

			}




			}
  module.exports = new RouteController();