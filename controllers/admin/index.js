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

}


module.exports.init = init;

module.exports.login=login;