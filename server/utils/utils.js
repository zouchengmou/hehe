const crypto = require('crypto');

const SMSClient = require('@alicloud/sms-sdk');

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'smtp.163.com', //主机地址
  port: 25, //端口
  auth: {
    user: '13078280252@163.com', //发件邮箱
    pass: 'q1217423657' //授权码  
  }
})

// 短信功能
class Utils {

    constructor(){}

    sendMessage(phone, code) {
                const SMSClient = require('@alicloud/sms-sdk');
                // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
                const accessKeyId = 'LTAI5ToRJgYu7jWt' ;
                const secretAccessKey = 'TMlBt1hGTVYYcbhOcbVtYkGKAaJDi6';
                //初始化sms_client
                let smsClient = new SMSClient({accessKeyId, secretAccessKey});
                //发送短信
                 return smsClient.sendSMS({
                    PhoneNumbers: phone,
                    SignName: '柯达商城',
                    TemplateCode: 'SMS_119091895',
                    TemplateParam: '{"code":'+ code +'}',
                });

         }

    addCrypto(o, field){
        
        let md5 = crypto.createHash('md5');
         md5.update(o[field]);
        o[field] = md5.digest('hex');
    }


    //邮箱功能
    sendEmail (options, fn) {
        transporter.sendMail(options, fn);
  }
  

}
module.exports = new Utils();