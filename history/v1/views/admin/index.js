var express = require("express")
var model_user = require('../../model/user');

//admin 入口
var init = function(req, res) {

    res.render('admin/index', {});

};

//登录
var login = function(req,res) {
  //校验
  req.assert('username','用户名不能为空').notEmpty();
  req.assert('password','密码不能为空').notEmpty();
  var errors=req.validationErrors();
  if(errors && errors.length>0){
    var msgs=[];

    for(var i=0,l=errors.length;i<l;i++){
      msgs.push(errors[i].param);
    }

    var json={code:0,error:msgs};
    res.json(json);
    return;
  }

  var postparam=req.body;
  var username=postparam['username'];
  var pwd=postparam['password'];

  model_user.superAdmin(username,pwd,function(info){
    if(info.code ==1){
      req.session.user_id=0;
      req.session.user=username;
      res.json(info);

    }else if(info.code == 0){
      res.json(info)
    }
  });

  //res.json({code:0});
}


module.exports.init = init;

module.exports.login=login;