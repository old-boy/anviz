const Validator = require('validator');
const isEmpty = require("./isEmpty");

module.exports = function validatorLogin(data){
    let msg = {};

    //字段不能为空,确保返回的值均为字符串
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Validator true 取反时 !Validator

    if(Validator.isEmpty(data.email)){
        msg.email = "邮箱不能为空";
    };

    if(!Validator.isEmail(data.email)){
        msg.email = "邮箱不合法";
    };

    if(Validator.isEmpty(data.password)){
        msg.password = "密码不能为空";
    };

    //通过 isEmpty() 这个方法来验证传过去的这个对象是否存在等
    return {
        msg,
        isValid: isEmpty(msg)
    }
}