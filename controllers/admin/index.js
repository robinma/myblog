var express = require("express")
var model_user = require('../../model/user');

var init = function(req, res) {
  if (isLogin()) {
    res.render('admin/index', {});
  } else {
    //res.redirect('/admin/login');
    res.render('admin/login',{})
  }
};
//判断是否登录
var isLogin = function() {
  model_user.islogin();
  return false
};
//登录
var login = function(req,res) {
  var postparam=req.body;
  var username=postparam['username'];
  var pwd=postparam['password'];

  model_user.superAdmin(username,pwd,function(info){
    if(info.code ==1){

      res.json(info);
    }else if(info.code == 0){
      res.json(info)
    }
  });

  //res.json({code:0});
}


module.exports.init = init;

module.exports.login=login;